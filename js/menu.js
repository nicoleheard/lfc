jQuery(window).load(function(){
	
	if(window.location.hash) {
		console.log("true");
		$("html, body").animate({scrollTop:$(window.location.hash).offset().top -85 }, 0);
	}
	
	jQuery("#mobile-nav").css('display','none');
	
	$('a[href*=#]:not([href=#])').click(function(evn){
        evn.preventDefault();
		if($(this).children().hasClass('tab-header')) {
			var li = $(this).children();
			var myID = li[0].id, // e.g. tab-header-1
			contentID = myID.replace('header', 'content'); // result: tab-content-1
	
			deactivateAllTabs();
	
			document.getElementById(myID).className =  'tab-header active';
			document.getElementById(contentID).className = 'tab-content active';
 
			$(window).trigger('resize');	
		
		} else if ($(this).hasClass('mob_nav')) {
			$("#mobile-nav").slideToggle(400, function() {
			jQuery(this).toggleClass("nav-expanded").css('display','');	
			});
		} else {
			$("#mobile-nav").slideUp(400, function () {
				$(this).removeClass("nav-expanded").css('display','');
			});	
		}		
    });
	
	
	function deactivateAllTabs() {
		var tabHeaders = document.getElementsByClassName('tab-header'),
			tabContents = document.getElementsByClassName('tab-content');
		
		for (var i = 0; i < tabHeaders.length; i++) {
			tabHeaders[i].className = 'tab-header';
			tabContents[i].className = 'tab-content';
		}	
	}
	
	function deactivateAllMain() {
		$('.main-menu-item').each(function(){
			$(this).removeClass('active');	
		});
			
}



	
	//services menu
	
		$('#services-nav').css('min-height', $('#services-ul').height());
		jQuery("#services-trigger").click(function(){
			//slide up all the link lists
			if ($(window).width() < 800) {
				jQuery("#services-nav").slideToggle(400, function() {
					jQuery(this).toggleClass("nav-expanded").css('display','');	
				});
			}
		});
		
		$('.tab-header').click(function(evn){
			if ($(window).width() < 800) {
				$("#services-nav").slideToggle(400, function() {
					jQuery(this).toggleClass("nav-expanded").css('display','');	
				});
			}
		});
	
	
});	

$(window).resize(function() {
	if ($(window).width() > 800) {
		$('#services-nav').css('height', $('#services-content').height());
	} else {
		$('#services-nav').css('height', "auto");
		
		function blink() {
			document.getElementById('more-services').innerHTML = "";
			setTimeout(appear(),500);
		}
	
		function appear() {
			document.getElementById('more-services').innerHTML = "CLICK FOR MORE SERVICES";
			setTimeout(blink(),500);	
		}
	}
});



window.onload = function () {
	
	var pageDistance, pages, all_links, menu_items, i, j;

	console.log();
	menu_items = document.getElementById('main-menu');
	pages = $('.page');pageDistance = new Array(pages.length);
	all_links = menu_items.getElementsByTagName('a');
	for(i = 0; i < pages.length; i++) {
			pageDistance[i] = pages[i].offsetTop;
	}
	for(i = 0; i < pages.length; i++) {
		if (pageDistance[i] <= window.pageYOffset + 86 && ((i == pages.length - 1) || (pageDistance[i + 1] > window.pageYOffset + 86))) {
			removeActive();
			all_links[i].className = "main-menu-item active";
		}
	}
	
	window.onscroll = function () {
		for(i = 0; i < pages.length; i++) {
			if (pageDistance[i] <= window.pageYOffset + 85 && ((i == pages.length - 1) || (pageDistance[i + 1] > window.pageYOffset + 85))) {
				removeActive();
				all_links[i].className = "main-menu-item active";
			}
		}
	}
	function removeActive() {
		for(j = 0; j < all_links.length; j++) {
			all_links[j].className = "main-menu-item";
		}
	}
	
	$(window).resize(function() {
		for(i = 0; i < pages.length; i++) {
			pageDistance[i] = pages[i].offsetTop;
		}
	});
}

