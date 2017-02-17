$(document).ready(function(){

	//toggle effect for navbar
	$(".nav-btm-item").click(function(){
		$(".active-nav").removeClass("active-nav");
		$(this).addClass("active-nav");
	});

	//toggle effect for tab
	$(".tab").click(function(){
		$(".active-bg").removeClass("active-bg");
		var tab_name = $(this).attr("href");
		$(tab_name).addClass("active-bg");
		$(tab_name).addClass("slideInLeft");
	});


});