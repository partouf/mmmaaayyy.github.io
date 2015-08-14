
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

 function showhide1(id) //makeup
 {
  //document.getElementById("first_scenario").style.visibility = "hidden";
  //document.getElementById("button2").style.visibility = "hidden";
  document.getElementById("button3").style.display = "block";
  document.getElementById("button4").style.display = "block";
    var e = document.getElementById(id);
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
	//$('#hiddenText1').show(); return false;	
	var e = document.getElementById("first_scenario");
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
    var e = document.getElementById("button2");
    if(e.style.display == "none")
    e.style.display = "block";
	else
    e.style.display = "none";
    $('#hiddenText1').show(); return false;	
}

 function showhide2(id) //outfit
 {
 document.getElementById("first_scenario").style.visibility = "hidden"; //makes the previous scenario disappear
 document.getElementById("button1").style.visibility = "hidden"; //makes other button disappear
    var p = document.getElementById(id); //makes outfit button disappear
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
	$('#hiddenText2').show(); return false;	//makes new scenario appear
}

 function showhide3(id) //sphaghetti strap shirt from choosing makeup
 {
 document.getElementById("hiddenText1").style.visibility = "hidden"; //hide makeup message
 document.getElementById("button4").style.visibility = "hidden"; //hide baggy tshirt button
 document.getElementById("buttonnext").style.display = "block";
    var p = document.getElementById(id); //hide spaghetti strap
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
	$('#hiddenText3').show(); return false; //show sphaghetti strap message
}

 function showhide4(id) //choose baggy t-shirt from choosing makeup
 {
 document.getElementById("hiddenText1").style.visibility = "hidden"; //hide makeup message
 document.getElementById("button3").style.visibility = "hidden"; //hide spaghetti strap button
 document.getElementById("buttonnext").style.display = "block";
    var p = document.getElementById(id); //hide baggy tshirt button
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
	$('#hiddenText3').show(); return false; //show baggy Tshirt message
}

 function showhidenext(id)
 {
 document.getElementById("hiddenText3").style.visibility = "hidden";
 document.getElementById("button3").style.visibility = "hidden";
 document.getElementById("button4").style.visibility = "hidden";
 document.getElementById("buttonnext2").style.display = "block";
    var p = document.getElementById(id);
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
	$('#hiddenTextnext').show(); return false;	
}

 function showhidenext2(id)
 {
 document.getElementById("hiddenTextnext").style.visibility = "hidden";
 document.getElementById("buttonnext").style.visibility = "hidden";
 document.getElementById("buttongym").style.display = "block";
 document.getElementById("buttoncs").style.display = "block";
    var p = document.getElementById(id);
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
	$('#hiddenTextnext2').show(); return false;	
}


 function showhidegym(id)
 {
 document.getElementById("hiddenTextnext2").style.visibility = "hidden";
 document.getElementById("buttoncs").style.visibility = "hidden";
 document.getElementById("buttonyoga").style.display = "block";
 document.getElementById("buttonbball").style.display = "block";
    var p = document.getElementById(id);
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
	$('#hiddenTextgym').show(); return false;	
}

 function showhideyoga(id)
 {
 document.getElementById("hiddenTextgym").style.visibility = "hidden";
 document.getElementById("buttonbball").style.visibility = "hidden";
 document.getElementById("buttonnone").style.display = "block";
 document.getElementById("buttonangry").style.display = "block";
    var p = document.getElementById(id);
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
	$('#hiddenTextyoga').show(); return false;	
}

 function showhidenone(id)
 {
 document.getElementById("hiddenTextyoga").style.visibility = "hidden";
 document.getElementById("buttonangry").style.visibility = "hidden";
 document.getElementById("buttonch3").style.display = "block";
    var p = document.getElementById(id);
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
	$('#hiddenTextnone').show(); return false;	
}  
    
 function showhidech3(id)
 {
 document.getElementById("hiddenTextnone").style.visibility = "hidden";
 document.getElementById("buttonch3").style.display = "block";
    var p = document.getElementById(id);
    if(p.style.display == "none")
    p.style.display = "block";
	else
    p.style.display = "none";
	$('#hiddenTextch3').show(); return false;	
}  


