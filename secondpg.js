
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




 function showhide1("button1") 
 {
  document.getElementById("first_scenario").style.visibility = "hidden";
  document.getElementById("button2").style.visibility = "hidden";
  document.getElementById("button1").style.visibility = "hidden";
    //var e = document.getElementById(id);
    //if(e.style.display == "none")
   // e.style.display = "block";
	//else
    //e.style.display = "none";
	$('#hiddenText1').show(); return false;	
}

 function showhide2(id) 
 {
 document.getElementById("first_scenario").style.visibility = "hidden";
 document.getElementById("button1").style.visibility = "hidden";
    var p = document.getElementById(id);
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
	$('#hiddenText2').show(); return false;	
}

 function showhide3(id) 
 {
    var e = document.getElementById(id);
    e.style.display = (e.style.display == 'block') ? 'none' : 'block';
	$('#hiddenText3').show(); return false;	
}

 function showhide4(id) 
 {
    var e = document.getElementById(id);
    e.style.display = (e.style.display == 'block') ? 'none' : 'block';
	$('#hiddenText4').show(); return false;	
}
    
