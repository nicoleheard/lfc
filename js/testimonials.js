var maxSlideHeight, slideHeights = [];
var currentSlide = 1;
var loop, slider, width, animationSpeed, pause;

jQuery(window).load(function(){
	$('.slide-content').each(function(i) {
		slideHeights[i] = $(this).height();
	});

	maxSlideHeight = Math.max.apply(null, slideHeights);
	
	slider = $('#testimonials #testimonials-one #testimonials-two');
	animationSpeed = 1000;
	pause = 6000;
	
	$(window).trigger('resize');
	
	$('#testimonials #testimonials-two').on("swipeleft", goToNext);
	$('#testimonials #testimonials-two').on("swiperight", goToPrev);
});

$(window).resize(function() {
	clearInterval(loop);
	width = $('#testimonials .container').width();
	$('#testimonials').height($(window).height() - 85);
	$('#testimonials').css('min-height', $('#testimonials #testimonials-one').height());
	$('#testimonials #testimonials-one').css('margin-top', $('#testimonials').height()/2 - $('#testimonials #testimonials-one').height()/2);
	$('#testimonials #testimonials-one').css('margin-bottom', $('#testimonials').height()/2 - $('#testimonials #testimonials-one').height()/2);
	$('#testimonials #testimonials-one #testimonials-two').css('width', width * $('#testimonials .slide-content').length);
	$('#testimonials .slide-content').css('width',  width);
	$('#testimonials #testimonials-one #testimonials-two').css('margin-left', 0);
	startSlider();
});

function startSlider() {
	loop = setInterval(function() {
		slider.animate({'margin-left':'-='+width}, animationSpeed, function() {currentSlide++; checkSlider();});}, pause);
}

function checkSlider() {
	if(currentSlide === $('.slide-content').length) {
		currentSlide = 1;
		slider.css('margin-left', 0);
	} else if (currentSlide === 0) {
		currentSlide = 3;
	}
}

function goToPrev() {
	clearInterval(loop);
	console.log("party stoped");
	loop = null;
	console.log(currentSlide);
	if(currentSlide <= 1) {
		currentSlide = 4;
		console.log("i care");
		slider.css('margin-left', -3 *  width);
		console.log(slider.css('margin-left') + currentSlide);
	}
	if(!($(slider).is(':animated'))) {
		slider.animate({'margin-left':'+='+width}, animationSpeed, function() {currentSlide--; checkSlider(); })
	}
	
	if(loop == null) {
		startSlider();
	}	
	
}

function goToNext() {
	clearInterval(loop);
	loop = null;
	if(!($(slider).is(':animated'))) {
		slider.animate({'margin-left':'-='+width}, animationSpeed, function() {currentSlide++; checkSlider(); })
	}
	if(loop == null) {
		startSlider();
	}
}