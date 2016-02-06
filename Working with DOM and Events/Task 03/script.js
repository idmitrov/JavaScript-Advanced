'use strict';

document.addEventListener('DOMContentLoaded', function () {
	var HTMLGenerator = {
		createParagraph: function(id, text) {
			var parent = document.getElementById(id);
			var newlyParagraph = document.createElement('p');

			newlyParagraph.innerHTML = text;
			parent.appendChild(newlyParagraph);
		},
		createDiv: function(id, classSelector) {
			var parent = document.getElementById(id);
			var newlyDiv = document.createElement('div');
			newlyDiv.className = classSelector;

			parent.appendChild(newlyDiv);
		},
		createLink: function(id, text, url) {
			var parent = document.getElementById(id);
			var newlyAnchor = document.createElement('a');

			newlyAnchor.text = text;
			newlyAnchor.href = url;
			parent.appendChild(newlyAnchor);
		}
	};

	HTMLGenerator.createParagraph('wrapper', 'Some text');
	
	HTMLGenerator.createDiv('wrapper', 'generated-div');
	
	HTMLGenerator.createLink('wrapper', 'Generated Link', '#');
});