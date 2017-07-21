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
		var min = '';
		var footer = $('#footer').height();
		switch (window.location.pathname) {
			case '/sitemap/':
				min = '#sitemap .container';
				break;
			case '/404/':
				min = '#error404 .container .one';
				break;
			default:
				min = '#banner h2';
				footer = 0;
		}
    $('.fullscreen').height($(window).height() - $('#header').height() - footer);
	$('.fullscreen').css('min-height', $(min).height());
});
