/* PRELOADER */
$(window).on('load', function () {

	$('body').css({
		'overflow': 'hidden',
	});
	//Preloader
	setTimeout(function () {

		$('.preloader').fadeOut(400);

	}, 1000);

});

/*PRELOADER FIX */
$(document).ready(function () {
	setTimeout(function () {

		$('body').addClass('preloaderFix');
	}, 1000);
});


/* MENU SIZE  */
$(document).ready(function () {
	var h = $(window).height();
	if (h > 700) {
		$(".timeWrapper").show();
		var a = h - 245;
		$('#menuContent').css({
			height: a,
		});
	} else {
		$(".timeWrapper").hide();
		var a = h - 155;
		$('#menuContent').css({
			height: a,
		});
	}
});

$(window).resize(function () {
	var h = $(window).height();
	if (h > 700) {
		$(".timeWrapper").show();
		var a = h - 245;
		$('#menuContent').css({
			height: a,
		});
	} else {
		$(".timeWrapper").hide();
		var a = h - 155;
		$('#menuContent').css({
			height: a,
		});
	}
});


/* SIDE BAR TIME FUNCTION */
var datetime = null,
	date = null;
var update = function () {
	date = moment(new Date())
	datetime.html(date.format('LL '));
};
datetime = $('.current-time')
update();
setInterval(update, 60000);
var update = function () {
	date = moment(new Date())
	datetime1.html(date.format('h:mm a'));
};
datetime1 = $('.current-time2')
update();
setInterval(update, 60000);

