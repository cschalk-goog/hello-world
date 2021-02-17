function onOpen(){
var ui = SpreadsheetApp.getUi();
 ui.createMenu("Hello World")
   .addItem('Say Hello','myHelloWorld')
   .addToUi();
}
function myHelloWorld(){  
  var hello =Browser.msgBox("Hello World!");
}
