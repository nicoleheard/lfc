jQuery(window).load(function(){
		$(window).trigger('resize');
	
	jQuery("#menu-trigger").click(function(){
		//slide up all the link lists
		jQuery("#mobile-nav").slideToggle(400, function() {
			jQuery(this).toggleClass("nav-expanded").css('display','');	
		});
	});
});
$(window).resize(function() {
    jQuery('#error404').height($(window).height() - $('#header').height() - $('#footer').height());
	$('#error404').css('min-height', $('#error404 .container .one').height());
});

window.addEventListener("load", function() {
	var load_screen = document.getElementById('loader');
	function removeLoadScreen() {
		$('#loader').fadeOut();
		//document.body.removeChild(load_screen);
	}
	setTimeout(removeLoadScreen, 500);
});

