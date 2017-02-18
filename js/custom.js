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
		
	});

	$("#empty-unit").click(function(){
		$(".active-content").removeClass("active-content");		
		$("#add-unit").addClass("active-content");

	});

	$(".choice").click(function(){
		$("input#type").value=$(this).data("type");		
		$(".active-step").removeClass("active-step");		
		$("div.step-2").addClass("active-step");

	});

	$(".back-arrow").click(function(){
		var step = $(this).parent().data("step");
		step=step-1;
		if(step==0){
			$("#add-unit").removeClass("active-content");		
			$("#empty-unit").addClass("active-content");
		}
		else{
			var step = ".step-"+step;		
			$(step).addClass("active-step")	;

			$(this).parent().removeClass("active-step");
		}
	});

	$(".btn-next").click(function(){
		var step = $(this).parent().data("step");	
		step +=1;	
		step = ".step-"+step;		
		$(".active-step").removeClass("active-step");		
		$(step).addClass("active-step");
	});


});