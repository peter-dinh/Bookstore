/* Data Table*/
$(document).ready(function () {
	$('#example').DataTable();
});

/* connection adaptability */
$(document).ready(function () {
	var w = $(window).width();
	if (w < 768) {
		$(".dataTableWrapper").addClass("table-responsive");
	} else {
		$(".dataTableWrapper").removeClass("table-responsive");
	}
});
$(window).resize(function () {
	var w = $(window).width();
	if (w < 768) {
		$(".dataTableWrapper").addClass("table-responsive");
	} else {
		$(".dataTableWrapper").removeClass("table-responsive");
	}
});





       
