$(document).ready(function () {

	/* INPUTS */

	$(document).ready(function () {
		$('.checkbox').iCheck({
			checkboxClass: 'icheckbox_square-pink',
			increaseArea: '20%'
		});
	});


	/* SALE RATE DASHBORD SIZE */
	var w = $("#spy").width();
	var w1 = (w / 2) * -1;

	$('#chartDashboard3').css({
		'min-width': w,
		'padding': '0 50px 0 20px',
		'margin-left': w1,

	});
	$('#chartDashboard31').css({
		'min-width': w,
		'padding': '0 50px 0 20px',
		'margin-left': w1,

	});
	$('#chartDashboard32').css({
		'min-width': w,
		'padding': '0 50px 0 20px',
		'margin-left': w1,
	});

	var w2 = $("#lastWeek").width();
	var chartwidth = w2 - 80;
	var chartmargin = (w2 - 40 - chartwidth) / 2;

	$('#chartDashboard6').css({
		'min-width': chartwidth,
		'margin-left': chartmargin,

	});




	/*  MANAGED SERVICES FUNCTIONS  */
	$(".switch").click(function () {
		$(this).toggleClass("on");
		$(".serviseContent").toggleClass("servisehide");
		$(".serviseContent").toggleClass("pulse");
	})

	/*  REMOVE PANEL  */
	$('.remove').click(function (e) {
		$(this).closest('div.panel').remove();
		e.preventDefault();
	});

	/* BUTTONS EFFECT */
	Waves.attach('.float-dark', ['waves-button', 'waves-dark']);
	Waves.attach('.float-button', ['waves-button', 'waves-light']);
	Waves.attach('.float-button-light', ['waves-button', 'waves-float', 'waves-light']);
	Waves.attach('.float-button-dark', ['waves-button', 'waves-float', 'waves-dark']);
	Waves.init();


	/* SIMPLE WEATHER  */
	$(document).ready(function () {
		$.simpleWeather({
			location: 'Austin, TX',
			woeid: '',
			unit: 'f',
			success: function (weather) {
				html = '<div class="panel-heading colorPurpule"> <h2 ><i class="weatherIconPurpule icon-' + weather.code + '"></i>     ' + weather.temp + '&deg;' + weather.units.temp + '</h2></div>';
				html += '<div class="panel-body"> <ul ><li>' + weather.city + ', ' + weather.region + '</li>';
				html += '<li class="currently">' + weather.currently + '</li>';
				html += '<li>' + weather.wind.direction + ' ' + weather.wind.speed + ' ' + weather.units.speed + '</li></ul></div>';
				$("#weather").html(html);
			},
			error: function (error) {
				$("#weather").html('<p>' + error + '</p>');
			}
		});
	});


	/* COUNTDOWN FUNCTION */
	$('#countdown1').countdown('2017/08/29', function (event) {
		var $this = $(this).html(event.strftime('' + '<div class="countdownData"> <span class="countdownIndexTheme">%H<span>&nbsp;:</span></span> <br> <span class="countdownDescription">hour</span> </div>' + '<div class="countdownData"> <span class="countdownIndexTheme">%M<span>&nbsp;:</span></span> <br> <span class="countdownDescription">min </span>  </div>' + '<div class="countdownData"> <span class="countdownIndexTheme">%S</span> <br> <span class="countdownDescription">sec </span> </div>'));
	});

});

/*TO DO FUNCTION */
$(".todo ul").sortable();

$("#add_todo").on('submit', function (e) {
	e.preventDefault();

	var $toDo = $(this).find('.name-of-todo'),
		toDo_name = $toDo.val();
	if (toDo_name.length >= 3) {
		var newid = "new" + "" + Math.random().toString(36).substring(11);
		// Create Event Entry
		$(".todo ul").append(
			'<li id="' + 'item-' + newid + '" class="list-group-item"><div class="checkbox"><input class="update-default-option" type="checkbox" id="' + newid + '" /><label for="' + newid + '">' + toDo_name + '</label></div><div class="pull-right action-btns"><a href="#" class="archive"><span class="fa fa-archive"></span></a><a href="#" class="trash"><span class="fa fa-close"></span></a></div></li>'
		);

		var eventObject = {
			title: $.trim($("#" + newid).text()),
			className: $("#" + newid).attr("data-bg"),
			stick: true
		};
		$("#" + newid).data('eventObject', eventObject);
		// Reset input
		$toDo.val('').focus();

		$('.todo .list-group-item .checkbox').iCheck('destroy');
		$('.todo .list-group-item .checkbox').iCheck({
			checkboxClass: 'icheckbox_square-pink',
			increaseArea: '20%'
		});
		$('.todo .list-group-item .checkbox').iCheck('update');
	} else {
		$toDo.focus();
	}
});

//Checking items
$(document).on('ifChecked', '.todo .list-group-item .checkbox', function (event) {
	$(this).closest(".list-group-item").not(".archive-item").addClass("checked-todo");
});

$(document).on('ifUnchecked', '.todo .list-group-item .checkbox', function (event) {
	$(this).closest(".list-group-item").removeClass("checked-todo");
});

//Check archive items
$(document).on('click', '.action-btns .archive', function (e) {
	$(this).closest(".list-group-item").addClass("archive-item").hide();
	e.preventDefault();
});

//Show all items
$(document).on('click', '.all-todo', function (e) {
	$('.todo .list-group-item').hide().not(".archive-item").show();
	e.preventDefault();
});

//Show only active items
$(document).on('click', '.active-todo', function (e) {
	$('.todo .list-group-item').hide().not(".archive-item").not(".checked-todo").show();
	e.preventDefault();
});

