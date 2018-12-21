$(document).ready(function () {
	var w = $(window).width();
	if (w > 1280) {

		var h = $("#spy3").height();
		$('#chartDashboard9').css({
			'min-height': h + 40,

		});
	} else {
		var h = $("#spy3").height();
		$('#chartDashboard9').css({
			'min-height': h - 20,
		});
	}



	var w = $("#spy").width();
	$('#chartDashboard3').css({
		'min-width': w,
		'padding': '0 50px 0 20px'
	});
	$('#chartDashboard31').css({
		'min-width': w,
		'padding': '0 50px 0 20px'
	});
	$('#chartDashboard32').css({
		'min-width': w,
		'padding': '0 50px 0 20px'
	});

});



/*  MANAGED SERVICES FUNCTIONS  */
$(".switch").click(function () {
	$(this).toggleClass("on");
	$(".serviseContent").toggleClass("servisehide");
	$(".serviseContent").toggleClass("pulse");
})

/* REMOVE FUNCTIONS */
$('.remove').click(function (e) {
	$(this).closest('div.panel').remove();
	e.preventDefault();
});

/* SPARKLINE CHART */
$("#sparkline20").sparkline([5, 6, 7, 9, 9, 5, 3, 4, 4, 4, 6, 7, 5, 6, 7, 9, 9, 5, 3, 5, 7, 4, 6, 7], {
	type: 'line',
	width: '150',
	height: '35',
	lineColor: '#9c27b0',
	fillColor: '#9c27b0'
});


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


$(".todayGraph1").click(function () {
	$('.visitors').removeClass("todayHide");
	$('.pageviews').addClass("todayHide");
	$('.logs').addClass("todayHide");
});

$(".todayGraph2").click(function () {
	$('.visitors').addClass("todayHide");
	$('.pageviews').removeClass("todayHide");
	$('.logs').addClass("todayHide");
});

$(".todayGraph3").click(function () {
	$('.visitors').addClass("todayHide");
	$('.pageviews').addClass("todayHide");
	$('.logs').removeClass("todayHide");

});





/* CHARTS */

var randomScalingFactor = function () {
	return Math.round(Math.random() * 20)
};

var lineChartData = {
	labels: ["January", "February", "March", "April", "May", "June", "July"],
	datasets: [
		{
			label: "My First dataset",
			fillColor: "rgba(225,235,59,1)",
			strokeColor: "rgba(225,235,59,1)",
			pointColor: "rgba(225,235,59,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(225,235,59,1)",
			data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
		},
		{
			label: "My First dataset",
			fillColor: "rgba(219,0,140,1)",
			strokeColor: "rgba(219,0,140,1)",
			pointColor: "rgba(219,0,140,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(219,0,140,1)",
			data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
		},
	]
}


var randomScalingFactor7 = function () {
	return Math.round(Math.random() * 10)
};

var lineChartData7 = {
	labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
	datasets: [
		{
			label: "My First dataset",
			fillColor: "rgba(225,235,59,1)",
			strokeColor: "rgba(225,235,59,1)",
			pointColor: "rgba(225,235,59,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(225,235,59,1)",
			data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
		},
		{
			label: "My First dataset",
			fillColor: "rgba(219,0,140,1)",
			strokeColor: "rgba(219,0,140,1)",
			pointColor: "rgba(219,0,140,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(219,0,140,1)",
			data: [randomScalingFactor7(), randomScalingFactor7(), randomScalingFactor7(), randomScalingFactor7(), randomScalingFactor7(), randomScalingFactor7(), randomScalingFactor7()],
		},
	]
}
var lineChartData1 = {
	labels: ["6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00"],
	datasets: [
		{
			label: "My First dataset",
			fillColor: "rgba(220,220,220,0)",
			strokeColor: "#fff",
			pointColor: "#fff",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: [20, 300, 200, 250, 150, 300, 150]
        }
    ]
};

var doughnutData = [
	{
		value: 45,
		color: "#00a2b4",
		highlight: "#00a2b4",
		label: "TEAM A "
		},
	{
		value: 25,
		color: "#00e2f0",
		highlight: "#00e2f0",
		label: "TEAM B "
		},
	{
		value: 23,
		color: "#db008c",
		highlight: "#db008c",
		label: "TEAM C "
		},
	{
		value: 7,
		color: "#9c27b0",
		highlight: "#9c27b0",
		label: "TEAM D "
		}
	];


