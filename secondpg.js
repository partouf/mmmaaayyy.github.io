var timer = 0;

timer = setInterval ( "updateElement()", 5000 );

function updateElement ( )
{
  var stringToType = "this text will be typed you woke up late and you have to either put on makeup or get dressed,girl";
  var oldValue = getElementById('myelement').Value;

if(stringToType == oldValue)
{
  clearInterval(timer);
}  
else
{
  getElementById('myelement').Value = oldValue + stringToType.subString(oldValue.length, 1);
}
}

function myFunction() {
    document.getElementById("demo").innerHTML = stringToType;
}
