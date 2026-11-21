# Proquoment Labs — Google Sheets & Drive Setup Guide

This automation streams every form enquiry submitted on **Proquoment Labs** directly to a formatted Google Sheet in **Proquoment Google Drive** (`proquoment@gmail.com`).

---

## 3-Minute Deployment Steps

### Step 1 — Create the Google Sheet in Proquoment Drive
1. Log into `proquoment@gmail.com` in your browser.
2. Open Google Drive: [drive.google.com](https://drive.google.com) (or navigate into your desired Proquoment folder).
3. Click **+ New** &rarr; **Google Sheets** &rarr; **Blank spreadsheet**.
4. Rename spreadsheet to: `Proquoment Labs Enquiries`.
5. Copy the **Sheet ID** from the browser URL:
   ```
   https://docs.google.com/spreadsheets/d/  >>>THIS_IS_THE_SHEET_ID<<<  /edit
   ```

---

### Step 2 — Create the Google Apps Script Web App
1. Go to [script.google.com](https://script.google.com) &rarr; **+ New project**.
   *(Alternatively, inside your newly created Google Sheet, click **Extensions &rarr; Apps Script**)*.
2. Rename the project to: `Proquoment Labs API`.
3. Erase any default code in `Code.gs`.
4. Copy the entire contents of [`Code.gs`](./Code.gs) and paste it into the editor.
5. In line 21, replace `'YOUR_PROQUOMENT_LABS_SHEET_ID_HERE'` with your **Sheet ID** from Step 1.
6. Click the **Save** icon (disk icon).

---

### Step 3 — Format the Sheet Headers (Run Once)
1. In the toolbar dropdown next to "Debug", select the function `setupLabsSheet`.
2. Click **▶ Run**.
3. When prompted "Authorization required", click **Review permissions** &rarr; select `proquoment@gmail.com` &rarr; click **Advanced** &rarr; **Go to Proquoment Labs API (unsafe)** &rarr; **Allow**.
4. Check the Execution Log:
   `✅ Proquoment Labs Sheet headers created and styled successfully!`
5. Switch to your Google Sheet — row 1 now has Proquoment Cobalt headers (`#2238c4`), frozen header row, and customized column widths.

---

### Step 4 — Deploy as Web App
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

### Step 5 — Update Proquoment Labs Environment Variables
1. Paste the copied URL into `.env` (and Vercel environment variables):
   ```bash
   VITE_GOOGLE_SHEET_WEBAPP_URL=https://script.google.com/macros/s/YOUR_DEPLOYED_ID/exec
   ```
2. Any submission from `https://labs.proquoment.in/contact` now simultaneously saves to:
   - **Supabase Database**: `public.labs_enquiries`
   - **Google Sheets**: `Proquoment Labs Enquiries` in Proquoment Drive
