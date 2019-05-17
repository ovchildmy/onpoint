var range = $(".range");
var slider = $(".block--third__slider");
var lastBlock = 3;

range.on("input", function () {
	var val = $(this).val();
	var curBlock;

	if(val < 66 && val > 33){
		curBlock = 2;
	} else if(val <= 33){
		curBlock = 1;
	} else {
		curBlock = 3;
	}

	if(lastBlock != curBlock){
		if(val < 66 && val > 33){
			console.log("второй");
			lastBlock = 2;
			slider.animate({
				"margin-left": -1024
			}, 500)
		} else if(val <= 33){
			console.log("первый");
			lastBlock = 1;
			slider.animate({
				"margin-left": 0
			}, 500)
		} else {
			console.log("Третий");
			lastBlock = 3;
			slider.animate({
				"margin-left": -2048
			}, 500)
		}
	}
})