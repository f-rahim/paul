// document ready
$(document).ready(function() {

	// magnificPopup
	$('.latest-work').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true
		},
	});



	// testmonial carousel
	// $('.testmonial-slide').owlCarousel({
	// 	animateOut: 'fadeOut',
	// 	// animateIn: 'fadeOut',
	// 	items: 1,
	// 	autoplay: true,
	// 	loop: true,

	// });


	// slicknav
	$('#menu').slicknav();
	
});