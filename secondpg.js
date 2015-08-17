
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
function functionstart(id)
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
 	document.getElementById("smallscreen").style.backgroundImage = "url('hallway2.png')";
 	document.getElementById("buttonfinally").style.display = "block";
 	    document.getElementById("pop1").style.display = "block";
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
    var d = document.getElementById("buttonshirt");
    if(d.style.display == "none")
    d.style.display = "block";
	else
    d.style.display = "none";
    //getElementById("pop1").style.display="block";
	$('#showfinally').show(); return false;	
}

 function funcnext(id) //finally you get to school
 {
  	document.getElementById("smallscreen").style.backgroundImage = "url('hallway2.png')";
  document.getElementById("buttonfinally1").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("choosetank");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
    //getElementById("pop1").style.display="block";
  $('#showfinally1').show(); return false; 
}

 function funcnexty(id) //finally you get to school
 {
  	document.getElementById("smallscreen").style.backgroundImage = "url('hallway2.png')";
  document.getElementById("buttonfinally2").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("choosebaggy");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
    //getElementById("pop1").style.display="block";
  $('#showfinally2').show(); return false; 
}

 function funcshirt(id) //finally you get to school
 {
  	document.getElementById("smallscreen").style.backgroundImage = "url('hallway2.png')";
 	document.getElementById("buttonfinally").style.display = "block";
 	   document.getElementById("pop1").style.display = "block";
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

 function funcbuttonn(id) 
 {
  document.getElementById("buttongym").style.display = "block";
  document.getElementById("buttoncs").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("shownotice1");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#chooseclass').show(); return false;
}

 function funcbuttonnn(id) 
 {
  document.getElementById("buttongym").style.display = "block";
  document.getElementById("buttoncs").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("shownotice2");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#chooseclass').show(); return false;
}

 function funcgym(id) //you pick gym as your class
 {
  	document.getElementById("smallscreen").style.backgroundImage = "url('gym.png')";
 document.getElementById("nextnext").style.display = "block";
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
    var c = document.getElementById("buttoncs");
    if(c.style.display == "none")
    c.style.display = "block";
	else
    c.style.display = "none";
	$('#choosegym').show(); return false;
}

 function funccs(id) //you pick cs
 {
 document.getElementById("nextnext1").style.display = "block";
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
    var c = document.getElementById("buttongym");
    if(c.style.display == "none")
    c.style.display = "block";
  else
    c.style.display = "none";
  $('#choosecs').show(); return false;
}

 function funcnextnext(id) //you pick gym as your class
 {
 	document.getElementById("yoga1").style.display = "block";
 	document.getElementById("soccer1").style.display = "block";
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
	$('#nextpage').show(); return false;
}

 function funcnextnext1(id) //you pick gym as your class
 {
  document.getElementById("confidentanswer").style.display = "block";
  document.getElementById("shyanswer").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("choosecs");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#cspage').show(); return false;
}

function funcshyanswer(id) 
 {
  document.getElementById("a").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("cspage");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
    var c = document.getElementById("confidentanswer");
    if(c.style.display == "none")
    c.style.display = "block";
  else
    c.style.display = "none";
  $('#shypage').show(); return false;
}

function funcconfidentanswer(id) 
 {
  document.getElementById("b").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("cspage");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
    var c = document.getElementById("shyanswer");
    if(c.style.display == "none")
    c.style.display = "block";
  else
    c.style.display = "none";
  $('#confidentpage').show(); return false;
}

function funca(id) 
 {
  document.getElementById("c").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("shypage");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#csresolve').show(); return false;
}

function funcb(id) 
 {
  document.getElementById("d").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("confidentpage");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#csresolve').show(); return false;
}

function funcc(id) 
 {
  document.getElementById("e").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("csresolve");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#nextchapter').show(); return false;
}

function funcd(id) 
 {
  document.getElementById("f").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("csresolve");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#nextchapter').show(); return false;
}


 function funcyoga(id) //you pick gym as your class
 {
  	document.getElementById("smallscreen").style.backgroundImage = "url('yoga.png')";
 	document.getElementById("angry").style.display = "block";
 	document.getElementById("nothing").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
var p = document.getElementById("soccer1");
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
    var d = document.getElementById("nextpage");
    if(d.style.display == "none")
    d.style.display = "block";
	else
    d.style.display = "none";
	$('#chooseyoga').show(); return false;
}

 function funcangry(id) //you pick gym as your class
 {
   
  document.getElementById("lol").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("chooseyoga");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
    var d = document.getElementById("nothing");
    if(d.style.display == "none")
    d.style.display = "block";
  else
    d.style.display = "none";
  $('#angryresponse').show(); return false;
}

 function funcnothing(id) //you pick gym as your class
 {
   
  document.getElementById("lel").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("chooseyoga");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
    var d = document.getElementById("angry");
    if(d.style.display == "none")
    d.style.display = "block";
  else
    d.style.display = "none";
  $('#nothingresponse').show(); return false;
}

 function funclol(id) //you pick gym as your class
 {
   
  document.getElementById("lil").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("angryresponse");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#angryteacherresponse').show(); return false;
}

 function funclel(id) //you pick gym as your class
 {
   
  document.getElementById("lul").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("nothingresponse");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#nothingteacherresponse').show(); return false;
}

function funclil(id) //you pick gym as your class
 {
   
  document.getElementById("g").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("angryteacherresponse");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#csresolve').show(); return false;
}

function funclul(id) //you pick gym as your class
 {
   
  document.getElementById("h").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("nothingteacherresponse");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#csresolve').show(); return false;
}

 function funcsoccer(id) //you pick gym as your class
 {
 	document.getElementById("angry1").style.display = "block";
 	document.getElementById("nothing1").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
var p = document.getElementById("nextpage");
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
    var d = document.getElementById("yoga1");
    if(d.style.display == "none")
    d.style.display = "block";
	else
    d.style.display = "none";
	$('#choosesoccer').show(); return false;
}







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


function funcbaggy(id) 
 {
  document.getElementById("buttonnexty").style.display = "block";
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
    var d = document.getElementById("buttontank");
    if(d.style.display == "none")
    d.style.display = "block";
  else
    d.style.display = "none";
    $('#choosebaggy').show(); return false;  
}

 function funcfinally(id) //when next button is clicked.....
 {
document.getElementById("buttonnextclass").style.display = "block";
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
var d = document.getElementById("pop1");
    if(d.style.display == "none")
    d.style.display = "block";
  else
    d.style.display = "none";
  $('#shownotice').show(); return false;  
}

 function funcfinally1(id) //when next button is clicked.....
 {
document.getElementById("buttonn").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
    var p = document.getElementById("showfinally1");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#shownotice1').show(); return false;  
}

 function funcfinally2(id) //when next button is clicked.....
 {
document.getElementById("buttonnn").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
    var p = document.getElementById("showfinally2");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#shownotice2').show(); return false;  
}


