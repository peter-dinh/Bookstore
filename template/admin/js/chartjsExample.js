var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
var lineChartData = {
	labels : ["January","February","March","April","May","June","July"],
	datasets : [
		{
			label: "My First dataset",
			fillColor : "rgba(0,160,180,0.2)",
			strokeColor : "rgba(0,160,180,1)",
			pointColor : "rgba(0,160,180,1)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(220,220,220,1)",
			data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		},
		{
			label: "My Second dataset",
			fillColor : "rgba(156,39,176,0.2)",
			strokeColor : "rgba(156,39,176,1)",
			pointColor : "rgba(156,39,176,1)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(151,187,205,1)",
			data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		}
	]
}

var barChartData = {
	labels : ["January","February","March","April","May","June","July"],
	datasets : [
		{
			fillColor : "rgba(0,160,180,0.5)",
			strokeColor : "rgba(0,160,180,0.8)",
			highlightFill: "rgba(0,160,180,0.75)",
			highlightStroke: "rgba(0,160,180,1)",
			data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		},
		{
			fillColor : "rgba(156,39,176,0.5)",
			strokeColor : "rgba(156,39,176,0.8)",
			highlightFill : "rgba(156,39,176,0.75)",
			highlightStroke : "rgba(156,39,176,1)",
			data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		}
	]
}
	

var pieData = [
		{
			value: 300,
			color:"#00a2b4",
			highlight: "#00a2b4",
			label: "Red"
		},
		{
			value: 50,
			color: "#00e2f0",
			highlight: "#00e2f0",
			label: "Green"
		},
		{
			value: 100,
			color: "#db008c",
			highlight: "#db008c",
			label: "Yellow"
		},
		{
			value: 40,
			color: "#ffeb3b",
			highlight: "#ffeb3b",
			label: "Grey"
		},
		{
			value: 120,
			color: "#9c27b0",
			highlight: "#9c27b0",
			label: "Dark Grey"
		}

	];
	
	
	
var doughnutData = [
		{
			value: 300,
			color:"#00a2b4",
			highlight: "#00a2b4",
			label: "Red"
		},
		{
			value: 50,
			color: "#00e2f0",
			highlight: "#00e2f0",
			label: "Green"
		},
		{
			value: 100,
			color: "#db008c",
			highlight: "#db008c",
			label: "Yellow"
		},
		{
			value: 40,
			color: "#ffeb3b",
			highlight: "#ffeb3b",
			label: "Grey"
		},
		{
			value: 120,
			color: "#9c27b0",
			highlight: "#9c27b0",
			label: "Dark Grey"
		}

	];	
	
	
var polarData = [
	{
		value: 300,
		color:"#00a2b4",
		highlight: "#00a2b4",
		label: "Red"
	},
	{
		value: 50,
		color: "#00e2f0",
		highlight: "#00e2f0",
		label: "Green"
	},
	{
		value: 100,
		color: "#db008c",
		highlight: "#db008c",
		label: "Yellow"
	},
	{
		value: 40,
		color: "#ffeb3b",
		highlight: "#ffeb3b",
		label: "Grey"
	},
	{
		value: 120,
		color: "#9c27b0",
		highlight: "#9c27b0",
		label: "Dark Grey"
	}

];
	
	
	
var radarChartData = {
	labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
	datasets: [
		{
			label: "My First dataset",
			fillColor: "rgba(0,160,180,0.2)",
			strokeColor: "rgba(0,160,180,1)",
			pointColor: "rgba(0,160,180,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: [65,59,90,81,56,55,40]
		},
		{
			label: "My Second dataset",
			fillColor: "rgba(156,39,176,0.2)",
			strokeColor: "rgba(156,39,176,1)",
			pointColor: "rgba(156,39,176,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(151,187,205,1)",
			data: [28,48,40,19,96,27,100]
		}
	]
};	
	
	
window.onload = function(){

		var ctx = document.getElementById("canvas").getContext("2d");
		window.myLine = new Chart(ctx).Line(lineChartData, {
			responsive: true
		});

		var ctx1 = document.getElementById("canvas2").getContext("2d");
		window.myBar = new Chart(ctx1).Bar(barChartData, {
			responsive : true
		});
		
		
        var ctx2 = document.getElementById("canvas3").getContext("2d");
		window.myPie = new Chart(ctx2).Pie(pieData, {
			responsive : true
		});
			
		
		var ctx3 = document.getElementById("canvas4").getContext("2d");
		window.myDoughnut = new Chart(ctx3).Doughnut(doughnutData, {
			responsive : true		
		});
	
	
	
		var ctx4 = document.getElementById("canvas5").getContext("2d");
		window.myPolarArea = new Chart(ctx4).PolarArea(polarData, {
			responsive:true
		});
	
	
		window.myRadar = new Chart(document.getElementById("canvas6").getContext("2d")).Radar(radarChartData, {
			responsive: true
		});	
}	
	