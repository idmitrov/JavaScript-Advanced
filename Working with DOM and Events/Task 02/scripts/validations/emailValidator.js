'use strict';

document.addEventListener('DOMContentLoaded', function () {
	var EMAIL_PATTERN = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	var validateButton = document.getElementById('js-validate-email-button');
	var emailInput = document.getElementById('js-validation-input');
	var emailOutput = document.getElementById('js-validation-output');

	validateButton.addEventListener('click', function() {
		emailOutput.innerHTML = emailInput.value;
		
		var isValidEmail = emailInput.value.match(EMAIL_PATTERN);

		if (isValidEmail) {
			emailOutput.classList.remove('incorrect');
			emailOutput.classList.add('correct');
		} else {
			emailOutput.classList.remove('correct');
			emailOutput.classList.add('incorrect');
		}
	});
});