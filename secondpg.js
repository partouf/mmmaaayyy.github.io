
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
  document.getElementById("button3").style.visibility = "visible";
  document.getElementById("button4").style.visibility = "visible";
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
 document.getElementById("button3").style.visibility = "visible";
  document.getElementById("button4").style.visibility = "visible";
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
    var p = document.getElementById(id); //hide baggy tshirt button
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
	$('#hiddenText4').show(); return false; //show sphaghetti strap message
}
    
