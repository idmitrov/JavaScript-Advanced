var TodoApp = TodoApp || {};

(function(appScope) {
	// TODO: ADD CONTAINERS TO SAVE MULTIPLE CONTAINERS
	var	_container,
		_sections = [],
		_items = [],
		createTodoContainer,
		createTodoSection,
		createTodoItem,
		_appRoot = document.querySelector(DEFAULT_APP_ROOT); // TODO: Create SetRoot function
	
	/**
	 *	Create new Todo Container
	 *	@param
	 *	@return {TodoContainer} container
	 */
	createTodoContainer = function(containerTitle) {
		if (!containerTitle) {
			throw new DOMException('createContainer' + ERR_ARGUMENTS_NULL);
		}
		else if(_container) {
			// ONLY WARN AND DO NOT CREATE A NEW CONTAINER (EXCEPTION IS NOT REQUIRED)!
			console.warn('createContainer' + ERR_CONTAINER_IS_ALREADY_INITIALIZED);
		} else {
			// CREATE CONTAINER
			var containerKey = containerTitle.toLowerCase();
			var container = new TodoApp._models.TodoContainer(containerTitle);
			var containerView = container.addToDOM();
			
			_appRoot.appendChild(containerView);
			_container = containerView;
		}
	}

	/*
	 *	Crate new Todo Section
	 *	@param {string} sectionTitle
	 *	@return {TodoSection} section
	 */
	createTodoSection = function(sectionTitle) {
		if (!sectionTitle) {
			// ONLY WARN AND DO NOT CREATE A NEW SECTION (EXCEPTION IS NOT REQUIRED)!
			console.warn('createSection' + ERR_ARGUMENTS_NULL);
		} else {
			var sectionKey = sectionTitle.toLowerCase();

			if (_sections[sectionKey]) {
				// ONLY WARN AND DO NOT CREATE A NEW SECTION (EXCEPTION IS NOT REQUIRED)!
				console.warn('createSection ' + sectionTitle + ERR_ENTRY_ALREADY_EXIST);
			} else {
				var section = new TodoApp._models.TodoSection(sectionTitle);
				var sectionView = section.addToDOM();
				var sectionsWrapper = _container.childNodes[1];

				sectionsWrapper.appendChild(sectionView);
				_sections[sectionKey] = []; // SAVE SECTION TO AVOID DUPLICATES
			}
		}
	}

	/*
	 *	Create new Todo Item
	 *	@param {string} itemContent
	 *	@param {Boolean} isCompleted
	 *	@return {TodoItem} item
	 */
	createTodoItem = function(section, itemContent, isCompleted) {
		// ONLY WARN AND DO NOT CREATE A NEW ITEM (EXCEPTION IS NOT REQUIRED)!
		if (!itemContent || isCompleted === undefined) {
			console.warn('createItem' + ERR_ARGUMENTS_NULL);
		} else {
			var itemKey = itemContent.toLowerCase();
			var sectionKey = section.children[0].innerHTML.toLowerCase();
			var isDuplicate = false; 

			// ITERATE THE ITEMS IN CURRENT SECTION AND CHECK FOR DUPLICATE
			var activeSection = _sections[sectionKey];
			for (var key in activeSection) {
				if (activeSection[key] === itemKey) {
					isDuplicate = true;
				}
			}

			if (isDuplicate) {
				console.warn('createItem ' + itemContent + ERR_ENTRY_ALREADY_EXIST);
			} else {
				var item = new TodoApp._models.TodoItem(itemContent, isCompleted);
				var itemView = item.addToDOM();
				var sectionItemsContainer = section.childNodes[1];

				sectionItemsContainer.appendChild(itemView);
				_sections[sectionKey].push(itemKey);
			}
		}
	}

	appScope.createContainer = createTodoContainer;
	appScope.createSection = createTodoSection;
	appScope.createItem = createTodoItem;
} (TodoApp));