var lineChartData2 = {
	labels: ["index 1 ", "index 2 ", "index 3 ", "index 4 ", "index 5 ", "index 6 ", "index 7 ", "index 8 ", "index 9 ", "index 10 ", "index 11 ", "index 12 ", "index 13 ", "index 14 "],
	datasets: [
		{
			label: "My First dataset",
			fillColor: "rgba(225,0,144,0)",
			strokeColor: "rgba(225,0,144,1)",
			pointColor: "rgba(225,0,144,1)",
			pointStrokeColor: "transparent",
			pointHighlightFill: "#db008c",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: [200, 220, 260, 270, 450, 300, 150, 200, 220, 200, 250, 150, 300, 350]
        }
    ]
};

var lineChartData3 = {
	labels: ["index 1 ", "index 2 ", "index 3 ", "index 4 ", "index 5 ", "index 6 ", "index 7 ", "index 8 ", "index 9 ", "index 10 ", "index 11 ", "index 12 ", "index 13 ", "index 14 "],
	datasets: [
		{
			label: "My First dataset",
			fillColor: "rgba(0, 226, 240,0)",
			strokeColor: "rgba(0, 226, 240,1)",
			pointColor: "rgba(0, 226, 240,1)",
			pointStrokeColor: "transparent",
			pointHighlightFill: "rgba(0, 226, 240,1)",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: [150, 200, 300, 150, 300, 150, 200, 180, 220, 200, 250, 150, 200, 250]
        }
    ]
};


var lineChartData4 = {
	labels: ["index 1 ", "index 2 ", "index 3 ", "index 4 ", "index 5 ", "index 6 ", "index 7 ", "index 8 ", "index 9 ", "index 10 ", "index 11 ", "index 12 ", "index 13 ", "index 14 "],
	datasets: [
		{
			label: "My First dataset",
			fillColor: "rgba(0, 162, 180,0)",
			strokeColor: "rgba(0, 162, 180,1)",
			pointColor: "rgba(0, 162, 180,1)",
			pointStrokeColor: "transparent",
			pointHighlightFill: "rgba(0, 162, 180,1)",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: [220, 200, 250, 300, 280, 220, 150, 200, 180, 150, 150, 250, 300, 150]
        }
    ]
};


var randomScalingFactor = function () {
	return Math.round(Math.random() * 20)
};

var lineChartData6 = {
	labels: ["January", "February", "March", "April", "May", "June", "July"],
	datasets: [
		{
			label: "My First dataset",
			fillColor: "rgba(0,226,240,1)",
			strokeColor: "rgba(0,226,240,1)",
			pointColor: "rgba(0,226,240,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(225,235,59,1)",
			data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
		},
		{
			label: "My First dataset",
			fillColor: "rgba(0,162,180,1)",
			strokeColor: "rgba(0,162,180,1)",
			pointColor: "rgba(0,162,180,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(219,0,140,1)",
			data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
		},
		{
			label: "My First dataset",
			fillColor: "rgba(156,39,176,1)",
			strokeColor: "rgba(156,39,176,1)",
			pointColor: "rgba(156,39,176,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(219,0,140,1)",
			data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
		}
	]
}

var doughnutData1 = [
	{
		value: 70,
		color: "#00a2b4",
		highlight: "#00a2b4",
		label: "INDEX 1 "
},
	{
		value: 30,
		color: "#ffeb3b",
		highlight: "#ffeb3b",
		label: "INDEX 2 "
}

];


var doughnutData2 = [
	{
		value: 50,
		color: "#00a2b4",
		highlight: "#00a2b4",
		label: "INDEX 1 "
},
	{
		value: 50,
		color: "#ffeb3b",
		highlight: "#ffeb3b",
		label: "INDEX 2 "
}

];

var doughnutData3 = [
	{
		value: 10,
		color: "#00a2b4",
		highlight: "#00a2b4",
		label: "INDEX 1 "
},
	{
		value: 90,
		color: "#ffeb3b",
		highlight: "#ffeb3b",
		label: "INDEX 2 "
}
		];

