
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
function funcstart(id)
{
document.getElementById("buttonmakeup").style.display = "block";
document.getElementById("buttonoutfit").style.display = "block";
var e = document.getElementById(id); //makeup button gone
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
var e = document.getElementById("instructions"); //makeup button gone
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
var e = document.getElementById("entername"); //makeup button gone
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
$('#first_scenario').show(); return false;
}


function funcmakeup(id) //makeup
 {
  document.getElementById("buttontank").style.display = "block";
  document.getElementById("buttonbaggy").style.display = "block";
    var e = document.getElementById(id); //makeup button gone
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";	
	var p = document.getElementById("first_scenario");
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
    var d = document.getElementById("buttonoutfit");
    if(d.style.display == "none")
    d.style.display = "block";
	else
    d.style.display = "none";
    $('#choosemakeup').show(); return false;	
}

 function funcoutfit(id) //outfit
 {
 	document.getElementById("buttondress").style.display = "block";
    document.getElementById("buttonshirt").style.display = "block";
    var e = document.getElementById(id); //make outfit button gone
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
    var p = document.getElementById("first_scenario");
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
    var d = document.getElementById("buttonmakeup");
    if(d.style.display == "none")
    d.style.display = "block";
	else
    d.style.display = "none";
	$('#chooseoutfit').show(); return false;	//makes new scenario appear
}
 
 function funcdress(id) //finally you get to school
 {
 	document.getElementById("buttonfinally").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
var p = document.getElementById("chooseoutfit");
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
    var p = document.getElementById("buttonshirt");
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
    //getElementById("pop1").style.display="block";
	$('#showfinally').show(); return false;	
}
 function funcshirt(id) //finally you get to school
 {
 	document.getElementById("buttonfinally").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
var p = document.getElementById("chooseoutfit");
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
    var p = document.getElementById("buttondress");
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
    //getElementById("pop1").style.display="block";
	$('#showfinally').show(); return false;	
}

 function funcfinally(id) //when next button is clicked.....
 {
document.getElementById("buttonnext").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
    var p = document.getElementById("showfinally");
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
	$('#shownotice').show(); return false;	
}


 function funcclass(id) //no one notices your outfit
 {
 	document.getElementById("buttongym").style.display = "block";
 	document.getElementById("buttoncs").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
var p = document.getElementById("shownotice");
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
	$('#chooseclass').show(); return false;
}



 function functiongym(id) //you pick gym as your class
 {
 	document.getElementById("gymnext").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
var p = document.getElementById("chooseclass");
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
    var p = document.getElementById("buttoncs");
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
	$('#choosegym').show(); return false;
}

 /*function funcgymnext(id) //you pick gym as your class
 {
 	document.getElementById("yoga").style.display = "block";
 	document.getElementById("soccer").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
var p = document.getElementById("choosegym");
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
	$('#choosegymnext').show(); return false;
}*/


function functank(id) 
 {
  document.getElementById("buttonnext").style.display = "block";
    var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none"; 
  var p = document.getElementById("choosemakeup");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
    var d = document.getElementById("buttonbaggy");
    if(d.style.display == "none")
    d.style.display = "block";
  else
    d.style.display = "none";
    $('#choosetank').show(); return false;  
}

 