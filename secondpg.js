
var max=0;
      function opening()
      {
      max=opening.arguments.length;
      for (i=0; i<max; i++)
      this[i]=opening.arguments[i];
      }
      tl=new opening
      ( 
       "You glance over at your alarm clock when you notice that it’s 7:38.",    
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
      }
var max=0;
      function outfit()
      {
      max=outfit.arguments.length;
      for (i=0; i<max; i++)
      this[i]=outfit.arguments[i];
      }
      tl=new outfit
      ( 
       "YOU THINK: I should definitely choose my outfit first.",
      "YOU THINK: It’s really important to look presentable.",
      "You go through your entire closet, searching for the perfect outfit."
      "You have a hard time deciding between:"
       
      );



 function showhide(id) {
    var e = document.getElementById(id);
    e.style.display = (e.style.display == 'block') ? 'none' : 'block';
    for (var i=0; i<tl.length; i++) {
    splice(textlist[i],1,"hello");
    }
    }