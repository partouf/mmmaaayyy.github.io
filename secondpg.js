
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
 function funcshirt(id) //shirt from outfit
 {
 	document.getElementById("buttonfinally2").style.display = "block";
    var e = document.getElementById(id); //make shirt button gone
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
    var p = document.getElementById("chooseoutfit");
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
    var d = document.getElementById("buttondress");
    if(d.style.display == "none")
    d.style.display = "block";
	else
    d.style.display = "none";
	$('#chooseshirt').show(); return false;	//finally to school
}
 function funcdress(id) //dress from outfit
 {
 	document.getElementById("buttonfinally").style.display = "block";
    var e = document.getElementById(id); //make dress button gone
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
    var p = document.getElementById("chooseoutfit");
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
    var d = document.getElementById("buttonshirt");
    if(d.style.display == "none")
    d.style.display = "block";
	else
    d.style.display = "none";
	$('#choosedress').show(); return false;	
}
 
 function funcfinally(id) //finally you get to school
 {
 	document.getElementById("buttonnotice").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
var p = document.getElementById("choosedress");
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
	$('#finally').show(); return false;	
}
 
 function funcfinally2(id) //finally you get to school
 {
 	document.getElementById("buttonnotice").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
var p = document.getElementById("chooseshirt");
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
    $('#finally2').show(); return false;	
}    
    

 function funcnotice(id) //no one notices your outfit
 {
 	document.getElementById("buttongym").style.display = "block";
 	document.getElementById("buttoncs").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
var p = document.getElementById("finally");
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
var p = document.getElementById("finally2");
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
	$('#notice').show(); return false;
}