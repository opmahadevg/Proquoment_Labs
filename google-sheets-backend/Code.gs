// ============================================================================
//  PROQUOMENT LABS — GOOGLE SHEETS & DRIVE AUTOMATION API (v1.0)
//  Account: proquoment@gmail.com / Proquoment Workspace
//  File: Code.gs
// ============================================================================
//
//  SETUP INSTRUCTIONS (Run once):
//  1. Create a Google Sheet named "Proquoment Labs Enquiries" in Proquoment Drive.
//  2. Copy its Sheet ID from URL: https://docs.google.com/spreadsheets/d/SHEET_ID/edit
//  3. Paste SHEET_ID into CONFIG below.
//  4. (Optional) Put target Google Drive Folder ID into PARENT_FOLDER_ID.
//  5. In Apps Script Editor, select function "setupLabsSheet" and click "Run".
//  6. Click "Deploy" -> "New deployment" -> Select "Web app":
//     - Description: "Proquoment Labs Enquiries Webhook v1"
//     - Execute as: "Me" (proquoment@gmail.com)
//     - Who has access: "Anyone"
//  7. Copy Web App URL -> paste into VITE_GOOGLE_SHEET_WEBAPP_URL in .env
// ============================================================================

const CONFIG = {
  // Proquoment Labs Enquiries Google Sheet ID
  SHEET_ID: '12xfOb3uGBZxnP2YjxwaNwyQIho7BsP99BR7irUcy88Y',

  // Tab name inside spreadsheet
  SHEET_NAME: 'Enquiries',

  // Target Google Drive Folder ID (Optional: leave empty to keep in current location)
  PARENT_FOLDER_ID: '',

  // Timezone for timestamp logging
  TIMEZONE: 'Asia/Kolkata',

  // Formatting colors (Proquoment Cobalt & Paper)
  HEADER_BG: '#2238c4',
  HEADER_COLOR: '#ffffff',
  ZEBRA_BG: '#f7f9fd',
};

// ============================================================================
//  WEBHOOK ENTRY POINTS
// ============================================================================

/**
 * Health check probe
 */
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: 'active',
      service: 'Proquoment Labs Enquiries Webhook API',
      version: '1.0.0',
      timestamp: Utilities.formatDate(new Date(), CONFIG.TIMEZONE, 'yyyy-MM-dd HH:mm:ss z'),
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Handles incoming enquiry submissions from Proquoment Labs frontend
 */
function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    // Acquire lock for up to 10 seconds to serialize writes cleanly
    lock.waitLock(10000);

    const raw = e && e.postData ? e.postData.contents : '{}';
    let data;
    try {
      data = JSON.parse(raw);
    } catch (parseErr) {
      return respond({ error: 'Invalid JSON payload: ' + parseErr.message }, 400);
    }

    // Extract fields (supporting both camelCase and snake_case)
    const fullName = (data.fullName || data.full_name || '').toString().trim();
    const email = (data.email || '').toString().trim();
    const company = (data.company || '').toString().trim();
    const serviceType = (data.serviceType || data.service_type || data.inquiry_type || 'General Inquiry').toString().trim();
    const description = (data.description || data.message || '').toString().trim();
    const budgetRange = (data.budgetRange || data.budget_range || '').toString().trim();
    const referral = (data.referral || '').toString().trim();
    const sourceUrl = (data.sourceUrl || data.source_url || data.source || 'https://labs.proquoment.in/contact').toString().trim();
    const submissionId = data.submissionId || Utilities.getUuid();

    // Validation
    if (!fullName || !email) {
      return respond({ error: 'Validation failed: fullName and email are required.' }, 422);
    }

    // Connect to sheet
    const sheet = getOrInitSheet();
    const now = new Date();
    const formattedTimestamp = Utilities.formatDate(now, CONFIG.TIMEZONE, 'yyyy-MM-dd HH:mm:ss');

    // Build row array matching headers:
    // [Timestamp, Submission ID, Full Name, Email, Company, Service Type, Project Scope, Budget, Referral, Source URL, Status]
    const newRow = [
      formattedTimestamp,
      submissionId,
      fullName,
      email,
      company || '—',
      serviceType,
      description || '—',
      budgetRange || 'Flexible',
      referral || 'Direct',
      sourceUrl,
      'New'
    ];

    // Append row
    sheet.appendRow(newRow);
    const lastRow = sheet.getLastRow();

    // Subtle alternating row color
    if (lastRow % 2 === 0) {
      sheet.getRange(lastRow, 1, 1, newRow.length).setBackground(CONFIG.ZEBRA_BG);
    }

    return respond({
      success: true,
      message: 'Enquiry recorded in Proquoment Labs Drive ledger.',
      submissionId: submissionId,
      rowNumber: lastRow,
      timestamp: formattedTimestamp,
    });
  } catch (err) {
    Logger.log('doPost error: ' + err.toString());
    return respond({ error: 'Server error: ' + err.toString() }, 500);
  } finally {
    try {
      lock.releaseLock();
    } catch (_) {}
  }
}

