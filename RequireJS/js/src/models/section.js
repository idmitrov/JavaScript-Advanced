define(['helpers'], function(Helpers) {
    var id = 0;

    function Section(sectionName) {
        this.setTitle(sectionName);
        this._id = id++;
        this._items = [];
    }

    Section.prototype.getTitle = function() {
        return this._title;
    };

    Section.prototype.setTitle = function(value) {
        if (Helpers.Validator.isNullOrWhiteSpace(value)) {
            throw new DOMException('Section setName: Invalid name');
        } else {
            this._title = value;
        }
    };

    /**
     *  Add Item to Container Items collection
     *  @param {Object} item
     */
    Section.prototype.addItem = function(item) {
        this._items.push(item);
    };

    Section.prototype.addToDOM = function(parent) {
        Helpers.ViewCreator.createSectionView(this, parent);
    };

    return Section;
});