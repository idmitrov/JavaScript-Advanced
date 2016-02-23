define(['helpers'], function(Helpers) {
    function Container(containerName) {
        this.setName(containerName);
        this._sections = [];
    }

    Container.prototype.getName = function() {
        return this._name;
    };

    Container.prototype.setName = function(value) {
        if (Helpers.Validator.isNullOrWhiteSpace(value)) {
            throw new Error('Container setName: invalid name');
        } else {
            this._name = value;
        }
    };

    Container.prototype.addSection = function(section) {
        this._sections.push(section);
    };

    Container.prototype.getSections = function() {
        return this._sections;
    };

    Container.prototype.getSectionById = function(sectionId) {
        this._sections.forEach(function(currentSection) {
            if (currentSection._id == sectionId) {
                return  currentSection;
            }
        });
    };

    Container.prototype.addToDOM = function(parent) {
        // TODO: Implement method
    };

    return Container;
});