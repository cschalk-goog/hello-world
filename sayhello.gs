function onOpen(){
var ui = SpreadsheetApp.getUi();
 ui.createMenu("Hello World")
   .addItem('Say Hello!','myHelloWorld')
   .addToUi();
}
/**
 * Says hello and prints current date.
 */
function myHelloWorld(){  
  var today = new Date();
  var hello =Browser.msgBox("Hello World!! Today is: " + today);
}
