$(function() {
	$("form").on("change", "#photoInput", function(e) {
		var path = "images/";
		var filePath = $(this).val();
		var arr = filePath.split('\\');
		var fileName = arr[arr.length-1];
		$("img[data-target='photoInput']").attr("src",path + fileName);
	});
	
	$(".table-add").find("#datepicker").datepicker({
		//minDate: 0,
		dayNamesMin: [ "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT" ]
	}); 
});
