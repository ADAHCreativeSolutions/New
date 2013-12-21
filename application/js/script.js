$(document).ready(function(){


	w = $(window).width();

	if(w>879){
		$("#searchBox").css({
			"left":(w-880)/2

		});

	}



$("#slides").owlCarousel({
singleItem:true,
slideSpeed:600,
mouseDrag:true,
touchDrag:true,
responsive:true,
autoPlay:4000,
rewindSpeed:false,
pagination:false

});

var owl = $("#slides").data('owlCarousel');

$(".left_arrow").click(function(){

owl.prev();

});

$(".right_arrow").click(function(){

owl.next();

});



});