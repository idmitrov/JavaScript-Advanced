'use strict';

/*
	UCOMMENT EACH TASK TO TEST IT.
*/

// // TASK 01
// function printArgsInfo () {
// 	for (var index in arguments) {
// 		var currentArgument = arguments[index] instanceof Array ? 'array' : typeof(arguments[index]);

// 		console.log(currentArgument + ' (' + currentArgument + ')');
// 	}
// }

// printArgsInfo(2, 3, 2.5, -110.5564, false);
// printArgsInfo(null, undefined, "", 0, [], {});
// printArgsInfo("some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {name: "Peter", age: 20});
// printArgsInfo([1, 2], ["string", "array"], ["single value"]);

// // TASK 02
// printArgsInfo.call();
// printArgsInfo.call(undefined, 1, 2, 'asd', {}, []);
// printArgsInfo.apply();
// printArgsInfo.apply(undefined, [1, 2, {}, 'asd', []]);

// // TASK 03
// function testContext() {
// 	console.log(this);
// }

// testContext();
// printArgsInfo(testContext());
// var newContext = new testContext();

// // TASK 04
// var add = function(number) {
// 	var queue = number ? [number] : [];

// 	var getNextNumber = function(nextNumber) {
// 		if (arguments.length) {
// 			queue.push(nextNumber);

// 			return getNextNumber;
// 		}

// 		var totalSum = 0;
// 		queue.forEach(function(number) {
// 			totalSum += number;
// 		});

// 		return totalSum;
// 	}

// 	return getNextNumber;
// }

// var addTwo = add(2);

// console.log(addTwo(3)(2)(12)());
// console.log(addTwo(1)(5)());

// // TASK 05
// function add(x, y) {
// 	return x = y;
// }

// function addOne(x) {
// 	return x + 1;
// }

// function square(x) {
// 	return x * x;
// }

// var compose = function(f, g) {
// 	return function(x) {
// 		return f(g(x));
// 	};
// };

// var compositionResult = compose(addOne, square)(5);
// console.log(compositionResult);

// // TASK 06
// var selectorBirds = '.birds';
// var selectorMamals = '.mammals';

// traverse(selectorBirds);
// traverse(selectorMamals);

// function traverse(selector) {
// 	var parent = document.querySelector(selector);
// 	var parentChilds = getChildrens(parent);
// 	var result = '';

// 	parentChilds.forEach(function(child) {
// 		if (child.localName) {
// 			result = appendTagName(child, result);

// 			if (child.className) {
// 				result = appendClassName(child, result);
// 			}

// 			result = appendNestedChilds(child, result, 1);
// 		}
// 	});

// 	console.log(result);	
// }

// // APPEND NESTED CHILDS
// function appendNestedChilds(child, result, nestingCount) {
// 	if (child.children.length) {
// 		var nestedChilds = getChildrens(child);

// 		nestedChilds.forEach(function(nestedChild) {
// 			if (nestedChild.localName) {

// 				result = appendTagName(nestedChild, result, nestingCount);

// 				if (child.id) {
// 					result = appendId(child, result);
// 				}

// 				if (nestedChild.className) {
// 					result = appendClassName(nestedChild, result);
// 				} 
// 			}

// 			if (nestedChild.children.length) {
// 				result = appendTagName(nestedChild.children[0], result, 2);

// 				result = appendNestedChilds(nestedChild.children[0], result, 3);
// 			}
// 		});
// 	}

// 	return result;
// }

// function appendId(element, result) {
// 	result += 'id="' + element.id + '" '

// 	return result;
// }

// // GET ELEMENT CLASS NAME AND APPEND IT TO STRING RESULT
// function appendClassName(element, result) {
// 	result += 'class="' + element.className + '"' + '\r\n';

// 	return result
// }

// // GET ELEMENT TAG NAME AND APPEND IT TO STRING RESULT
// function appendTagName(element, result, nestingCount) {	
// 	while (nestingCount) {
// 		nestingCount -= 1;
		
// 		result += '\t';
// 	}

// 	result += element.localName + ':';
	
// 	if (!element.className) {
// 		result += '\r\n';
// 	}

// 	return result;
// }

// // FOREACH AND RETURN PARENT CHILDRENS
// function getChildrens(parent) {
// 	var childs = [];

// 	[].forEach.call(parent.children, function(child) {
// 		childs.push(child);
// 	});

