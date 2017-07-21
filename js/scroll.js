var hash = window.location.hash;
if(hash != "") {
	window.history.replaceState("object or string", "Title", "/");
}

jQuery(window).load(function(){

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		|| location.hostname == this.hostname) {
			findTarget(this, $(this.hash));
		}
	});

	function findTarget(source, target) {
			 if (target.length) {
				 if (!source) {
					 $('html,body').animate({
 						scrollTop: target.offset().top - $('#header').height()
					}, 500);
				 } else if (!($(source).children().hasClass('tab-header')) || ($(window).width() > 800)) {
					$('html,body').animate({
						scrollTop: target.offset().top - $('#header').height()
						}, 1000);
						return false;
				} else {
					$('html,body').animate({
						scrollTop: target.offset().top - $('#header').height() - $('#services-nav').height() + 1
						}, 1000);

					return false;
				}
			}
		}

	if (hash) {
		findTarget(null, $(hash));
	}
});
