
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
      var x=100; pos=0;
      var l=tl[100].length;
      function textticker()
      {
        document.tickform.tickfield.value=tl[x].substring(0,pos)+"_";
        if(pos++==l) { pos=0; setTimeout("textticker()",1000); x++;
        if(x==max) x=100; l=tl[x].length; } else
        setTimeout("textticker()",50);
      }













//document.getElementById('button').onclick = function() {
//text="Makeup";
