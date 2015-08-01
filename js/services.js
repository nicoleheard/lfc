//Menu code for services
jQuery(window).load(function(){
	$('#services-nav').css('min-height', $('#services-ul').height());
	jQuery("#services-trigger").click(function(){
		//slide up all the link lists
		jQuery("#services-nav").slideToggle(400, function() {
			jQuery(this).toggleClass("nav-expanded").css('display','');	
		});
	});
	
	$('.tab-header').click(function(evn){
		$("#services-nav").slideToggle(400, function() {
			jQuery(this).toggleClass("nav-expanded").css('display','');	
		});
    });
});

$(window).resize(function() {
	if ($(window).width() > 800) {
		$('#services-nav').css('height', $('#services-content').height());
	} else {
		$('#services-nav').css('height', "auto");
	}
});
