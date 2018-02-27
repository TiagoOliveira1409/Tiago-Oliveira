window.addEventListener("scroll", function (){
	var documentTop =  $(window).scrollTop();
	$('.anime').each(function(){
		var itemTop = $(this).offset().top;
		if(documentTop > (itemTop-300)){
			$(this).addClass('anime-start');
		} else{
			$(this).removeClass('anime-start');
		}
	})
	})

$('nav a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href');
	var menuHeight = $('nav').innerHeight();
	var targetOfset = $(id).offset().top;
	$('html,body').animate({
		scrollTop: targetOfset - menuHeight
	},500)
})