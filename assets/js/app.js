// The Bootstrap framework can handle so much. This required really no custom Javascript/jQuery...so I just wrote a fun loader screen just to get a little javascript in place.

function loaderTextAnimate(){
	$('#loader .text, #loader img').animate({
		'opacity':0.5
	}).delay(1).animate({
		'opacity':1
	});
	loaderTextAnimate();
}

$(document).ready(function(){
	
	$('#loader').fadeIn('fast', function(){
		$('.header, .page, .footer').fadeOut('fast').animate({
			'opacity':1
		}).delay(1000).fadeIn('slow');
		
	}).delay(4000).fadeOut('slow', function(){
		$('#loader').remove();
	});
	
	loaderTextAnimate();
	
	
});