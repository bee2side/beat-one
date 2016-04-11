$(document).ready(function(){
	//
	// top menu on, off
	var menuNum = 0
	function menuOn(){
		if(menuNum == 0){
			$(".menu_open").css("display", "none");
			$(".menu_background_color").css("display", "none");
			$("body").unbind('touchmove');
			menuNum = 1;
		}else{
			$(".menu_open").css("display", "block");
			$(".menu_background_color").css("display", "block");
			$("body").bind('touchmove', function(e){e.preventDefault()});
			menuNum = 0;
		}
	};
	menuOn();
	$(".menubtn").click(function(){
		menuOn();
	});
	$(".menubtn_content").click(function(){
		menuOn();
	});
	//
	// menu_normal_white height value
	var mn_height = 200;
	//
	// window resize
	$(window).resize(function() {

		topImageSize();
	});
	function topImageSize(){
		var w_width_a = $(document).width();
		if(w_width_a>1640){
			$(".menu_normal_white").css("background-size", w_width_a+"px" );
			$(".menu_normal_white").css('height', mn_height - $(window).scrollTop() + "px");
		}else if(w_width_a>1032){
			$(".menu_normal_white").css("background-size", "auto" );
			$(".menu_normal_white").css('height', mn_height - $(window).scrollTop() + "px");
		}else if(w_width_a>820){
			$(".menu_normal_white").css("background-size", w_width_a+"px" );
			$(".menu_normal_white").css('height', '100px');
		}else{
			$(".menu_normal_white").css("background-size", "820px, 100px" );
			$(".menu_normal_white").css('height', '100px');
		}
	};
	topImageSize();
	//
	// top image load
	var imgName = $(".alignnone").attr('src');
	$(".menu_normal_white").css("background-image", "url("+imgName+")" );
	//
	// top image height change
	function topImageHeight(scrollTop, w_width_b){
		if(w_width_b>1032){
			$(".menu_normal_white").css('height', mn_height - scrollTop + "px");
		}else{
			$(".menu_normal_white").css('height', '100px');
		}
	}
	//
	// scroll event
	$(window).scroll(function(){
		// top menu close for scroll
		menuNum = 0;
		menuOn();
		// top image height value
		var scrollTop = $(window).scrollTop(),
		w_width_b = $(document).width();

		topImageHeight(scrollTop, w_width_b);
	});
});