$(document).ready(function(){
	
	var load_screen = document.getElementById('loader');
	var imgs = ['load1.png', 'load2.png', 'load3.png', 'load2.png'];
	var i = 0;
	function loop() {
		if(i > (imgs.length - 1)) {
			i = 0;	
		}
		$('#loader img').fadeOut();
		load_screen.innerHTML = '<img src="images/' + imgs[i] + '" style="position: absolute; top: 45%; left: 45%; width: 10%"/>'
		i++;
		loopTimer = setTimeout(loop, 500);
	}
	loop();
	
	$('#header').waypoint('sticky');
	
});