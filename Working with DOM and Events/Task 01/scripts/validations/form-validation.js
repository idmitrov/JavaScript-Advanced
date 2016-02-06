'use strict';

document.addEventListener('DOMContentLoaded', function () {
	var webinarFormToggler = document.getElementById('js-reg-optional-toggle');
	var webinarFormAditionalFiled = document.getElementsByClassName('optional-fields')[0];
	var webinarFormRequiredInputs = document.getElementsByClassName('required-input-toggle');
	var webinarResetButton = document.getElementById('js-reset-button');

	/*
		Toggle required property of the passed elements depends of the isRequired passed argument (true/false)
		
		arguments:
			elements => class selector
			isRequired => bool
	*/
	var toggleRequirement = function(elements, isRequired) {
		for (var index in elements) {
			elements[index].required = isRequired;
		}
	}

	/*
		Toggle vissible/hidden class to the target depends of the isVisible argument (true/false)

		arguments:
			target => id selector
			isVisible => bool
	*/
	var toggleVisibility = function(target, isVisible) {
		if (isVisible) {
			target.classList.remove('hidden');
			target.classList.add('visible');
		} else {
			target.classList.remove('visible');
			target.classList.add('hidden');
		}
	}

	/*
		Listen for click and depends of that the checkbox is checked or not => toggle css class visible/hidden 
	*/
	webinarFormToggler.addEventListener('click', function() {
		if (this.checked) {
			toggleVisibility(webinarFormAditionalFiled, true);
			toggleRequirement(webinarFormRequiredInputs, true);
		} else {
			toggleVisibility(webinarFormAditionalFiled, false);
			toggleRequirement(webinarFormRequiredInputs, false);
		}
	});

	/*
		Listen for click => toggle css class visible/hidden 
	*/
	webinarResetButton.addEventListener('click', function() {
		webinarFormAditionalFiled.classList.remove('visible');
		webinarFormAditionalFiled.classList.add('hidden');

		toggleRequirement(webinarFormRequiredInputs, false);
	});
});