var pieData = [
	{
		value: 69,
		color: "#00a2b4",
		highlight: "#00a2b4",
		label: "STARTUP "
		},

	{
		value: 8,
		color: "#db008c",
		highlight: "#db008c",
		label: ".INC COMPANY "
		},

	{
		value: 23,
		color: "#9c27b0",
		highlight: "#9c27b0",
		label: "CAMECORP "
		}
		];


var randomScalingFactor = function () {
	return Math.round(Math.random() * 100)
};
var barChartData = {
	labels: ["INDEX 1 ", "INDEX 2 ", "INDEX 3 ", "INDEX 4 ", "INDEX 5 ", "INDEX 6 ", "INDEX 7 "],
	datasets: [
		{
			fillColor: "rgba(156,39,176,1)",
			strokeColor: "rgba(156,39,176,1)",
			highlightFill: "rgba(156,39,176,1)",
			highlightStroke: "rgba(156,39,176,1)",
			data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
		},
		{
			fillColor: "rgba(225,235,59,1)",
			strokeColor: "rgba(225,235,59,1)",
			highlightFill: "rgba(225,235,59,1)",
			highlightStroke: "rgba(225,235,59,1)",
			data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
		}
	]
}


var radarChartData = {
	labels: ["Lorem", "Lorem", "Lorem", "Lorem", "Lorem"],
	datasets: [
		{
			label: "My First dataset",
			fillColor: "rgba(0,226,240,0.5)",
			strokeColor: "rgba(0,226,240,1)",
			pointColor: "rgba(0,226,240,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: [65, 59, 90, 81, 56]
			}
		]
};



window.onload = function () {
	var ctx = document.getElementById("chartDashboard").getContext("2d");
	window.myLine = new Chart(ctx).Line(lineChartData, {
		responsive: true,
		scaleShowGridLines: false,
		scaleShowVerticalLines: false,

	});

	var ctx = document.getElementById("chartDashboard02").getContext("2d");
	window.myLine = new Chart(ctx).Line(lineChartData7, {
		responsive: true,
		scaleShowGridLines: false,
		scaleShowVerticalLines: false,
	});


	var ctx1 = document.getElementById("chartDashboard7").getContext("2d");
	window.myLine = new Chart(ctx1).Line(lineChartData1, {
		responsive: true,
		scaleLineColor: "rgba(255,255,255,1)",
		scaleFontColor: "#fff",
		scaleShowGridLines: false,
		scaleShowVerticalLines: false,
		scaleShowHorizontalLines: false,
		pointDotRadius: 6,
	});



	var ctx2 = document.getElementById("chartDashboard11").getContext("2d");
	window.myDoughnut = new Chart(ctx2).Doughnut(doughnutData, {
		responsive: true,
		percentageInnerCutout: 50,
		segmentShowStroke: false

	});



	var ctx6 = document.getElementById("chartDashboard9").getContext("2d");
	window.myLine = new Chart(ctx6).Line(lineChartData6, {
		responsive: true,
		showScale: false,
		scaleLineColor: "rgba(000,000,000,1)",
		scaleFontColor: "#000",
		scaleShowGridLines: false,
		scaleShowVerticalLines: false,
		scaleShowHorizontalLines: false,
		pointDotRadius: 6,
	});

	var ctx4 = document.getElementById("chartDashboard4").getContext("2d");
	window.myDoughnut = new Chart(ctx4).Doughnut(doughnutData1, {
		responsive: true,
		percentageInnerCutout: 80,
		segmentShowStroke: false,

	});

	var ctx4 = document.getElementById("chartDashboard41").getContext("2d");
	window.myDoughnut = new Chart(ctx4).Doughnut(doughnutData2, {
		responsive: true,
		percentageInnerCutout: 80,
		segmentShowStroke: false
	});

	var ctx4 = document.getElementById("chartDashboard42").getContext("2d");
	window.myDoughnut = new Chart(ctx4).Doughnut(doughnutData3, {
		responsive: true,
		percentageInnerCutout: 80,
		segmentShowStroke: false
	});



	var ctx5 = document.getElementById("chartDashboard5").getContext("2d");
	window.myPie = new Chart(ctx5).Pie(pieData, {
		responsive: true,
		segmentShowStroke: false

	});



	window.myRadar = new Chart(document.getElementById("chartDashboard8").getContext("2d")).Radar(radarChartData, {
		responsive: true,
		scaleLineColor: "rgba(255,255,255,1)",
		pointLabelFontColor: "#fff",
		pointLabelFontSize: 14,

	});

}




