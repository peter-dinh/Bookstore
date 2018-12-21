/* connection Table */
$(document).ready(function () {
	$('#example1').DataTable({
		"order": [[3, "desc"]]
	});

	$('#example2').DataTable({
		"scrollY": "200px",
		"scrollCollapse": false,
		"paging": false
	});

	$('input[type=search]').css('color:black;')
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