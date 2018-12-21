$(function () {
	new Morris.Line({
		element: 'chart',
		data: [
			{
				year: '2008',
				value: 20
			},
			{
				year: '2009',
				value: 10
			},
			{
				year: '2010',
				value: 5
			},
			{
				year: '2011',
				value: 5
			},
			{
				year: '2012',
				value: 20
			}
  ],

		xkey: 'year',

		ykeys: ['value'],

		labels: ['Value'],

		lineColors: ["#00a2b4", "#db008c", "#9c27b0"],
		hideHover: 'auto',
		resize: true,
	});

});



$(function () {
	new Morris.Line({
		element: 'chart2',
		data: [
			{
				year: '2008',
				value: 20
			},
			{
				year: '2009',
				value: 10
			},
			{
				year: '2010',
				value: 5
			},
			{
				year: '2011',
				value: 5
			},
			{
				year: '2012',
				value: 20
			}
  ],
		xkey: 'year',
		ykeys: ['value'],
		labels: ['Value'],
		hideHover: 'auto',
		events: ['2009'],
		goals: [10],
		lineColors: ["#00a2b4", "#db008c", "#9c27b0"],
		resize: true,
	});
});


$(function () {

	Morris.Area({
		element: 'chart3',
		data: [
			{
				x: '2010 Q4',
				y: 3,
				z: 7
			},
			{
				x: '2011 Q1',
				y: 3,
				z: 4
			},
			{
				x: '2011 Q2',
				y: 1,
				z: 2
			},
			{
				x: '2011 Q3',
				y: 2,
				z: 5
			},
			{
				x: '2011 Q4',
				y: 8,
				z: 2
			},
			{
				x: '2012 Q1',
				y: 4,
				z: 4
			}
  ],
		xkey: 'x',
		ykeys: ['y', 'z'],
		labels: ['Y', 'Z'],
		lineColors: ["#00a2b4", "#db008c", "#9c27b0"],
		hideHover: 'auto',
		resize: true,
	}).on('click', function (i, row) {
		console.log(i, row);
	});

});



$(function () {

	Morris.Area({
		element: 'chart4',
		behaveLikeLine: true,
		data: [
			{
				x: '2011 Q1',
				y: 3,
				z: 3
			},
			{
				x: '2011 Q2',
				y: 2,
				z: 1
			},
			{
				x: '2011 Q3',
				y: 2,
				z: 4
			},
			{
				x: '2011 Q4',
				y: 3,
				z: 3
			}
  ],
		xkey: 'x',
		ykeys: ['y', 'z'],
		labels: ['Y', 'Z'],
		hideHover: 'auto',
		lineColors: ["#00a2b4", "#db008c", "#9c27b0"],
		resize: true
	});

});



$(function () {

	Morris.Bar({
		element: 'chart5',
		data: [
			{
				x: '2011 Q1',
				y: 1
			},
			{
				x: '2011 Q2',
				y: 2
			},
			{
				x: '2011 Q3',
				y: 3
			},
			{
				x: '2011 Q4',
				y: 4
			},
			{
				x: '2011 Q1',
				y: 5
			},
			{
				x: '2011 Q2',
				y: 6
			},
			{
				x: '2011 Q3',
				y: 7
			},
			{
				x: '2011 Q4',
				y: 8
			}
  ],
		xkey: 'x',
		ykeys: ['y'],
		labels: ['Y'],
		barColors: ["#00a2b4", "#db008c", "#9c27b0"],
		hideHover: 'auto',
		resize: true,
	}).on('click', function (i, row) {
		console.log(i, row);
	});


});



$(function () {

	Morris.Bar({
		element: 'chart6',
		data: [
			{
				x: '2011 Q1',
				y: 1,
				z: 2,
				a: 3
			},
			{
				x: '2011 Q2',
				y: 2,
				z: 3,
				a: 6
			},
			{
				x: '2011 Q3',
				y: 3,
				z: 4,
				a: 8
			},
			{
				x: '2011 Q4',
				y: 4,
				z: 8,
				a: 16
			}
  ],
		xkey: 'x',
		ykeys: ['y', 'z', 'a'],
		labels: ['Y', 'Z', 'A'],
		barColors: ["#00a2b4", "#db008c", "#9c27b0"],
		hideHover: 'auto',
		resize: true,
	}).on('click', function (i, row) {
		console.log(i, row);
	});


});

$(function () {

	Morris.Donut({
		element: 'chart7',
		data: [
			{
				value: 70,
				label: 'foo'
			},
			{
				value: 15,
				label: 'bar'
			},
			{
				value: 5,
				label: 'A really really long label'
			}
  ],
		formatter: function (x) {
			return x + "%"
		},
		colors: ["#00a2b4"],
		hideHover: 'auto',
		resize: true,
	}).on('click', function (i, row) {
		console.log(i, row);
	});

});

$(function () {

	Morris.Donut({
		element: 'chart8',
		data: [
			{
				value: 30,
				label: 'foo'
			},
			{
				value: 45,
				label: 'bar'
			},
			{
				value: 50,
				label: 'A really really long label'
			}
  ],
		formatter: function (x) {
			return x + "%"
		},
		colors: ["#00a2b4", "#db008c", "#9c27b0"],
		hideHover: 'auto',
		resize: true,
	}).on('click', function (i, row) {
		console.log(i, row);
	});

});