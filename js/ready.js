var yOffset = 0;

$(window).load(function(){

	$('#header').waypoint('sticky');

	$(".ui-loader").hide();

  $('.ui-link').removeClass('ui-link');

	$.extend(  $.mobile , {
	ajaxEnabled		 : false,
	hashListeningEnabled: false
	});

	$('#loader').delay(500).fadeOut();
});
