
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




 function showhide(id) 
 {
    var e = document.getElementById(id);
    e.style.display = (e.style.display == 'block') ? 'none' : 'block';

    //document.write("<img src='screenshot_1.png' border=0>");
    }
    
    
(function($){
	function injector(t, splitter, klass, after) {
		var a = t.text().split(splitter), inject = '';
		if (a.length) {
			$(a).each(function(i, item) {
				inject += '<span class="'+klass+(i+1)+'">'+item+'</span>'+after;
			});	
			t.empty().append(inject);
		}
	}
	
	var methods = {
		init : function() {

			return this.each(function() {
				injector($(this), '', 'char', '');
			});

		},

		words : function() {

			return this.each(function() {
				injector($(this), ' ', 'word', ' ');
			});

		},
		
		lines : function() {

			return this.each(function() {
				var r = "eefec303079ad17405c889e092e105b0";
				// Because it's hard to split a <br/> tag consistently across browsers,
				// (*ahem* IE *ahem*), we replaces all <br/> instances with an md5 hash 
				// (of the word "split").  If you're trying to use this plugin on that 
				// md5 hash string, it will fail because you're being ridiculous.
				injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
			});

		}
	};

	$.fn.lettering = function( method ) {
		// Method calling logic
		if ( method && methods[method] ) {
			return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
		} else if ( method === 'letters' || ! method ) {
			return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
		}
		$.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
		return this;
	};
};

function animateChars ($chars, options, cb) {
    var that = this
      , count = $chars.length;

    if (!count) {
      cb && cb();
      return;
    } 

    if (options.shuffle) shuffle($chars);

    $chars.each(function (i) {
      var $this = $(this);
      
      function complete () {
        if (isInEffect(options.effect)) {
          $this.css('visibility', 'visible');
        } else if (isOutEffect(options.effect)) {
          $this.css('visibility', 'hidden');
        }
        count -= 1;
        if (!count && cb) cb();
      }

      var delay = options.sync ? options.delay : options.delay * i * options.delayScale;

      $this.text() ? 
        setTimeout(function () { animate($this, options.effect, complete) }, delay) :
        complete();
    })
  };

  var Textillate = function (element, options) {
    var base = this
      , $element = $(element);

    base.init = function () {
      base.$texts = $element.find(options.selector);
      
      if (!base.$texts.length) {
        base.$texts = $('<ul class="texts"><li>' + $element.text() + '</li></ul>');
        $element.html(base.$texts);
      }

      base.$texts.hide();

      base.$current = $('<span>')
        .text(base.$texts.find(':first-child').text())
        .prependTo($element);

      if (isInEffect(options.effect)) {
        base.$current.css('visibility', 'hidden');
      } else if (isOutEffect(options.effect)) {
        base.$current.css('visibility', 'visible');
      }

      base.setOptions(options);

      setTimeout(function () {
        base.options.autoStart && base.start();
      }, base.options.initialDelay)
    };

    base.setOptions = function (options) {
      base.options = options;
    };

    base.start = function (index) {
      var $next = base.$texts.find(':nth-child(' + (index || 1) + ')');

      (function run ($elem) {
        var options = $.extend({}, base.options, getData($elem));

        base.$current
          .text($elem.text())
          .lettering('words');

        base.$current.find('[class^="word"]')
            .css({ 
              'display': 'inline-block',
              // fix for poor ios performance
              '-webkit-transform': 'translate3d(0,0,0)',
                 '-moz-transform': 'translate3d(0,0,0)',
                   '-o-transform': 'translate3d(0,0,0)',
                      'transform': 'translate3d(0,0,0)'
            })
            .each(function () { $(this).lettering() });

        var $chars = base.$current.find('[class^="char"]')
          .css('display', 'inline-block');

        if (isInEffect(options.in.effect)) {
          $chars.css('visibility', 'hidden');
        } else if (isOutEffect(options.in.effect)) {
          $chars.css('visibility', 'visible');
        }

        animateChars($chars, options.in, function () {
          setTimeout(function () {
            // in case options have changed 
            var options = $.extend({}, base.options, getData($elem));

            var $next = $elem.next();

            if (base.options.loop && !$next.length) {
              $next = base.$texts.find(':first-child');
            } 

            if (!$next.length) return;

            animateChars($chars, options.out, function () {
              run($next)
            });
          }, base.options.minDisplayTime);
        });

      }($next));
    };

    base.destroy = function () {

    };

    base.init();

  }


  $.fn.textillate = function (settings, args) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('textillate')
        , options = $.extend(true, {}, $.fn.textillate.defaults, getData(this), typeof settings == 'object' && settings);

      if (!data) { 
        $this.data('textillate', (data = new Textillate(this, options)));
      } else if (typeof settings == 'string') {
        data[settings].apply(data, [].concat(args));
      } else {
        data.setOptions.call(data, options);
      }
    })
  };
  
  $.fn.textillate.defaults = {
    selector: '.texts',
    loop: false,
    minDisplayTime: 2000,
    initialDelay: 0,
    in: {
      effect: 'fadeInLeftBig',
      delayScale: 1.5,
      delay: 50,
      sync: false,
      shuffle: false
    },
    out: {
      effect: 'hinge',
      delayScale: 1.5,
      delay: 50,
      sync: false,
      shuffle: false,
    },
    autoStart: true,
    inEffects: [],
    outEffects: [ 'hinge' ]
  };

};

    document.write("<img src='screenshot_1.png' border=0>");
    }
    function showPic()
    {
      whatever i want to do when button is clicked!
    }