// 	return childs;
// }

// // TASK 07
// var domModule = {
// 	appendChild: function(item, appendTo) {
// 		domParent = document.querySelector(appendTo);

// 		domParent.appendChild(item);
// 	},
// 	removeChild: function(removeFrom, itemToRemove) {
// 		domParent = document.querySelector(removeFrom);
// 		domItemToRemove = document.querySelector(itemToRemove);

// 		if (!domParent) {
// 			throw new DOMException(removeFrom + ' is not valid selector!');
// 		}

// 		if (!domItemToRemove) {
// 			throw new DOMException(itemToRemove + ' is not valid selector!');
// 		}
		
// 		domParent.removeChild(domItemToRemove)
// 	},
// 	addHandler: function(element, eventType, eventHandler) {
// 		var domElements = document.querySelectorAll(element);

// 		if (!domElements) {
// 			throw new DOMException(element + ' is not valid selector!');
// 		}

// 		for (var i = domElements.length - 1; i >= 0; i--) {
// 			domElements[i].addEventListener(eventType, eventHandler);
// 		};
// 	},
// 	retriveElements: function(selector) {
// 		var domElements = document.querySelectorAll(selector);

// 		if(!domElements.length) {
// 			throw new DOMException(selector + ' is not valid selector!');
// 		}

// 		return domElements;
// 	}
// };

// // Appends a list item to ul.birds-list
// var liElement = document.createElement('li');
// liElement.style.color = '#F00';
// liElement.innerText = 'list item appended via domModule! (TASK 07)';

// domModule.appendChild(liElement, '.birds-list');

// // Removes the first li child from the bird list
// domModule.removeChild("ul.birds-list","li:first-child"); 

// // Adds a click event to all bird list items
// domModule.addHandler("li.bird", 'click', function() { alert("I'm a bird!") });

// // Retrives all elements of class "bird"
// domModule.retriveElements('.bird');

// // TASK 08 TODO...
// var specialConsole = {
// 	_writeMessage: function(arguments) {
// 		if (arguments.length === 1) {
// 			return arguments[0];
// 		} else if (arguments.length > 1) {
// 			var query = arguments[0];
// 			var totalPlaceholderValuesLength = arguments.length - 1;
// 			var totalPlaceholdersLength = query.match(/{\d}/g).length;

// 			if (totalPlaceholdersLength !== totalPlaceholderValuesLength) {
// 				var exceptioMessage = 'placeholder is not in expected format';

// 				throw new DOMException(exceptioMessage);
// 			}

// 			for (var i = 1; i < arguments.length; i += 1) {
// 				var placeholder = '{' + (i - 1) + '}';
// 				var placeholderIndex = query.indexOf(placeholder);

// 				if (placeholderIndex === -1) {
// 					var exceptioMessage = 'placeholder is not in expected format';

// 					throw new DOMException(exceptioMessage);
// 				}

// 				var placeholderValue = arguments[i];

// 				if (placeholderValue === 'object') {
// 					placeholderValue = placeholderValue.toString();
// 				}

// 				query = query.replace(placeholder, placeholderValue);
// 			}
// 		}

// 		return query
// 	},
// 	writeLine: function() {
// 		var message = this._writeMessage(arguments);

// 		console.log(message);
// 	},
// 	writeError: function() {
// 		var error = this._writeMessage(arguments);

// 		console.error(error);
// 	},
// 	writeInfo: function() {
// 		var infoMessage = this._writeMessage(arguments);

// 		console.info(infoMessage);
// 	},
// 	writeWarning: function() {
// 		var warningMessage = this._writeMessage(arguments);

// 		console.warn(warningMessage);
// 	}
// };

// specialConsole.writeLine("Message: hello");
// specialConsole.writeLine("Message: {0}", "hello");

// specialConsole.writeError("Error: {0}", "A fatal error has occurred.");
// specialConsole.writeWarning("Warning: {0}", "You are not allowed to do that!");
// specialConsole.writeInfo("Info: {0}", "Hi there! Here is some info for you.");
// specialConsole.writeError("Error object: {0}", { msg: "An error happened", toString: function() { return this.msg }});

// // specialConsole.writeLine("Message: {1}", "hello"); should not work
// specialConsole.writeLine("Message: {1}", "hello"); // expected first placeholder index to be {0} not {1}
