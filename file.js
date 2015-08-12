//object.onclick=function(){myScript};
//document.getElementById("demo").addEventListener("click", myFunction);


function changeImage() {

        if (document.getElementById("imgClickAndChange").src == "play.png") 
        {
            document.getElementById("imgClickAndChange").src = "start.png";
        }
        else 
        {
            document.getElementById("imgClickAndChange").src = "play.png";
        }
        

		<script src="./city_scroller (1)_files/processing-1.4.1.js"></script>
		<script type="text/processing" data-processing-target="mycanvas">
		
		
		class Building {
			var height;
			var width;
			var color;
			var xPos;
			var yPos;
			var speed;
		
		Building (c, w, h, xpos, ypos, s) {
			color = c;
			height = h;
			width = w;
			speed = s;
			yPos = ypos;
			xPos = xpos;
			
		}
		
		void Picture (){
			noStroke();
			fill (color[0], color[1], color[2]);
			rect (xPos, yPos, width, height);
		}
		
		void movea(){
			xPos = xPos + speed;
			if (xPos > 1000){
				xPos = -89;
			}
		}
		void moveb(){
			xPos = xPos + speed;
			if (xPos > 1000){
				xPos = -138;
			}
		}
		void movec(){
			xPos = xPos + speed;
			if (xPos > 1000){
				xPos = -240;
			}
		}
		
			
		
	}
	
	class Star {
		var color;
		var xPos;
		var yPos;
		var speed;
		Star (c,x,y,s){
			color=c;
			xPos=x;
			yPos=y;
			speed=s;
		}
	
	void Picture(){
		noStroke();
		fill(color[0], color[1], color[2]);
		triangle(xPos, yPos, xPos+10, yPos+20, xPos+20, yPos);
		triangle (xPos, yPos+15, xPos+20, yPos+15, xPos+10, yPos-10);
	}
	
	void move(){
		xPos = xPos + speed;
		if (xPos > 1000){
		xPos=-30;
		}
	}
	
	
	}
	
	
	var fbuildings = []; // width 200 - 250
	var mbuildings = []; // width 100 - 150
	var bbuildings = []; // 50 - 100
	var starlist = [];
	
	void setup(){
		size(1000,800);
		background(0, 0, 0);
		var x = 0;
		var m = 0;
		var f = 0;
		var r=0
		
		for (var i = 0; i <= 25; i++){
			var color = [153, 204, 255];
			var wdth = floor(random(50, 100));
			var hght = random(550, 700);
			bbuildings.push(new Building(color, wdth, hght, x, 800 - hght, 1));
			x = x + wdth;
			/*if (x > 1000){
				x = 0;
			}*/
		}
		for (var i = 0; i <= 15; i++){
			var color = [0,128,255];
			var wdth = floor(random(100,150));
			var hght = random(300,500);
			mbuildings.push(new Building(color, wdth, hght, m, 800 - hght, 1.5));
			m = m + wdth;
			/*if (m > 1000){
				m = 0;
			}*/
		}
		for (var i = 0; i <= 10; i++){
			var color = [0, 51, 102];
			var wdth = floor(random(200,250));
			var hght = random(200, 300);
			fbuildings.push(new Building(color, wdth, hght, f, 800 - hght, 2));
			f =  f + wdth;
			/*if (f > 1000){
				f = 0;
			}*/
		}
		
		for (var i=0; i <= 9; i++) {
		var color = [255, 255, 0];
		var xPos = random(0, 1000);
		var yPos = random(30, 90);
		starlist.push(new Star(color, r, yPos, 0.5));
		r = r + 100;
		}
		
		
	}
	
	void draw(){
		background(0, 0, 0);
		for (var i = 0; i < bbuildings.length; i++){
			bbuildings[i].Picture();
			bbuildings[i].movea();
		}
		for (var i = 0; i < mbuildings.length; i++){
			mbuildings[i].Picture();
			mbuildings[i].moveb();
		}
		for (var i = 0; i < fbuildings.length; i++){
			fbuildings[i].Picture();
			fbuildings[i].movec();
		}
		
		for (var i=0; i<starlist.length; i++) {
		starlist[i].Picture();
		starlist[i].move();
		
		
		
		}
	}

		</script>
	<style type="text/css">@font-face {
  font-family: "PjsEmptyFont";
  src: url('data:application/x-font-ttf;base64,AAEAAAAKAIAAAwAgT1MvMgAAAAAAAAEoAAAAVmNtYXAAAAAAAAABiAAAACxnbHlmAAAAAAAAAbwAAAAkaGVhZAAAAAAAAACsAAAAOGhoZWEAAAAAAAAA5AAAACRobXR4AAAAAAAAAYAAAAAGbG9jYQAAAAAAAAG0AAAABm1heHAAAAAAAAABCAAAACBuYW1lAAAAAAAAAeAAAAAgcG9zdAAAAAAAAAIAAAAAEAABAAAAAQAAAkgTY18PPPUACwAgAAAAALSRooAAAAAAyld0xgAAAAAAAQABAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAAACAAIAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACMAIwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAMAAQAAAAwABAAgAAAABAAEAAEAAABB//8AAABB////wAABAAAAAAAAAAgAEgAAAAEAAAAAAAAAAAAAAAAxAAABAAAAAAABAAEAAQAAMTcBAQAAAAAAAgAeAAMAAQQJAAEAAAAAAAMAAQQJAAIAAgAAAAAAAQAAAAAAAAAAAAAAAAAA')
       format('truetype');
}</style></head>
	<body>
		<canvas id="mycanvas" tabindex="0" width="1000" height="800" style="image-rendering: -webkit-optimize-contrast !important;"></canvas>
	
<span style="position: absolute; top: 0px; left: 0px; opacity: 0; font-family: PjsEmptyFont, fantasy;">AAAAAAAA</span></body></html>