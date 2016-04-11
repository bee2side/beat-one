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
	// window resize, top image width change
	var winWidth = $(document).width();
	$(window).resize(function() {
		winWidth = $(document).width();
		topImageSize();
	});
	function topImageSize(){
		if(winWidth>1640){
			$(".menu_normal_white").css("background-size", winWidth+"px" );
			$(".menu_normal_white").css('height', '200px');
		}else if(winWidth>1032){
			$(".menu_normal_white").css("background-size", "auto" );
			$(".menu_normal_white").css('height', '200px');
		}else if(winWidth>820){
			$(".menu_normal_white").css("background-size", winWidth+"px" );
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

	// top image height change
	function topImageHeight(scrollTop){
		if(winWidth>1032){
			$(".menu_normal_white").css('height', 200 - scrollTop + "px");
		}else{
			$(".menu_normal_white").css('height', '100px');
		}
	}
	// scroll event
	$(window).scroll(function(){
		menuNum = 0;
		menuOn();
		var scrollTop = $(window).scrollTop();
		topImageHeight(scrollTop);
	});
});