// ============================================================================
//  SHEET INITIALIZATION & CONFIGURATION
// ============================================================================

/**
 * Run this function once from the editor to build/format headers in your sheet!
 */
function setupLabsSheet() {
  const sheet = getOrInitSheet();

  const headers = [
    'Timestamp (IST)',
    'Submission ID',
    'Full Name',
    'Work Email',
    'Company',
    'Service Type',
    'Project Scope & Objectives',
    'Estimated Budget',
    'Referral Source',
    'Source URL',
    'Status'
  ];

  // Set headers in row 1
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setValues([headers]);
  headerRange.setFontWeight('bold');
  headerRange.setFontColor(CONFIG.HEADER_COLOR);
  headerRange.setBackground(CONFIG.HEADER_BG);
  headerRange.setFontFamily('Arial');
  headerRange.setFontSize(10);
  headerRange.setVerticalAlignment('middle');

  sheet.setRowHeight(1, 36);
  sheet.setFrozenRows(1);

  // Column width formatting
  sheet.setColumnWidth(1, 150); // Timestamp
  sheet.setColumnWidth(2, 280); // Submission ID
  sheet.setColumnWidth(3, 170); // Full Name
  sheet.setColumnWidth(4, 210); // Email
  sheet.setColumnWidth(5, 170); // Company
  sheet.setColumnWidth(6, 220); // Service Type
  sheet.setColumnWidth(7, 340); // Description
  sheet.setColumnWidth(8, 160); // Budget
  sheet.setColumnWidth(9, 140); // Referral
  sheet.setColumnWidth(10, 200); // Source URL
  sheet.setColumnWidth(11, 100); // Status

  Logger.log('✅ Proquoment Labs Sheet headers created and styled successfully!');
}

/**
 * Resolves or creates sheet
 */
function getOrInitSheet() {
  let spreadsheet;
  if (CONFIG.SHEET_ID && CONFIG.SHEET_ID !== 'YOUR_PROQUOMENT_LABS_SHEET_ID_HERE') {
    spreadsheet = SpreadsheetApp.openById(CONFIG.SHEET_ID);
  } else {
    // If running bound to a spreadsheet
    spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    if (!spreadsheet) {
      throw new Error('Please set CONFIG.SHEET_ID in Code.gs with your spreadsheet ID.');
    }
  }

  let sheet = spreadsheet.getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(CONFIG.SHEET_NAME);
  }
  return sheet;
}

/**
 * Standardized JSON responder
 */
function respond(payload, statusCode) {
  return ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Test function you can run inside Apps Script editor to verify setup
 */
function testSubmission() {
  const fakeEvent = {
    postData: {
      contents: JSON.stringify({
        fullName: 'Test Founder',
        email: 'founder@example.com',
        company: 'Autonomous Systems Inc',
        serviceType: 'AI SaaS & Digital Product Engineering',
        description: 'Test enquiry from Apps Script editor to verify drive synchronization.',
        budgetRange: '$10,000 - $25,000 (Full Product & System Engineering)',
        referral: 'LinkedIn',
        sourceUrl: 'https://labs.proquoment.in/contact'
      })
    }
  };

  const res = doPost(fakeEvent);
  Logger.log('Test result: ' + res.getContent());
}
