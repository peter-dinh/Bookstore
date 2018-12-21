document.querySelector('#basic').onclick = function () {
	swal("Here's a message!");
};
document.querySelector('#titleWithText').onclick = function () {
	swal("Here's a message!", "It's pretty, isn't it?")
};
document.querySelector('#successMessage').onclick = function () {
	swal("Good job!", "You clicked the button!", "success")
};
document.querySelector('#warningAttached').onclick = function () {
	swal({
		title: "Are you sure?",
		text: "You will not be able to recover this imaginary file!",
		type: "warning",
		showCancelButton: true,
		confirmButtonColor: "#DD6B55",
		confirmButtonText: "Yes, delete it!",
		closeOnConfirm: false
	}, function () {
		swal("Deleted!", "Your imaginary file has been deleted.", "success");
	});
};
document.querySelector('#warningParameters').onclick = function () {
	swal({
		title: "Are you sure?",
		text: "You will not be able to recover this imaginary file!",
		type: "warning",
		showCancelButton: true,
		confirmButtonColor: "#DD6B55",
		confirmButtonText: "Yes, delete it!",
		cancelButtonText: "No, cancel plx!",
		closeOnConfirm: false,
		closeOnCancel: false
	}, function (isConfirm) {
		if (isConfirm) {
			swal("Deleted!", "Your imaginary file has been deleted.", "success");
		} else {
			swal("Cancelled", "Your imaginary file is safe :)", "error");
		}
	});
};
document.querySelector('#messageIcon').onclick = function () {
	swal({
		title: "Sweet!",
		text: "Here's a custom image.",
		imageUrl: "img/thumbs-up.jpg"
	});
};
document.querySelector('#autoClose').onclick = function () {
	swal({
		title: "Auto close alert!",
		text: "I will close in 2 seconds.",
		timer: 2000,
		showConfirmButton: false
	});
};
document.querySelector('#inputOption').onclick = function () {
	swal({
		title: "An input!",
		text: "Write something interesting:",
		type: "input",
		showCancelButton: true,
		closeOnConfirm: false,
		animation: "slide-from-top",
		inputPlaceholder: "Write something"
	}, function (inputValue) {
		if (inputValue === false) return false;
		if (inputValue === "") {
			swal.showInputError("You need to write something!");
			return false
		}
		swal("Nice!", "You wrote: " + inputValue, "success");
	});
};

