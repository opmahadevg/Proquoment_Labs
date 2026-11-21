# Proquoment Labs — Google Sheets & Drive Setup Guide

This automation streams every form enquiry submitted on **Proquoment Labs** directly to a formatted Google Sheet in **Proquoment Google Drive** (`proquoment@gmail.com`).

---

### Live Google Sheet in Proquoment Drive (Already Created & Formatted)
- **Spreadsheet Name**: `Proquoment Labs Enquiries`
- **Spreadsheet ID**: `12xfOb3uGBZxnP2YjxwaNwyQIho7BsP99BR7irUcy88Y`
- **Direct Drive Link**: [https://docs.google.com/spreadsheets/d/12xfOb3uGBZxnP2YjxwaNwyQIho7BsP99BR7irUcy88Y/edit](https://docs.google.com/spreadsheets/d/12xfOb3uGBZxnP2YjxwaNwyQIho7BsP99BR7irUcy88Y/edit)
- **Account**: `proquoment@gmail.com`
- Header styling (Proquoment Cobalt `#2238c4`), frozen header row, and initial sync from Supabase have already been applied.

---

## 2-Minute Web App Deployment Steps

### Step 1 — Create Apps Script Web App
1. Go to [script.google.com](https://script.google.com) &rarr; **+ New project**.
   *(Alternatively, inside the [Google Sheet](https://docs.google.com/spreadsheets/d/12xfOb3uGBZxnP2YjxwaNwyQIho7BsP99BR7irUcy88Y/edit), click **Extensions &rarr; Apps Script**)*.
2. Rename project to: `Proquoment Labs API`.
3. Erase any default code in `Code.gs`.
4. Copy the entire contents of [`Code.gs`](./Code.gs) and paste it into the editor (it already has the Sheet ID configured).
5. Click the **Save** icon.

---

### Step 2 — Deploy as Web App
1. At the top right of the Apps Script editor, click **Deploy** &rarr; **New deployment**.
2. Click the gear icon ⚙️ next to "Select type" &rarr; choose **Web app**.
3. Configure:
   - **Description**: `v1.0 - Production Labs Webhook`
   - **Execute as**: `Me (proquoment@gmail.com)`
   - **Who has access**: `Anyone` *(crucial so form submits without login prompts)*
4. Click **Deploy**.
5. Copy the **Web App URL**:
   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```

---

### Step 3 — Update Proquoment Labs Environment Variables
1. Paste the copied URL into `.env` (and Vercel environment variables):
   ```bash
   VITE_GOOGLE_SHEET_WEBAPP_URL=https://script.google.com/macros/s/YOUR_DEPLOYED_ID/exec
   ```
2. Re-deploy / rebuild Proquoment Labs (`npm run build`). Submissions will now write to Supabase AND stream into Google Sheets simultaneously!
