$(document).ready(function(){
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
	$(window).scroll(function(){
		menuNum = 0;
		menuOn();
	});
	// top image load
	var imgName = $(".alignnone").attr('src');
	var topImage = $(".top_img_container").css("background-image", "url("+imgName+")" );

	// top image width set
	var winWidth = $(document).width();
	topImageSize(winWidth);

	// top image width change
	$( window ).resize(function() {
		winWidth = $(document).width();
		topImageSize(winWidth);
	});
	function topImageSize(winWidth){
		if(winWidth>2000){
			$(".top_img_container").css("background-size", winWidth+"px" );
		}else{
			$(".top_img_container").css("background-size", "auto" );
		}
	};
});