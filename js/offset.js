$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
			   if(!($(this).children().hasClass('tab-header')) || ($(window).width() > 800)) {
             	$('html,body').animate({
                	scrollTop: target.offset().top - 85
				 	}, 1000);
					
            		return false;
        	} else {
				$('html,body').animate({
                 	scrollTop: target.offset().top - 85 - 605
				 	}, 1000);
            	return false;
			}
		}
    }
});