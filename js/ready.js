$(document).ready(function(){
	
	var load_screen = document.getElementById('loader');
	var imgs = ['load1.png', 'load2.png', 'load3.png', 'load2.png'];
	var i = 0;
	var top, left, width;
	
	if($(window).width() < 500) {
		top = '30%';
		left = '30%';
		width = '40%'; 
	} else if($(window).width() < 800) {
		top = '40%';
		left = '40%';
		width = '20%'; 
	} else {
		top = '45%';
		left = '45%';
		width = '10%'; 	
	}
	function loop() {
		if(i > (imgs.length - 1)) {
			i = 0;	
		}
		$('#loader img').fadeOut();
		load_screen.innerHTML = '<img src="images/' + imgs[i] + '" style="position: absolute; top: '+ top +'; left: ' + left + '; width: ' + width +'"/>'
		i++;
		loopTimer = setTimeout(loop, 500);
	}
	loop();
	
	$('#header').waypoint('sticky');
	
	$(".ui-loader").hide();
	
	
    $('.ui-link').removeClass('ui-link');
	
	$.extend(  $.mobile , {
	ajaxEnabled		 : false,
	hashListeningEnabled: false
	});
	
});