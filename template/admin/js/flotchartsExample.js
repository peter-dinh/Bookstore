$(function () {
	var d1 = [];
	for (var i = 0; i < 24; i += 0.5) {
		d1.push([i, Math.sin(i)]);
	}
	var options = {
		colors: ["#00a2b4"],
		series: {
			shadowSize: 0,
			curvedLines: { //This is a third party plugin to make curved lines
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
	$.plot("#placeholder", [d1], options);

	var options = {
		colors: ["#00a2b4"],
		series: {
			shadowSize: 0,
			curvedLines: { //This is a third party plugin to make curved lines
				apply: true,
				active: true,
				monotonicFit: true
			},
			lines: {
				show: true,
				lineWidth: 3,
				fill: 0.6
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


	$.plot("#placeholder2", [d1], options);
	var options = {
		colors: ["#00a2b4"],
		series: {
			shadowSize: 0,
			curvedLines: { //This is a third party plugin to make curved lines
				apply: true,
				active: true,
				monotonicFit: true
			},
			lines: {
				show: true,
				lineWidth: 1,
				fill: false
			}
		},
		points: {
			show: true
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
	$.plot("#placeholder3", [d1], options);

	var options = {
		colors: ["#00a2b4"],
		series: {
			shadowSize: 0,
			curvedLines: { //This is a third party plugin to make curved lines
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
			show: true
		}
	};

	$.plot("#placeholder4", [{
		label: "index 1",
		data: d1
}], options);

});

$(function () {
	var d1 = [[3, 5], [5, 8], [7, 10], [9, 12], [11, 14], [13, 16]];
	var options = {
		colors: ["#00a2b4"],
		series: {
			shadowSize: 0,
			bars: {
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
			min: -3,
			tickColor: '#eee',
			font: {
				lineHeight: 13,
				style: "normal",
				color: "#333",
			},
			shadowSize: 0
		},

		legend: {
			show: true
		}
	};

	$.plot("#placeholder5", [d1], options);


	var options = {
		colors: ["#00a2b4"],
		series: {
			shadowSize: 0,
			bars: {
				show: true,
				lineWidth: 3,
				fill: true
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
			min: -3,
			tickColor: '#eee',
			font: {
				lineHeight: 13,
				style: "normal",
				color: "#333",
			},
			shadowSize: 0
		},

		legend: {
			show: true
		}
	};

	$.plot("#placeholder6", [d1], options);

	// Add the Flot version string to the footer

	$("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
});





$(function () {
	var data = [
		{
			label: "Index 1",
			data: 20
},
		{
			label: "Index 2",
			data: 30
},
		{
			label: "Index 3",
			data: 90
},
		{
			label: "Index 4",
			data: 10
}

];

	$.plot('#placeholder7', data, {
		series: {
			pie: {
				show: true
			}
		},
		colors: ["#db008c", "#9c27b0", "#00a2b4", "#ffeb3b", "#9440ed"]
	});


	$.plot('#placeholder8', data, {
		series: {
			pie: {
				show: true
			}
		},
		legend: {
			show: false
		},
		colors: ["#db008c", "#9c27b0", "#00a2b4", "#ffeb3b", "#9440ed"]
	});

	$.plot('#placeholder9', data, {
		series: {
			pie: {
				innerRadius: 0.5,
				show: true
			}
		},
		colors: ["#db008c", "#9c27b0", "#00a2b4", "#ffeb3b", "#9440ed"]
	});

	$.plot('#placeholder10', data, {
		series: {
			pie: {
				show: true
			}
		},
		grid: {
			hoverable: true,
			clickable: true
		},
		colors: ["#db008c", "#9c27b0", "#00a2b4", "#ffeb3b", "#9440ed"]
	});

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