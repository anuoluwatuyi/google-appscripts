
# Google Apps Script Utilities for Google Sheets

## Overview

This repository contains a collection of Google Apps Script tools designed to enhance and automate tasks within Google Sheets. Below is an overview of the three main components provided in this repository:

1. **Custom Menu in Google Sheets**
2. **Data Transfer between Spreadsheets**
3. **Automated Weekly Email Advice from Google Sheets**

---

## Contents

### 1. Custom Menu in Google Sheets
A script to add a custom menu to a Google Sheet. This allows users to quickly access various functions or run scripts directly from the sheet's interface.

**Features:**
- Easily extendable to add more menu items.
- Simplifies the user experience by centralizing actions into a dropdown menu.

---

### 2. Data Transfer between Spreadsheets
When working with large volumes of data, the `IMPORTRANGE` formula in Google Sheets can become slow and inefficient. This script allows for a more performant way to transfer data between sheets, and it can be triggered based on specific actions or schedules.

**Features:**
- Efficient copying of data between sheets, overcoming limitations of `IMPORTRANGE`.
- Can be attached to triggers to automate data transfer.
- Use cases include periodic data syncing or updating between sheets.

**Code File:**
- `data_transfer.gs` – Contains the logic for efficient data transfer.

---

### 3. Automated Weekly Email Advice from Google Sheets
This component allows for sending customized weekly email advice to recipients based on data stored in a Google Sheet. The HTML template provided makes it easy to structure and style the content of the emails.

**Features:**
- Fetches relevant data (such as payment period, driver name, outstanding balances, etc.) from a sheet.
- Formats and sends emails using an HTML template, allowing for a well-structured and professional look.
- Can be triggered manually or set up to run automatically on a schedule.

**Code Files:**
- `email_from_sheets.gs` – Contains the logic for fetching data from the sheet, generating the email body using the template, and sending out emails.
- `email_from_sheets_html_format.html` – An HTML template used to structure the content of the email, including details like driver information, payment breakdown, and remittance instructions.

**Usage Instructions:**
- Ensure that the `SpreadsheetApp` ID in `email_from_sheets.gs` matches the ID of your Google Sheet.
- Customize the HTML template to match the structure and design of your desired email.
- Set up triggers in your Google Apps Script to automate the sending process or manually run the `sendEmail` function.

---

## Getting Started

1. **Clone this repository** or copy the relevant script files into your Google Apps Script project.
2. **Update script configurations**:
   - For the data transfer script, adjust sheet IDs and ranges as needed.
   - For the email automation, ensure the correct sheet ID and column indexes are specified.
3. **Deploy the scripts** as per your needs:
   - The custom menu script can be set to run on the `onOpen` trigger to initialize the menu each time the sheet is opened.
   - The data transfer and email sending scripts can be attached to time-driven triggers or other triggers like form submissions.

## Notes

- Ensure that you have the necessary permissions to run and authorize these scripts within your Google Workspace.
- Adjust the scripts based on your specific use case and requirements.

## Contributing

If you have ideas or enhancements, feel free to open an issue or submit a pull request.
