
/*var max=0;
      function textlist()
      {
      max=textlist.arguments.length;
      for (i=0; i<max; i++)
      this[i]=textlist.arguments[i];
      }
      tl=new textlist
      ( 
       "You glance over at your alarm clock when you notice that its 7:38.",    
       "YOU THINK: How is it almost 7:40?",
       "YOU THINK: I have to get ready for school NOW.",
       "You jump out of bed and run to:"
       
      );



      var x=0; pos=0;
      var l=tl[0].length;
      function textticker()
      {
        document.tickform.tickfield.value=tl[x].substring(0,pos)+"_";
        if(pos++==l) { pos=0; setTimeout("textticker()",1000); x++;
        if(x==max) x=0; l=tl[x].length; } else
        setTimeout("textticker()",50);
      }*/

 function showhide1(id) //makeup
 {
  document.getElementById("first_scenario").style.visibility = "hidden";
  document.getElementById("button2").style.visibility = "hidden";
  document.getElementById("button3").style.display = "block";
  document.getElementById("button4").style.display = "block";
    var e = document.getElementById(id);
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
	$('#hiddenText1').show(); return false;	
}

 function showhide2(id) //outfit
 {
 document.getElementById("first_scenario").style.visibility = "hidden"; //makes the previous scenario disappear
 document.getElementById("button1").style.visibility = "hidden"; //makes other button disappear
    var p = document.getElementById(id); //makes outfit button disappear
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
	$('#hiddenText2').show(); return false;	//makes new scenario appear
}

 function showhide3(id) //sphaghetti strap shirt from choosing makeup
 {
 document.getElementById("hiddenText1").style.visibility = "hidden"; //hide makeup message
 document.getElementById("button4").style.visibility = "hidden"; //hide baggy tshirt button
 document.getElementById("buttonnext").style.display = "block";
    var p = document.getElementById(id); //hide spaghetti strap
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
	$('#hiddenText3').show(); return false; //show sphaghetti strap message
}

 function showhide4(id) //choose baggy t-shirt from choosing makeup
 {
 document.getElementById("hiddenText1").style.visibility = "hidden"; //hide makeup message
 document.getElementById("button3").style.visibility = "hidden"; //hide spaghetti strap button
 document.getElementById("buttonnext").style.display = "block";
    var p = document.getElementById(id); //hide baggy tshirt button
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
	$('#hiddenText3').show(); return false; //show baggy Tshirt message
}

 function showhidenext(id)
 {
 document.getElementById("hiddenText3").style.visibility = "hidden";
 document.getElementById("button3").style.visibility = "hidden";
 document.getElementById("button4").style.visibility = "hidden";
 document.getElementById("buttonnext2").style.display = "block";
    var p = document.getElementById(id);
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
	$('#hiddenTextnext').show(); return false;	
}

 function showhidenext2(id)
 {
 document.getElementById("hiddenTextnext").style.visibility = "hidden";
 document.getElementById("buttonnext").style.visibility = "hidden";
 document.getElementById("buttongym").style.display = "block";
 document.getElementById("buttoncs").style.display = "block";
    var p = document.getElementById(id);
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
	$('#hiddenTextnext2').show(); return false;	
}


 function showhidegym(id)
 {
 document.getElementById("hiddenTextnext2").style.visibility = "hidden";
 document.getElementById("buttoncs").style.visibility = "hidden";
 document.getElementById("buttonyoga").style.display = "block";
 document.getElementById("buttonbball").style.display = "block";
    var p = document.getElementById(id);
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
	$('#hiddenTextgym').show(); return false;	
}

 function showhideyoga(id)
 {
 document.getElementById("hiddenTextgym").style.visibility = "hidden";
 document.getElementById("buttonbball").style.visibility = "hidden";
 document.getElementById("buttonnone").style.display = "block";
 document.getElementById("buttonangry").style.display = "block";
    var p = document.getElementById(id);
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
	$('#hiddenTextyoga').show(); return false;	
}

 function showhidenone(id)
 {
 document.getElementById("hiddenTextyoga").style.visibility = "hidden";
 document.getElementById("buttonangry").style.visibility = "hidden";
 document.getElementById("buttonch3").style.display = "block";
    var p = document.getElementById(id);
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
	$('#hiddenTextnone').show(); return false;	
}  
    
 function showhidech3(id)
 {
 document.getElementById("hiddenTextnone").style.visibility = "hidden";
 document.getElementById("buttonch3").style.display = "block";
    var p = document.getElementById(id);
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
	$('#hiddenTextch3').show(); return false;	
}  

var myString= "blah blah testing...";
var myArray= myString.split("");
var loopTimer:
function frameLooper () {
  if(myArray.length >0){
    document.getElementById("myTypingText").innerHTML+= myArray.shift();

  } else {
    clearTimeout(loopTimer);
    
  }
  loopTimer= setTimeout('frameLooper()',70);
}
frameLooper();
    