! function($) {

    "use strict";

    var Typed = function(el, options) {

        // chosen element to manipulate text
        this.el = $(el);

        // options
        this.options = $.extend({}, $.fn.typed.defaults, options);

        // attribute to type into
        this.isInput = this.el.is('input');
        this.attr = this.options.attr;

        // show cursor
        this.showCursor = this.isInput ? false : this.options.showCursor;

        // text content of element
        this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text()

        // html or plain text
        this.contentType = this.options.contentType;

        // typing speed
        this.typeSpeed = this.options.typeSpeed;

        // add a delay before typing starts
        this.startDelay = this.options.startDelay;

        // backspacing speed
        this.backSpeed = this.options.backSpeed;

        // amount of time to wait before backspacing
        this.backDelay = this.options.backDelay;

        // input strings of text
        this.strings = this.options.strings;

        // character number position of current string
        this.strPos = 0;

        // current array position
        this.arrayPos = 0;

        // number to stop backspacing on.
        // default 0, can change depending on how many chars
        // you want to remove at the time
        this.stopNum = 0;

        // Looping logic
        this.loop = this.options.loop;
        this.loopCount = this.options.loopCount;
        this.curLoop = 0;

        // for stopping
        this.stop = false;

        // custom cursor
        this.cursorChar = this.options.cursorChar;

        // shuffle the strings
        this.shuffle = this.options.shuffle;
        // the order of strings
        this.sequence = [];

        // All systems go!
        this.build();
    };

    Typed.prototype = {

        constructor: Typed

        ,
        init: function() {
            // begin the loop w/ first current string (global self.string)
            // current string will be passed as an argument each time after this
            var self = this;
            self.timeout = setTimeout(function() {
                for (var i=0;i<self.strings.length;++i) self.sequence[i]=i;

                // shuffle the array if true
                if(self.shuffle) self.sequence = self.shuffleArray(self.sequence);

                // Start typing
                self.typewrite(self.strings[self.sequence[self.arrayPos]], self.strPos);
            }, self.startDelay);
        }

        ,
        build: function() {
            // Insert cursor
            if (this.showCursor === true) {
                this.cursor = $("<span class=\"typed-cursor\">" + this.cursorChar + "</span>");
                this.el.after(this.cursor);
            }
            this.init();
        }

        // pass current string state to each function, types 1 char per call
        ,
        typewrite: function(curString, curStrPos) {
            // exit when stopped
            if (this.stop === true) {
                return;
            }

            // varying values for setTimeout during typing
            // can't be global since number changes each time loop is executed
            var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
            var self = this;

            // ------------- optional ------------- //
            // backpaces a certain string faster
            // ------------------------------------ //
            // if (self.arrayPos == 1){
            //  self.backDelay = 50;
            // }
            // else{ self.backDelay = 500; }

            // contain typing function in a timeout humanize'd delay
            self.timeout = setTimeout(function() {
                // check for an escape character before a pause value
                // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
                // single ^ are removed from string
                var charPause = 0;
                var substr = curString.substr(curStrPos);
                if (substr.charAt(0) === '^') {
                    var skip = 1; // skip atleast 1
                    if (/^\^\d+/.test(substr)) {
                        substr = /\d+/.exec(substr)[0];
                        skip += substr.length;
                        charPause = parseInt(substr);
                    }

                    // strip out the escape character and pause value so they're not printed
                    curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
                }

                if (self.contentType === 'html') {
                    // skip over html tags while typing
                    var curChar = curString.substr(curStrPos).charAt(0)
                    if (curChar === '<' || curChar === '&') {
                        var tag = '';
                        var endTag = '';
                        if (curChar === '<') {
                            endTag = '>'
                        } else {
                            endTag = ';'
                        }
                        while (curString.substr(curStrPos).charAt(0) !== endTag) {
                            tag += curString.substr(curStrPos).charAt(0);
                            curStrPos++;
                        }
                        curStrPos++;
                        tag += endTag;
                    }
                }

                // timeout for any pause after a character
                self.timeout = setTimeout(function() {
                    if (curStrPos === curString.length) {
                        // fires callback function
                        self.options.onStringTyped(self.arrayPos);

                        // is this the final string
                        if (self.arrayPos === self.strings.length - 1) {
                            // animation that occurs on the last typed string
                            self.options.callback();

                            self.curLoop++;

                            // quit if we wont loop back
                            if (self.loop === false || self.curLoop === self.loopCount)
                                return;
                        }

                        self.timeout = setTimeout(function() {
                            self.backspace(curString, curStrPos);
                        }, self.backDelay);
                    } else {

                        /* call before functions if applicable */
                        if (curStrPos === 0)
                            self.options.preStringTyped(self.arrayPos);

                        // start typing each new char into existing string
                        // curString: arg, self.el.html: original text inside element
                        var nextString = curString.substr(0, curStrPos + 1);
                        if (self.attr) {
                            self.el.attr(self.attr, nextString);
                        } else {
                            if (self.isInput) {
                                self.el.val(nextString);
                            } else if (self.contentType === 'html') {
                                self.el.html(nextString);
                            } else {
                                self.el.text(nextString);
                            }
                        }

                        // add characters one by one
                        curStrPos++;
                        // loop the function
                        self.typewrite(curString, curStrPos);
                    }
                    // end of character pause
                }, charPause);

                // humanized value for typing
            }, humanize);

        }

        ,
        backspace: function(curString, curStrPos) {
            // exit when stopped
            if (this.stop === true) {
                return;
            }

            // varying values for setTimeout during typing
            // can't be global since number changes each time loop is executed
            var humanize = Math.round(Math.random() * (100 - 30)) + this.backSpeed;
            var self = this;

            self.timeout = setTimeout(function() {

                // ----- this part is optional ----- //
                // check string array position
                // on the first string, only delete one word
                // the stopNum actually represents the amount of chars to
                // keep in the current string. In my case it's 14.
                // if (self.arrayPos == 1){
                //  self.stopNum = 14;
                // }
                //every other time, delete the whole typed string
                // else{
                //  self.stopNum = 0;
                // }

                if (self.contentType === 'html') {
                    // skip over html tags while backspacing
                    if (curString.substr(curStrPos).charAt(0) === '>') {
                        var tag = '';
                        while (curString.substr(curStrPos).charAt(0) !== '<') {
                            tag -= curString.substr(curStrPos).charAt(0);
                            curStrPos--;
                        }
                        curStrPos--;
                        tag += '<';
                    }
                }

                // ----- continue important stuff ----- //
                // replace text with base text + typed characters
                var nextString = curString.substr(0, curStrPos);
                if (self.attr) {
                    self.el.attr(self.attr, nextString);
                } else {
                    if (self.isInput) {
                        self.el.val(nextString);
                    } else if (self.contentType === 'html') {
                        self.el.html(nextString);
                    } else {
                        self.el.text(nextString);
                    }
                }

                // if the number (id of character in current string) is
                // less than the stop number, keep going
                if (curStrPos > self.stopNum) {
                    // subtract characters one by one
                    curStrPos--;
                    // loop the function
                    self.backspace(curString, curStrPos);
                }
                // if the stop number has been reached, increase
                // array position to next string
                else if (curStrPos <= self.stopNum) {
                    self.arrayPos++;

                    if (self.arrayPos === self.strings.length) {
                        self.arrayPos = 0;

                        // Shuffle sequence again
                        if(self.shuffle) self.sequence = self.shuffleArray(self.sequence);

                        self.init();
                    } else
                        self.typewrite(self.strings[self.sequence[self.arrayPos]], curStrPos);
                }

                // humanized value for typing
            }, humanize);

        }
        /**
         * Shuffles the numbers in the given array.
         * @param {Array} array
         * @returns {Array}
         */
        ,shuffleArray: function(array) {
            var tmp, current, top = array.length;
            if(top) while(--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
            return array;
        }

        // Start & Stop currently not working

        // , stop: function() {
        //     var self = this;

        //     self.stop = true;
        //     clearInterval(self.timeout);
        // }

        // , start: function() {
        //     var self = this;
        //     if(self.stop === false)
        //        return;

        //     this.stop = false;
        //     this.init();
        // }

        // Reset and rebuild the element
        ,
        reset: function() {
            var self = this;
            clearInterval(self.timeout);
            var id = this.el.attr('id');
            this.el.after('<span id="' + id + '"/>')
            this.el.remove();
            if (typeof this.cursor !== 'undefined') {
                this.cursor.remove();
            }
            // Send the callback
            self.options.resetCallback();
        }

    };

    $.fn.typed = function(option) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('typed'),
                options = typeof option == 'object' && option;
            if (!data) $this.data('typed', (data = new Typed(this, options)));
            if (typeof option == 'string') data[option]();
        });
    };

    $.fn.typed.defaults = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        // typing speed
        typeSpeed: 0,
        // time before typing starts
        startDelay: 0,
        // backspacing speed
        backSpeed: 0,
        // shuffle the strings
        shuffle: false,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: false,
        // false = infinite
        loopCount: false,
        // show cursor
        showCursor: true,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
    };


}(window.jQuery);




    