

$('#bstart').click(function () {
	  	$("#bstart").css({"border-color":"blue"});
   		$("#bstart").text("FATTO");
		b.drawImage(tmmetronomo, 0, 0,375,750);


});

tmmetronomo=new Image();
tmmetronomo.src="images/metronome.png";

 canvasmetronomo = document.getElementById("canvasmetronomo");
  b= canvasmetronomo.getContext('2d');

b.fillStyle="#FFFFFF";
b.fillRect(0,0,50,50);
b.drawImage(tmmetronomo, 0, 0,375,750);
