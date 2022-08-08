// Menu on top
function onOpen(e) {
   SpreadsheetApp.getUi()
       .createMenu('Update Loan Data')
       .addItem('Update loan data', 'updateloandata')
       .addToUi();
 }
