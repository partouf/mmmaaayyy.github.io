var text = "OMG you woke up late what do you do?!?";
var charCount = text.length;
var currentLetterCount = 0;
var speed = 100; // How fast should it type?
var $input = document.getElementById("someInput");

function writeLetter() {
    var currentText = $input.value;
    var currentLetter = text.charAt(currentLetterCount);
    currentLetterCount++;
    $input.value = currentText + currentLetter;
    if(currentLetterCount == charCount)
        clearInterval(timerId);
}

var timerId = setInterval(writeLetter, speed);