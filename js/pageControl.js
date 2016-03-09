$(document).ready(function(){
	var menuNum = 0
	function menuOn(){
		if(menuNum == 0){
			$(".menu").css("display", "block");
			$(".menubtn").css("background-position-x", "-50px")
			menuNum = 1;
		}else{
			$(".menu").css("display", "none");
			$(".menubtn").css("background-position-x", "0")
			menuNum = 0;
		}
	};
	$(".menubtn").click(function(){
		menuOn();
	});

});