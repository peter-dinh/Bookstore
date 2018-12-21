$(".panelMenu a").click(function (e) {
	$(this).closest(".panelMenu").find("a").removeClass("activePanelMenu");
	$(this).addClass("activePanelMenu");
	var a = $(this).html();

	if (a == "Month") {
		$(this).closest(".panel-body-widget").find(".day").removeClass("panelBodyContentActive");
		$(this).closest(".panel-body-widget").find(".year").removeClass("panelBodyContentActive");
		$(this).closest(".panel-body-widget").find(".month").addClass("panelBodyContentActive");
	}

	if (a == "Day") {
		$(this).closest(".panel-body-widget").find(".month").removeClass("panelBodyContentActive");
		$(this).closest(".panel-body-widget").find(".year").removeClass("panelBodyContentActive");
		$(this).closest(".panel-body-widget").find(".day").addClass("panelBodyContentActive");
	}

	if (a == "Year") {
		$(this).closest(".panel-body-widget").find(".month").removeClass("panelBodyContentActive");
		$(this).closest(".panel-body-widget").find(".day").removeClass("panelBodyContentActive");
		$(this).closest(".panel-body-widget").find(".year").addClass("panelBodyContentActive");
	}
	e.preventDefault();

});

$(document).ready(function () {
	$('#example').DataTable();
	$("#sparkline22").sparkline([5, 6, 7, 9, 9, 5, 3, 4, 4, 4, 6, 7, 5, 6, 7, 9, 9, 5, 3, 5, 7, 4, 6, 7], {
		type: 'line',
		width: '150',
		height: '35',
		lineColor: '#ffeb3b',
		fillColor: '#ffeb3b'
	});
});