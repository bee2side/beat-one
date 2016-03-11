$(document).ready(function(){
	var menuNum = 0
	function menuOn(){
		if(menuNum == 0){
			$(".menu_open").css("display", "none");
			// $(".menubtn").css("background-position-x", "-70px")
			menuNum = 1;
		}else{
			$(".menu_open").css("display", "block");
			//$(".menubtn").css("background-position-x", "0")
			menuNum = 0;
		}
	};
	menuOn();
	$(".menubtn").click(function(){
		menuOn();
	});
});