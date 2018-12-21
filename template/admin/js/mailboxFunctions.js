/* INPUTS */	
	$(document).ready(function () {
		$('.checkbox').iCheck({
			checkboxClass: 'icheckbox_square-pink',
			increaseArea: '20%'
		});
	});

	$('input').on('ifChecked', function () {
		$(this).closest(".mailBoxContentAnt").addClass("activeMail");
	});
	$('input').on('ifUnchecked', function () {
		$(this).closest(".mailBoxContentAnt").removeClass("activeMail");
	});
