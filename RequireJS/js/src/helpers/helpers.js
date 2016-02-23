define(['factory'], function(Factory) {
    // http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }
    // END OF VENDOR

    function Validator() {}
    Validator.prototype.isNullOrWhiteSpace = function(value) {
        if (value && typeof(value) === 'string' && value.trim() !== '') {
            return false;
        }

        return true;
    };

    function ViewCreator() {}
    ViewCreator.prototype.createSectionView = function(sectionModel, viewWrapper) {
        var sectionNode,
            sectionHeadingNode,
            itemsWrapper,
            itemInput,
            itemButton;

        // SECTION
        sectionNode = document.createElement('DIV');
        sectionNode.id = sectionModel.getTitle();
        sectionNode.className = 'section';

        // SECTION TITLE
        sectionHeadingNode = document.createElement('H2');
        sectionHeadingNode.innerHTML = sectionModel.getTitle();

        // ITEMS WRAPPER
        itemsWrapper = document.createElement('DIV');
        itemsWrapper.className = 'items';

        // INPUT
        itemInput = document.createElement('INPUT');
        itemInput.placeholder = 'Item content...';
        itemInput.className = 'form-control';

        // BUTTON
        itemButton = document.createElement('BUTTON');
        itemButton.innerHTML = 'Create Item';
        itemButton.className = 'button';

        // ATTACH EVENT TO THE BUTTON SO IT CAN CREATE NEW ITEMS
        itemButton.addEventListener('click', function() {
            try {
                sectionModel._items.forEach(function(item) {
                    if (item.getContent() == itemInput.value) {
                        throw new Error('Item ' + itemInput.value + ' already exist.');
                    }
                });

                var newItem = require('factory').createItem(itemInput.value, false);
                sectionModel.addItem(newItem);

                newItem.addToDOM(itemsWrapper);
            } catch(ex) {
                alert(ex.message);
            } finally  {
                itemInput.value = '';
            }
        });

        // APPEND NODES
        sectionNode.appendChild(sectionHeadingNode);
        sectionNode.appendChild(itemsWrapper);
        sectionNode.appendChild(itemInput);
        sectionNode.appendChild(itemButton);
        viewWrapper.appendChild(sectionNode);
    };

    ViewCreator.prototype.createItemView = function(itemModel, itemWrapper) {
        var itemNode,
            itemLabel,
            itemCheckBox;

        // ITEM NODE
        itemNode = document.createElement('DIV');
        itemNode.className = 'item';

        // CHECKBOX
        itemCheckBox = document.createElement('INPUT');
        itemCheckBox.type = 'checkbox';
        itemCheckBox.checked = itemModel.getStatus();
        itemCheckBox.id = guid();

        itemCheckBox.addEventListener('click', function() {
            if (this.checked) {
                itemNode.className = 'item completed';
            } else {
                itemNode.className = 'item';
            }
        });

        // LABEL
        itemLabel = document.createElement('LABEL');
        itemLabel.setAttribute('for', itemCheckBox.id);
        itemLabel.innerHTML = itemModel.getContent();

        // APPEND NODES
        itemNode.appendChild(itemCheckBox);
        itemNode.appendChild(itemLabel);
        itemWrapper.appendChild(itemNode);
    };

    return {
        Validator: new Validator(),
        ViewCreator: new ViewCreator()
    };
});