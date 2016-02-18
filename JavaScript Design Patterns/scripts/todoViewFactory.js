var TodoApp = TodoApp || {};

(function(appScope) {
	var createContainerView,
		createTodoSectionView,
		createTodoItemView,
		generateGUID,
		createInput,
		handleEvent;

	/*
	 *	Create Input
	 *	@param {string} inputyType
	 *	@param {string} inputClass
	 *	@param {string} inputText
	 *	@return {HTML} input	
	 */
	createInput = function(inputType, inputClass, inputText) {
		var input;

		switch (inputType) {
			case 'text':
				input = document.createElement('input');
				input.type = inputType;
				input.className = inputClass;
				input.placeholder = inputText;
				break;
			case 'button':
				input = document.createElement(inputType);
				input.innerHTML = inputText;
				input.className = inputClass;
				break;
			default: console.warn(ERR_UNKNOWN_INPUT_TYPE);
		}

		return input;
	}

	/*
	 * 	Handle event get Text Inputp value and create new Item with this value
	 *	@param {Event} e
	 * 	@return
	 */ 
	handleEvent = function(e) {
		var currentSection = e.path[1];
		var textInputTarget = currentSection.childNodes[2];

		return [currentSection, textInputTarget];

		// TodoApp.createItem(currentSection, textInputTarget.value, false);
		// textInputTarget.value = STRING_EMPTY;
	}
	
	/*
	 *	Generate GUID
	 *	@return {string} guid
	 */
	generateGUID = function() {
        function generate() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }

        var guid =  generate() + generate() + '-' + generate() + '-' + generate() 
        	+ '-' + generate() + '-' + generate() + generate() + generate();
        
        return guid;
	}	
	
	/*
	 *	Create Container View
	 *	@param {TodoContainer} containerModel
	 *	@return {HTML} containerView
	 */
	createContainerView = function(containerModel) {
		// Create Wrapper which will contain the Container Title
		var sectionsWrapper,
			containerView,
			containerTitle,
			addSectionButton,
			addSectionTextInput;

		containerView = document.createElement('div');
		containerView.className = 'container';

		// Create Container Title
		containerTitle = document.createElement('h2');
		containerTitle.innerHTML = containerModel.title;
		containerTitle.className = 'container-title';

		// Create Sections Wrapper
		sectionsWrapper = document.createElement('div');
		sectionsWrapper.className = 'sections';

		// Create New Section Text Input
		addSectionTextInput = createInput('text', 'control control-text', 'Title...');
		addSectionTextInput.addEventListener('keypress', function(ev) {
			if (ev.code === 'Enter' || ev.keyCode === ENTER_KEY_CODE) {
				var eventTargets = handleEvent(ev);
				var sectionTitleInput = eventTargets[1];

				TodoApp.createSection(sectionTitleInput.value);
				sectionTitleInput.value = STRING_EMPTY;
			}
		});

		// Create New Section Button 
		addSectionButton = createInput('button', 'control control-button', NEW_SECTION_BUTTON_TEXT);
		
		// Attach event to New Section
		addSectionButton.addEventListener('click', function(ev) {
			var eventTargets = handleEvent(ev);
			var sectionTitleInput = eventTargets[1];

			TodoApp.createSection(sectionTitleInput.value);
			sectionTitleInput.value = STRING_EMPTY;
		});

		// Wrap Container Title into the wrapper (View)
		containerView.appendChild(containerTitle);
		containerView.appendChild(sectionsWrapper);
		containerView.appendChild(addSectionTextInput);
		containerView.appendChild(addSectionButton);

		return containerView;
	}
	
	/*
	 *	Create Section View
	 *	@param {TodoSection} sectionModel
	 *	@return {HTML} sectionView
	 */
	createSectionView = function(sectionModel) {
		var sectionView,
			sectionTitle,
			sectionItems,
			addItemButton,
			addItemTextInput; 

		// Create Wrapper which will contain the Section Title
		sectionView = document.createElement('div');
		sectionView.className = 'section';

		// Create Section Title
		sectionTitle = document.createElement('h3');
		sectionTitle.innerHTML = sectionModel.title;
		sectionTitle.className = 'section-title';

		// Create Items wrapper
		sectionItems = document.createElement('div');
		sectionItems.className = 'section-items';

		// Create add new Item text input
		addItemTextInput = createInput('text', 'control control-text', 'Title...');

		// Add event Keypress on the Text Input (listen for ENTER)
		addItemTextInput.addEventListener('keypress', function(ev) {
			if (ev.code === 'Enter' || ev.keyCode === ENTER_KEY_CODE) {
				var eventTargets = handleEvent(ev);

				TodoApp.createItem(eventTargets[0], eventTargets[1].value, false);
				eventTargets[1].value = STRING_EMPTY;
			}
		});

		// Create add new Item button '+'
		addItemButton = createInput('button', 'control control-button', NEW_ITEM_BUTTON_TEXT)
		
		// Add event Click on the new Item button
		addItemButton.addEventListener('click', function(ev) {
			var eventTargets = handleEvent(ev);
			
			TodoApp.createItem(eventTargets[0], eventTargets[1].value, false);
			eventTargets[1].value = STRING_EMPTY;
		});

		// Wrap Section Title into the wrapper (View)
		sectionView.appendChild(sectionTitle);
		sectionView.appendChild(sectionItems);
		sectionView.appendChild(addItemTextInput);
		sectionView.appendChild(addItemButton);

		return sectionView;
	}
	
	/*
	 *	Create Item View
	 *	@param {TodoItem} itemModel
	 *	@return {HTML} itmeView
	 */
	createItemView = function(itemModel) {
		var itemView,
			checkBox,
			label;

		// Create Wrapper which will contain Checkbox and Label
		itemView = document.createElement('div');
		itemView.className = 'item';

		// Add event Click on itemView
		itemView.addEventListener('click', function() {
			// Toggle checkbox complete
			if (checkBox.checked) {
				checkBox.checked = false;
				itemView.className = 'item';
			} else {
				checkBox.checked = true;
				itemView.className = 'item item-completed';
			}
		});

		// Create Checkbox input
		checkBox = document.createElement('input');
		checkBox.type = 'checkbox';
		checkBox.checked = itemModel.isCompleted;
		checkBox.id = generateGUID();

		// Create Label and set it to the check box input
		label = document.createElement('label');
		label.innerHTML = itemModel.content;
		label.htmlFor = checkBox.id;

		// Wrap Checkbox and Label into the wrapper (View)
		itemView.appendChild(checkBox);
		itemView.appendChild(label);

		return itemView;
	};

	// PUBLIC FUNCTIONS
	return appScope._ViewFactory = {
		createContainerView: createContainerView,
		createSectionView: createSectionView,
		createItemView: createItemView
	}
} (TodoApp))