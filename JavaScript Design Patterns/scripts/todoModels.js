var TodoApp = TodoApp || {};

(function(appScope) {
	var DOMElement,
		TodoContainer,
		TodoSection,
		TodoItem;

	// DOM ELEMENT (BASE)
	DOMElement = function() {
		this.addToDOM = function(parentNode) {
			var modelType,
				itemView,
				sectionView;

			modelType = this.constructor.name;

			switch(modelType) {
				case 'TodoContainer':
					return containerView = TodoApp._ViewFactory.createContainerView(this);
				case 'TodoItem':
					return itemView = TodoApp._ViewFactory.createItemView(this);
				case 'TodoSection':
					return sectionView = TodoApp._ViewFactory.createSectionView(this);
				
				// CANNOT USE INVALID MODEL THATS WHY EXCEPTIONS IS REQUIRED
				default: throw new DOMException(ERR_UNKNOW_MODEL);
			}
		}
	}

	// TODO CONTAINER INHERIT addToDOM() from DOM ELEMENT
	TodoContainer = (function() {
		function TodoContainer(containerTitle) {
			DOMElement.call(this);
			this.title = containerTitle;
		}

		return TodoContainer;
	} ());

	// TODO SECTION INHERIT addToDOM() from DOM ELEMENT
	TodoSection = (function() {
		function TodoSection(sectionTitle) {
			DOMElement.call(this);
			this.title = sectionTitle;
		}

		return TodoSection;
	} ());

	// TODO ITEM INHERIT addToDOM() from DOM ELEMENT
	TodoItem = (function() {
		function TodoItem(itemContent, isCompleted) {
			DOMElement.call(this);
			this.content = itemContent;
			this.isCompleted = isCompleted;
		}

		return TodoItem;
	} ());

	// PUBLIC
	return appScope._models = {
		TodoContainer: TodoContainer,
		TodoSection: TodoSection,
		TodoItem: TodoItem
	}
} (TodoApp));