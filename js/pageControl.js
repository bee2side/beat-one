$(document).ready(function(){
	var menuNum = 0
	function menuOn(){
		if(menuNum == 0){
			$(".menu_open").css("display", "none");
			$(".menu_normal").css("display", "block");
			menuNum = 1;
		}else{
			$(".menu_open").css("display", "block");
			$(".menu_normal").css("display", "none");
			menuNum = 0;
		}
	};
	menuOn();
	$(".menubtn").click(function(){
		menuOn();
	});
});