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


$(document).ready(function () {
	$.simpleWeather({
		location: 'Austin, TX',
		woeid: '',
		unit: 'f',
		success: function (weather) {
			html = '<div class="panel-heading colorTheme"> <h2 ><i class="weatherIconPurpule icon-' + weather.code + '"></i>     ' + weather.temp + '&deg;' + weather.units.temp + '</h2></div>';
			html += '<div class="panel-body"> <ul ><li>' + weather.city + ', ' + weather.region + '</li>';
			html += '<li class="currently">' + weather.currently + '</li>';
			html += '<li>' + weather.wind.direction + ' ' + weather.wind.speed + ' ' + weather.units.speed + '</li></ul></div>';
			$("#weather1").html(html);
		},
		error: function (error) {
			$("#weather1").html('<p>' + error + '</p>');
		}
	});
});
$(document).ready(function () {
	$.simpleWeather({
		location: 'Austin, TX',
		woeid: '',
		unit: 'f',
		success: function (weather) {
			html = '<div class="panel-heading colorCyan"> <h2 ><i class="weatherIconPurpule icon-' + weather.code + '"></i>     ' + weather.temp + '&deg;' + weather.units.temp + '</h2></div>';
			html += '<div class="panel-body"> <ul ><li>' + weather.city + ', ' + weather.region + '</li>';
			html += '<li class="currently">' + weather.currently + '</li>';
			html += '<li>' + weather.wind.direction + ' ' + weather.wind.speed + ' ' + weather.units.speed + '</li></ul></div>';
			$("#weather2").html(html);
		},
		error: function (error) {
			$("#weather2").html('<p>' + error + '</p>');
		}
	});
});


/* CONTDOWN */
$('#countdown').countdown('2017/08/29', function (event) {
	var $this = $(this).html(event.strftime('' + '<div class="countdownData"> <span class="countdownIndexPurpule">%H<span>&nbsp;:</span></span> <br> <span class="countdownDescription">hour</span> </div>' + '<div class="countdownData"> <span class="countdownIndexPurpule">%M<span>&nbsp;:</span></span> <br> <span class="countdownDescription">min </span>  </div>' + '<div class="countdownData"> <span class="countdownIndexPurpule">%S</span> <br> <span class="countdownDescription">sec </span> </div>'));
});

$('#countdown1').countdown('2017/08/29', function (event) {
	var $this = $(this).html(event.strftime('' + '<div class="countdownData"> <span class="countdownIndexTheme">%H<span>&nbsp;:</span></span> <br> <span class="countdownDescription">hour</span> </div>' + '<div class="countdownData"> <span class="countdownIndexTheme">%M<span>&nbsp;:</span></span> <br> <span class="countdownDescription">min </span>  </div>' + '<div class="countdownData"> <span class="countdownIndexTheme">%S</span> <br> <span class="countdownDescription">sec </span> </div>'));
});

$('#countdown2').countdown('2017/08/29', function (event) {
	var $this = $(this).html(event.strftime('' + '<div class="countdownData"> <span class="countdownIndexCyan">%H<span>&nbsp;:</span></span> <br> <span class="countdownDescription">hour</span> </div>' + '<div class="countdownData"> <span class="countdownIndexCyan">%M<span>&nbsp;:</span></span> <br> <span class="countdownDescription">min </span>  </div>' + '<div class="countdownData"> <span class="countdownIndexCyan">%S</span> <br> <span class="countdownDescription">sec </span> </div>'));
});


/* SPARKLINE */
$("#sparkline20").sparkline([5, 6, 7, 9, 9, 5, 3, 4, 4, 4, 6, 7, 5, 6, 7, 9, 9, 5, 3, 5, 7, 4, 6, 7], {
	type: 'line',
	width: '150',
	height: '35',
	lineColor: '#9c27b0',
	fillColor: '#9c27b0'
});

$("#sparkline21").sparkline([5, 6, 7, 9, 9, 5, 3, 4, 4, 4, 6, 7, 5, 6, 7, 9, 9, 5, 3, 5, 7, 4, 6, 7], {
	type: 'line',
	width: '150',
	height: '35',
	lineColor: '#00e2f0',
	fillColor: '#00e2f0'
});

$("#sparkline22").sparkline([5, 6, 7, 9, 9, 5, 3, 4, 4, 4, 6, 7, 5, 6, 7, 9, 9, 5, 3, 5, 7, 4, 6, 7], {
	type: 'line',
	width: '150',
	height: '35',
	lineColor: '#ffeb3b',
	fillColor: '#ffeb3b'
});


/* DOWNLOAD FUNCTIONS */
$(document).ready(function () {
	var imgHight = $(".fotoWrapper").height();
	var imgPadding = (300 - imgHight) / 2
	$('.downloadFoto').css({
		"padding-top": imgPadding,
	});
});

$(window).resize(function () {
	var imgHight = $(".fotoWrapper").height();
	var imgPadding = (300 - imgHight) / 2
	$('.downloadFoto').css({
		"padding-top": imgPadding,
	});
});