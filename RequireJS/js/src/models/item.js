define(['helpers'], function(Helpers) {
    function Item(content, status) {
        this.setContent(content);
        this.setStatus(status);
    }

    Item.prototype.getContent = function() {
        return this._content;
    };

    Item.prototype.setContent = function(value) {
        if (Helpers.Validator.isNullOrWhiteSpace(value)) {
            throw new Error('Item setContent: Invalid content');
        } else {
            this._content = value;
        }
    };

    Item.prototype.getStatus = function() {
        return this._status;
    };

    Item.prototype.setStatus = function(value) {
        if (value !== undefined && typeof(value) === 'boolean') {
            this._status = value;
        } else {
            throw new Error('Item setStatus: Expected Boolean value');
        }
    };

    Item.prototype.addToDOM = function(parent) {
        Helpers.ViewCreator.createItemView(this, parent);
    };

    return Item;
});