$(document).ready(function () {

	/* CUSTOM CONTENT SCROLLER */
	(function ($) {

		$(window).load(function () {
			$("#latestActivityContent").mCustomScrollbar({
				theme: "dark-thin",
				autoHideScrollbar: true,
				autoHideScrollbar: true
			});

			$("#mailboxContent").mCustomScrollbar({
				theme: "dark-thin",
				scrollInertia: 300
			});

			$("#mainWrapper").mCustomScrollbar({
				theme: "dark",
				autoHideScrollbar: true,
				autoHideScrollbar: true,
				scrollInertia: 300
			});

			$("#menuContent").mCustomScrollbar({
				theme: "dark-thin",
				autoHideScrollbar: true,
				scrollInertia: 300
			});

		});
	})(jQuery);




	/* MAIN MENU BUTTON FUNCTION */
	$("#menuIcon").click(function (e) {

		var w = $(window).width();
		if (w < 1024) {
			$("body").toggleClass("mobileSidebar");
			$(this).toggleClass("active");
			$(this).removeClass("activeClick");
		} else {
			$("body").toggleClass("noSidebar");
			$(this).toggleClass("activeClick");
		}
		e.preventDefault();
	});

	$(window).bind("resize", function () {
		if ($(this).width() < 1024) {
			$('body').addClass('bodySmall');
			$("#menuIcon").addClass("active");
		} else {
			$('body').removeClass('bodySmall mobileSidebar');
			$("#menuIcon").removeClass("active");
		}
	});

	if ($(this).width() < 1024) {
		$('body').addClass('bodySmall')
	} else {
		$('body').removeClass('bodySmall')
	}


	var userAgent = navigator.userAgent,
		uaCheck = {
			ios: userAgent.match(/(iPhone|iPod|iPad)/),
			ipad: userAgent.match(/(iPad)/),
			iphone: userAgent.match(/(iPhone)/),
			blackberry: userAgent.match(/BlackBerry/),
			android: userAgent.match(/Android/)
		};

	if (uaCheck.ios || uaCheck.blackberry || uaCheck.android) {
		$("#menuIcon").addClass("active");
	}



	/* METIS MENU */
	$('#menu').metisMenu();

	var link = window.location.pathname.split('/').pop(-1);
	$('#menu  a[href="' + link + '"]').addClass('actual');



	var actual = $("a.actual").closest("ul");
	if (actual.hasClass("collapse")) {
		actual.addClass("in").parent().addClass("active");;
	}



	/* RESS FOOTER TO BOTTOM FUNCTION */
	function footerToBottom() {
		var browserHeight = $(window).height(),
			footerOuterHeight = $('.fotterWrapper').outerHeight(true),
			mainHeightMarginPaddingBorder = $('.footerfix').outerHeight(true) - $('.footerfix').height();
		$('.footerfix').css({
			'min-height': browserHeight - footerOuterHeight - mainHeightMarginPaddingBorder - 60,
		});
	};
	footerToBottom();
	$(window).resize(function () {
		footerToBottom();
	});


	/* LATEST ACTIVITY SHOW / HIDE FUNCTION HEADER */
	var container = $(".latestActivity");
	$(".latestActivityIcon").click(function () {
		$(".latestActivity").addClass("show");
	});
	$(".closelatestActivity").click(function () {
		$(".latestActivity").removeClass("show");
	});
	$(document).mouseup(function (e) {
		if (container.has(e.target).length === 0) {
			$(".latestActivity").removeClass("show");
		}
	});



	/* MAIL BOX SHOW / HIDE FUNCTION HEADER */
	var container = $(".mailboxShow");
	$(".mailboxIcon").click(function () {
		$(".mailboxShow").addClass("show");
	});
	$(".closeMailbox").click(function () {
		$(".mailboxShow").removeClass("show");
	});
	$(document).mouseup(function (e) {
		if (container.has(e.target).length === 0) {
			$(".mailboxShow").removeClass("show");
		}
	});

	/*REMINDER SHOW / HIDE FUNCTION HEADER */
	var container = $(".reminderShow");
	$(".reminderIcon").click(function () {
		$(".reminderShow").addClass("show");
	});
	$(".closeReminde").click(function () {
		$(".reminderShow").removeClass("show");
	});
	$(document).mouseup(function (e) {
		if (container.has(e.target).length === 0) {
			$(".reminderShow").removeClass("show");
		}
	});




	/*  BUTTONS EFFECT */
	Waves.attach('.float-dark', ['waves-button', 'waves-dark']);
	Waves.attach('.float-button', ['waves-button', 'waves-light']);
	Waves.attach('.float-button-light', ['waves-button', 'waves-float', 'waves-light']);
	Waves.attach('.float-button-dark', ['waves-button', 'waves-float', 'waves-dark']);
	Waves.init();


	/* ANT PANEL FUNCTIONS */
	$(".fullScreen").click(function () {
		$(this).closest('div.panel').toggleClass("panelFull");
	});

	$('.remove').click(function (e) {
		$(this).closest('div.panel').remove();
		e.preventDefault();
	});
	$(".colWhite").click(function () {
		$(this).closest('div.panel-heading').removeClass('colorWhite colorTheme colorPink  colorCyan colorPurpule colorYellow').addClass('colorWhite');
	});
	$(".colTheme").click(function () {
		$(this).closest('div.panel-heading').removeClass('colorWhite colorTheme colorPink  colorCyan colorPurpule colorYellow').addClass('colorTheme');
	});
	$(".colPink").click(function () {
		$(this).closest('div.panel-heading').removeClass('colorWhite colorTheme colorPink  colorCyan colorPurpule colorYellow').addClass('colorPink');
	});
	$(".colCyan").click(function () {
		$(this).closest('div.panel-heading').removeClass('colorWhite colorTheme colorPink  colorCyan colorPurpule colorYellow').addClass('colorCyan');
	});
	$(".colPurpule").click(function () {
		$(this).closest('div.panel-heading').removeClass('colorWhite colorTheme colorPink  colorCyan colorPurpule colorYellow').addClass('colorPurpule');
	});
	$(".colYellow").click(function () {
		$(this).closest('div.panel-heading').removeClass('colorWhite colorTheme colorPink  colorCyan colorPurpule colorYellow').addClass('colorYellow');
	});

	/* SPINNING BUTTONS fotter */
	$('.fab').hover(function () {
		$(this).toggleClass('active');
	});

	$('[data-toggle="tooltip"]').tooltip();

});