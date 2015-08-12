
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
      var x=0; pos=0;
      var l=tl[0].length;
      function textticker()
      {
        document.tickform.tickfield.value=tl[x].substring(0,pos)+"_";
        if(pos++==l) { pos=0; setTimeout("textticker()",1000); x++;
        if(x==max) x=0; l=tl[x].length; } else
        setTimeout("textticker()",50);
      }


function myFunction() {
    document.getElementById("demo").innerHTML = "Oh No! You glance at the alarm clock and notice that its 7:38! You have to be at school in 20 minutes! Do you spend that time doing your makeup, or picking up a nice outfit?";
}

.button {
function myFunction() {
    document.getElementById("demo").innerHTML = "Oh No! You glance at the alarm clock and notice that its 7:38! You have to be at school in 20 minutes! Do you spend that time doing your makeup, or picking up a nice outfit?";
}
}