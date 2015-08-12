
var text = "The quick fox jumped over the lazy dog.";
var charCount = text.length;
var currentLetterCount = 0;
var speed = 100; // How fast should it type?
var $input = $(".some-textbox");

function writeLetter() {
    var currentText = $input.val();
    var currentLetter = text.charAt(currentLetterCount);
    currentLetterCount++;
    $input.val(currentText + currentLetter);
    if(currentLetterCount == charCount)
        clearInterval(timerId);
}

var timerId = setInterval(writeLetter, speed);

img onclick="javascript:exportToForm('1.6','55','10','50','1')" src="next.png" />

function exportToForm(a, b, c, d, e) {
     alert(a, b);
 }