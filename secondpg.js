
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
 	document.getElementById("please").style.display = "block";
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
   document.getElementById("pop3").style.display = "block";
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
 	   document.getElementById("please").style.display = "block";
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
   	document.getElementById("smallscreen").style.backgroundImage = "url('classroom.png')";
 document.getElementById("nextnext1").style.display = "block";
  document.getElementById("pop2").style.display = "block";
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
var y = document.getElementById("pop2"); 
    if(y.style.display == "none")
    y.style.display = "block";
  else
    y.style.display = "none";
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
   	document.getElementById("smallscreen").style.backgroundImage = "url('living.png')";
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

function funce(id) 
 {
  document.getElementById("o").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("nextchapter");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#convincemom').show(); return false;
}

function funco(id) 
 {
  document.getElementById("s").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("convincemom");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#dangerouscurfew').show(); return false;
}

function funcs(id) 
 {
   	document.getElementById("smallscreen").style.backgroundImage = "url('concert.png')";
  document.getElementById("z").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("dangerouscurfew");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#prepareconcert').show(); return false;
}

function funcz(id) 
 {
    	document.getElementById("smallscreen").style.backgroundImage = "url('city.png')";
  document.getElementById("partyfin").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("prepareconcert");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#partyfinish').show(); return false;
}

function funcpartyfin(id) 
 {
  document.getElementById("grabkeys").style.display = "block";    
  document.getElementById("crossstreet").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("partyfinish");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#walkinghome').show(); return false;
}

function funcd(id) 
 {
   	document.getElementById("smallscreen").style.backgroundImage = "url('living.png')";
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

function funcf(id) 
 {
  document.getElementById("p").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("nextchapter");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#convincemom').show(); return false;
}

function funcp(id) 
 {
  document.getElementById("v").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("convincemom");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#dangerouscurfew').show(); return false;
}

function funcv(id) 
 {
    	document.getElementById("smallscreen").style.backgroundImage = "url('concert.png')";
  document.getElementById("w").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("dangerouscurfew");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#prepareconcert').show(); return false;
}

function funcw(id) 
 {
     	document.getElementById("smallscreen").style.backgroundImage = "url('city.png')";
  document.getElementById("partyfin1").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("prepareconcert");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#partyfinish').show(); return false;
}

function funcpartyfin(id) 
 {
  document.getElementById("grabkeys").style.display = "block";    
  document.getElementById("crossstreet").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("partyfinish");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#walkinghome').show(); return false;
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
  $('#resolve1').show(); return false;
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
  $('#resolve1').show(); return false;
}

function funcg(id) //you pick gym as your class
 {
      	document.getElementById("smallscreen").style.backgroundImage = "url('living.png')";
  document.getElementById("i").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("resolve1");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#nextchapter').show(); return false;
}

function funci(id) 
 {
   
  document.getElementById("q").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("nextchapter");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#convincemom').show(); return false;
}

function funcq(id) 
 {
  document.getElementById("t").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("convincemom");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#dangerouscurfew').show(); return false;
}

function funct(id) 
 {
    	document.getElementById("smallscreen").style.backgroundImage = "url('concert.png')";
  document.getElementById("x").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("dangerouscurfew");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#prepareconcert').show(); return false;
}

function funcx(id) 
 {
     	document.getElementById("smallscreen").style.backgroundImage = "url('city.png')";
  document.getElementById("partyfin2").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("prepareconcert");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#partyfinish').show(); return false;
}

function partyfin2(id) 
 {
  document.getElementById("grabkeys").style.display = "block";    
  document.getElementById("crossstreet").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("partyfinish");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#walkinghome').show(); return false;
}

function funch(id) //you pick gym as your class
 {
      	document.getElementById("smallscreen").style.backgroundImage = "url('living.png')";
  document.getElementById("j").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("resolve1");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#nextchapter').show(); return false;
}


function funcj(id) //you pick gym as your class
 {
   
  document.getElementById("r").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("nextchapter");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#convincemom').show(); return false;
}

function funcr(id) 
 {
  document.getElementById("u").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("convincemom");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#dangerouscurfew').show(); return false;
}
function funcu(id) 
 {
    	document.getElementById("smallscreen").style.backgroundImage = "url('concert.png')";
  document.getElementById("y").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("dangerouscurfew");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#prepareconcert').show(); return false;
}

function funcy(id) 
 {
     	document.getElementById("smallscreen").style.backgroundImage = "url('city.png')";
  document.getElementById("partyfin3").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("prepareconcert");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#partyfinish').show(); return false;
}

function funcpartyfin3(id) 
 {
  document.getElementById("grabkeys").style.display = "block";    
  document.getElementById("crossstreet").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("partyfinish");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#walkinghome').show(); return false;
}

 function funcsoccer(id) 
 {
     	document.getElementById("smallscreen").style.backgroundImage = "url('soccer.png')";
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

 function funcangry1(id) //you pick gym as your class
 {
   
  document.getElementById("k").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("choosesoccer");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
    var d = document.getElementById("nothing1");
    if(d.style.display == "none")
    d.style.display = "block";
  else
    d.style.display = "none";
  $('#angryresponse1').show(); return false;
}

 function funcnothing1(id) //you pick gym as your class
 {
   
  document.getElementById("l").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("choosesoccer");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
    var d = document.getElementById("angry1");
    if(d.style.display == "none")
    d.style.display = "block";
  else
    d.style.display = "none";
  $('#nothingresponse1').show(); return false;
}

 function funck(id) 
 {
   
  document.getElementById("m").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("angryresponse1");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#angryteacherresponse').show(); return false;
}

 function funcl(id) 
 {
   
  document.getElementById("n").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
var p = document.getElementById("nothingresponse1");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#nothingteacherresponse').show(); return false;
}

function funcm(id) //you pick gym as your class
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
  $('#resolve1').show(); return false;
}

function funcn(id) //you pick gym as your class
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
  $('#resolve1').show(); return false;
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
var g = document.getElementById("please");
    if(g.style.display == "none")
    g.style.display = "block";
	else
    g.style.display = "none";
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

 function funcpartyfin(id) //when next button is clicked.....
 {
document.getElementById("weapon").style.display = "block";
document.getElementById("ignorethem").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
    var p = document.getElementById("partyfinish");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#catcall').show(); return false;  
}

 function funcpartyfin1(id) //when next button is clicked.....
 {
document.getElementById("weapon").style.display = "block";
document.getElementById("ignorethem").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
    var p = document.getElementById("partyfinish");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#catcall1').show(); return false;  
}

 function funcpartyfin2(id) //when next button is clicked.....
 {
document.getElementById("weapon").style.display = "block";
document.getElementById("ignorethem").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
    var p = document.getElementById("partyfinish");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#catcall2').show(); return false;  
}

 function funcpartyfin3(id) //when next button is clicked.....
 {
document.getElementById("weapon").style.display = "block";
document.getElementById("ignorethem").style.display = "block";
var e = document.getElementById(id); 
    if(e.style.display == "none")
    e.style.display = "block";
  else
    e.style.display = "none";
    var p = document.getElementById("partyfinish");
    if(p.style.display == "none")
    p.style.display = "block";
  else
    p.style.display = "none";
  $('#catcall3').show(); return false;  
}