$(function () {
	var d1 = [[1, 10], [2, 50], [3, 250], [4, 300], [5, 350], [6, 100], [7, 180], [8, 120], [9, 250], [10, 300], [11, 280], [12, 220], [13, 220], [14, 200], [15, 250], [16, 300], [17, 280], [18, 220], [19, 220], [20, 200], [21, 250], [22, 300], [23, 280], [24, 220]];
	var d2 = [[1, 100], [2, 150], [3, 150], [4, 100], [5, 200], [6, 180], [7, 280], [8, 180], [9, 80], [10, 90], [11, 60], [12, 140], [13, 200], [14, 150], [15, 300], [16, 220], [17, 210], [18, 150], [19, 135], [20, 160], [21, 230], [22, 150], [23, 100], [24, 90]];
	var d3 = [[1, 50], [2, 180], [3, 220], [4, 150], [5, 60], [6, 200], [7, 700], [8, 250], [9, 100], [10, 150], [11, 90], [12, 700], [13, 130], [14, 200], [15, 150], [16, 60], [17, 250], [18, 180], [19, 205], [20, 190], [21, 100], [22, 150], [23, 280], [24, 160]];
	var options = {
		colors: ["#db008c"],
		series: {
			shadowSize: 0,
			points: {
				show: true,
				radius: 5,
			},
			curvedLines: {
				apply: true,
				active: true,
				monotonicFit: true
			},
			lines: {
				show: true,
				lineWidth: 3,
				fill: false
			}
		},
		grid: {
			borderWidth: 0,
			labelMargin: 10,
			hoverable: true,
			clickable: true,
			mouseActiveRadius: 6
		},
		xaxis: {
			show: false,
			min: 2
		},
		yaxis: {
			show: false,
			min: -3,
			tickColor: '#eee',
			font: {
				lineHeight: 13,
				style: "normal",
				color: "#333"
			},
			shadowSize: 0
		},
		legend: {
			show: false
		}
	};
	$.plot("#placeholder11", [d1], options);

	var options = {
		colors: ["#00e2f0"],
		series: {
			shadowSize: 0,
			points: {
				show: true,
				radius: 5,
			},
			curvedLines: {
				apply: true,
				active: true,
				monotonicFit: true
			},
			lines: {
				show: true,
				lineWidth: 3,
				fill: false
			}
		},
		grid: {
			borderWidth: 0,
			labelMargin: 10,
			hoverable: true,
			clickable: true,
			mouseActiveRadius: 6
		},
		xaxis: {
			show: false,
			min: 2
		},
		yaxis: {
			show: false,
			min: -3,
			tickColor: '#eee',
			font: {
				lineHeight: 13,
				style: "normal",
				color: "#333"
			},
			shadowSize: 0
		},
		legend: {
			show: false
		}
	};
	$.plot("#placeholder12", [d2], options);

	var options = {
		colors: ["#00a2b4"],
		series: {
			shadowSize: 0,
			points: {
				show: true,
				radius: 5,
			},
			curvedLines: {
				apply: true,
				active: true,
				monotonicFit: true
			},
			lines: {
				show: true,
				lineWidth: 3,
				fill: false
			}
		},
		grid: {
			borderWidth: 0,
			labelMargin: 10,
			hoverable: true,
			clickable: true,
			mouseActiveRadius: 6
		},
		xaxis: {
			show: false,
			min: 2
		},
		yaxis: {
			show: false,
			min: -3,
			tickColor: '#eee',
			font: {
				lineHeight: 13,
				style: "normal",
				color: "#333"
			},
			shadowSize: 0
		},
		legend: {
			show: false
		}
	};
	$.plot("#placeholder13", [d3], options)
});


//Tooltips for Flot Charts
if ($('[id^="placeholder"]')[0]) {
	$('[id^="placeholder"]').bind("plothover", function (event, pos, item) {
		if (item) {
			var x = item.datapoint[0].toFixed(2),
				y = item.datapoint[1].toFixed(2);

			$(".flot-tooltip").html(x + " of " + y)
				.css({
					top: item.pageY + 5,
					left: item.pageX + 5
				})
				.fadeIn(200);
		} else {
			$(".flot-tooltip").hide();
		}
	});

	$("<div class='flot-tooltip'></div>").appendTo("body");
}