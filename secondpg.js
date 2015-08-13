
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

=======
<<<<<<< HEAD

      var x=0; pos=0;
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/master
      var x=0; pos=0;

      var x=0; pos=50;
<<<<<<< HEAD

=======
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
      var l=tl[0].length;
      function textticker()
      {
        document.tickform.tickfield.value=tl[x].substring(0,pos)+"_";
        if(pos++==l) { pos=0; setTimeout("textticker()",1000); x++;
        if(x==max) x=0; l=tl[x].length; } else

<<<<<<< HEAD
      var x=60; pos=0;
      var l=tl[60].length;
=======
      var x=0; pos=0;
      var l=tl[0].length;
>>>>>>> origin/master
      function textticker()
      {
        document.tickform.tickfield.value=tl[x].substring(0,pos)+"_";
        if(pos++==l) { pos=0; setTimeout("textticker()",1000); x++;
<<<<<<< HEAD
        if(x==max) x=60; l=tl[x].length; } else

      var x=60; pos=0;
      var l=tl[60].length;
      function textticker()
      {
        document.tickform.tickfield.value=tl[x].substring(0,pos)+"_";
        if(pos++==l) { pos=0; setTimeout("textticker()",1000); x++;
=======
<<<<<<< HEAD
        if(x==max) x=0; l=tl[x].length; } else
=======
>>>>>>> origin/master
        if(x==max) x=60; l=tl[x].length; } else

      var x=60; pos=0;
      var l=tl[60].length;
      function textticker()
      {
        document.tickform.tickfield.value=tl[x].substring(0,pos)+"_";
        if(pos++==l) { pos=0; setTimeout("textticker()",1000); x++;
        if(x==max) x=60; l=tl[x].length; } else
<<<<<<< HEAD
=======
>>>>>>> parent of ca16575... Revert "dsv"
>>>>>>> origin/master
>>>>>>> origin/master
        setTimeout("textticker()",50);
      }


 function showhide(id) {
    var e = document.getElementById(id);
    e.style.display = (e.style.display == 'block') ? 'none' : 'block';
 }
 