const adviceSheet = SpreadsheetApp.openById("SHEED ID").getSheetByName("advice").activate()

const htmlTemplate = HtmlService.createTemplateFromFile("template.html");

function getEmailValues(i) { 
    
    var paymentPeriod =  adviceSheet.getRange(i,1).getValue();
    var driverName = adviceSheet.getRange(i,4).getValue();
    var DRN = adviceSheet.getRange(i,3).getValue();
    var Trips = adviceSheet.getRange(i,23).getValue();
    var Hours = adviceSheet.getRange(i,24).getValue();
    var amountDue = adviceSheet.getRange(i,11).getValue();
    var cashlessPayments = adviceSheet.getRange(i,8).getValue();
    var uberBalance = adviceSheet.getRange(i,6).getValue();
    var prevOutstanding = adviceSheet.getRange(i,29).getValue();
    var cummOutstanding = adviceSheet.getRange(i,30).getValue();
    Logger.log("Email sent to"+driverName);
    htmlTemplate.paymentPeriod = paymentPeriod;
    htmlTemplate.driverName = driverName;
    htmlTemplate.DRN = DRN;
    htmlTemplate.Trips = Trips;
    htmlTemplate.Hours = Hours;
    htmlTemplate.amountDue = amountDue.toLocaleString('ng-NG',{style: 'currency', currency: 'NGN'});
    htmlTemplate.cashlessPayments = cashlessPayments.toLocaleString('ng-NG',{style: 'currency', currency: 'NGN'});
    htmlTemplate.uberBalance = uberBalance.toLocaleString('ng-NG',{style: 'currency', currency: 'NGN'});
    htmlTemplate.prevOutstanding = prevOutstanding.toLocaleString('ng-NG',{style: 'currency', currency: 'NGN'});
    htmlTemplate.cummOutstanding = cummOutstanding.toLocaleString('ng-NG',{style: 'currency', currency: 'NGN'});
};

function sendEmail() {
  Browser.msgBox('You clicked the "Send Emails" Button!');
  var lr = adviceSheet.getLastRow();

  for (var i = 2; i <= lr; i++) {

    getEmailValues(i)
    
    if (adviceSheet.getRange(i,5).getValue()=='income product') {
      Product = 'Income';
    } else {
      Product = adviceSheet.getRange(i,5).getValue();
    };

    htmlTemplate.Product = Product;

    var currentemail = adviceSheet.getRange(i,2).getValue();
    var htmlBody = htmlTemplate.evaluate().getContent();

    MailApp.sendEmail({ 
      to: currentemail,
    subject: "test email 3",
    body: "TEST",
    htmlBody: htmlBody
  });
  }
  Browser.msgBox('All emails have been sent!');
}
