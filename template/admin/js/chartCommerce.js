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
},
]
};


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


window.onload = function () {

	var ctx1 = document.getElementById("chartDashboard10").getContext("2d");
	window.myLine = new Chart(ctx1).Line(lineChartData1, {
		responsive: true,
		scaleLineColor: "rgba(255,255,255,1)",
		scaleFontColor: "#fff",
		scaleShowGridLines: false,
		scaleShowVerticalLines: false,
		scaleShowHorizontalLines: false,
		pointDotRadius: 6
	});
}

$(document).ready(function () {
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