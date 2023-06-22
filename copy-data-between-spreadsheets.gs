function updateloandata() {

  // destination spreadsheet
  var destinationSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  var destSheet = destinationSpreadSheet.getSheetByName('rawdata');

  //source spreadsheet
  var sourceSpreadSheet = SpreadsheetApp.openById('1lplmZe2IC_E3i9kP8qLakV_C35wnHZ-25BC4bDuBwHE');
  var srcSheet = sourceSpreadSheet.getSheetByName('rawdata');
  var lastRow = srcSheet.getLastRow();

  var rangenotation = 'loandata!A1:Q'+lastRow
  console.log(rangenotation)

  // Get the contents of loandata tab in srcSheet
  // set dateformat to numbervalues
  srcSheet.getRange("A1:A"+lastRow).setNumberFormat("0");
  var range = srcSheet.getDataRange();
  var values = range.getValues();

  // place loandata in the same range of the destination cell
  var request = {
    'valueInputOption': 'USER_ENTERED',
    'data': [
      {
        'range': rangenotation,
        'majorDimension': 'ROWS',
        'values': values
      }
    ]
  };
  Sheets.Spreadsheets.Values.batchUpdate(request, SpreadsheetApp.getActiveSpreadsheet().getId());

  destSheet.getRange("A1:A"+lastRow).setNumberFormat('dd/MM/yyyy');
  srcSheet.getRange("A1:A"+lastRow).setNumberFormat('dd/MM/yyyy');
  Logger.log('done');
}


