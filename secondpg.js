
".some-textbox" {
var text = "The quick fox jumped over the lazy dog.";
var charCount = text.length;
var currentLetterCount = 0;
var speed = 100; // How fast should it type?
var $input = $(".some-textbox");
var timerId = setInterval(writeLetter, speed);
function writeLetter() {
    var currentText = $input.val();
    var currentLetter = text.charAt(currentLetterCount);
    currentLetterCount++;
    $input.val(currentText + currentLetter);
    if(currentLetterCount == charCount)
        clearInterval(timerId);
}
}



function myFunction(){
text="hello";
alert("your button was pressed");
}
myFunction();
//document.getElementById('button').onclick = function() {
//text="Makeup";
