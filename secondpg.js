
var max=0;
      function textlist()
      {
      max=textlist.arguments.length;
      for (i=0; i<max; i++)
      this[i]=textlist.arguments[i];
      }
      tl=new textlist
      ( 
       "This is a  message",    
       "Another one",
       "And this will be the third",
       "And the fourth is the last !"
       
      );
<<<<<<< HEAD
      var x=0; pos=0;
=======
<<<<<<< HEAD
      var x=0; pos=50;
>>>>>>> origin/master
      var l=tl[0].length;
      function textticker()
      {
        document.tickform.tickfield.value=tl[x].substring(0,pos)+"_";
        if(pos++==l) { pos=0; setTimeout("textticker()",1000); x++;
        if(x==max) x=0; l=tl[x].length; } else
=======
      var x=60; pos=0;
      var l=tl[60].length;
      function textticker()
      {
        document.tickform.tickfield.value=tl[x].substring(0,pos)+"_";
        if(pos++==l) { pos=0; setTimeout("textticker()",1000); x++;
        if(x==max) x=60; l=tl[x].length; } else
>>>>>>> parent of 24898dc... grw
        setTimeout("textticker()",50);
      }

//func1(){
//;
//}

//myFunction();

 function showhide(id) {
    var e = document.getElementById(id);
    e.style.display = (e.style.display == 'block') ? 'none' : 'block';
 }
 
 function changetext() {
 document.body.innerHTML = document.body.innerHTML.replace('this is a game', 'good choice this is a second text');
 }