//Show only completed items
$(document).on('click', '.complete-todo', function (e) {
	$('.checked-todo').show();
	$('.todo .list-group-item').not(".checked-todo").hide();
	e.preventDefault();
});

//Show only archive items
$(document).on('click', '.archive-todo', function (e) {
	$('.archive-item').show();
	$('.todo .list-group-item').not(".archive-item").hide();
	e.preventDefault();
});



//Remove one completed item
$(document).on('click', '.trash', function (e) {
	var clearedCompItem = $(this).closest(".list-group-item").remove();
	e.preventDefault();
});

//Mark all as complete
$(document).on('ifChecked', 'input#clear', function (event) {
	$('.list-group .checkbox input').not(".archive-item .checkbox input").iCheck('check');
});

$(document).on('ifUnchecked', 'input#clear', function (event) {
	$('.list-group .checkbox input').iCheck('uncheck');
});


//Remove all completed items
$(document).on('click', '#clear-comp', function (e) {
	var clearedComp = $('.checked').closest(".list-group-item").remove();
	$('input#clear').iCheck('uncheck');
	e.preventDefault();
});




/* SALE RATE CHART SHOW */
$(".panelMenu a").click(function (e) {
	$(this).closest(".panelMenu").find("a").removeClass("activePanelMenu");
	$(this).addClass("activePanelMenu").addClass("pulse");
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


$(window).resize(function () {
	var w2 = $("#lastWeek").width();
	var chartwidth = w2 - 80;
	var chartmargin = (w2 - 40 - chartwidth) / 2;

	$('#chartDashboard6').css({
		'min-width': chartwidth,
		'margin-left': chartmargin,

	});

});



/* CHARTS */

var randomScalingFactor = function () {
	return Math.round(Math.random() * 20)
};
var lineChartData = {
	labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
	datasets: [{
		label: "My First dataset",
		fillColor: "rgba(229,233,233,0.2)",
		strokeColor: "rgba(209,211,211,1)",
		pointColor: "rgba(209,211,211,1)",
		pointStrokeColor: "#fff",
		pointHighlightFill: "#fff",
		pointHighlightStroke: "rgba(209,211,211,1)",
		data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
	}]
}


var randomScalingFactor1 = function () {
	return Math.round(Math.random() * 10)
};
var lineChartData7 = {
	labels: ["January", "February", "March", "April", "May", "June", "July"],
	datasets: [{
		label: "My First dataset",
		fillColor: "rgba(229,233,233,0.2)",
		strokeColor: "rgba(209,211,211,1)",
		pointColor: "rgba(209,211,211,1)",
		pointStrokeColor: "#fff",
		pointHighlightFill: "#fff",
		pointHighlightStroke: "rgba(209,211,211,1)",
		data: [randomScalingFactor1(), randomScalingFactor1(), randomScalingFactor1(), randomScalingFactor1(), randomScalingFactor1(), randomScalingFactor1(), randomScalingFactor1()],
	}]
}

var lineChartData1 = {
	labels: ["6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00"],
	datasets: [
		{
			label: "My First dataset",
			fillColor: "rgba(220,220,220,0)",
			strokeColor: "rgba(220,220,220,1)",
			pointColor: "rgba(220,220,220,1)",
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



var doughnutData1 = [
	{
		value: 70,
		color: "#9c27b0",
		highlight: "#9c27b0",
		label: "INDEX 1 "
		},
	{
		value: 30,
		color: "#00e2f0",
		highlight: "#00e2f0",
		label: "INDEX 2 "
		}

	];

var doughnutData2 = [
	{
		value: 50,
		color: "#9c27b0",
		highlight: "#9c27b0",
		label: "INDEX 1 "
		},
	{
		value: 50,
		color: "#00e2f0",
		highlight: "#00e2f0",
		label: "INDEX 2 "
		}

	];

var doughnutData3 = [
	{
		value: 10,
		color: "#9c27b0",
		highlight: "#9c27b0",
		label: "INDEX 1 "
		},
	{
		value: 90,
		color: "#00e2f0",
		highlight: "#00e2f0",
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


window.onload = function () {

	var ctx = document.getElementById("chartDashboard").getContext("2d");
	window.myLine = new Chart(ctx).Line(lineChartData, {
		responsive: true,
		scaleShowGridLines: true,
		scaleShowVerticalLines: true
	});

	var ctx = document.getElementById("chartDashboard7").getContext("2d");
	window.myLine = new Chart(ctx).Line(lineChartData7, {
		responsive: true,
		scaleShowGridLines: true,
		scaleShowVerticalLines: true
	});

	var ctx1 = document.getElementById("chartDashboard1").getContext("2d");
	window.myLine = new Chart(ctx1).Line(lineChartData1, {
		responsive: true,
		scaleLineColor: "rgba(255,255,255,1)",
		scaleFontColor: "#fff",
		scaleShowGridLines: true,
		scaleShowVerticalLines: true,
		scaleShowHorizontalLines: true,
		pointDotRadius: 6
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
		segmentShowStroke: false,
	});

	var ctx4 = document.getElementById("chartDashboard42").getContext("2d");
	window.myDoughnut = new Chart(ctx4).Doughnut(doughnutData3, {
		responsive: true,
		percentageInnerCutout: 80,
		segmentShowStroke: false,
	});



	var ctx5 = document.getElementById("chartDashboard5").getContext("2d");
	window.myPie = new Chart(ctx5).Pie(pieData, {
		responsive: true,
		segmentShowStroke: false
	});

	var ctx6 = document.getElementById("chartDashboard6").getContext("2d");
	window.myBar = new Chart(ctx6).Bar(barChartData, {
		responsive: true,
		showScale: false,
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