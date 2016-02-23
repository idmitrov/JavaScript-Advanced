define(['container', 'section', 'item'], function(Container, Section, Item) {
    var isInitialized;

    function Factory() {
        this.name = 'Todo Factory';
        this.version = '0.0.1 BETA';
        this._containers = [];
    }

    /**
     *  Create new Container instance
     *
     *  @param {string} containerName
     */
    Factory.prototype.createContainer = function(containerName) {
        if (!isInitialized) {
            isInitialized = true;
            var newlyContainer = new Container(containerName);

            this._containers.push(newlyContainer);
        } else {
            console.warn('Creation of more than 1 Container in next version');
        }
    };

    /**
     *  Create new Section instance
     *
     *  @param {string} sectionName
     *  @return {Object} newlySection
     */
    Factory.prototype.createSection = function(sectionName) {
        this._containers[0]._sections.forEach(function(section) {
            if (section._title === sectionName) {
                throw new Error('Section with name: ' + sectionName + ' already exist!' );
            }
        });

        var newlySection = new Section(sectionName);
        this._containers[0].addSection(newlySection);

        return newlySection;
    };

    /**
     *  Create new Section instance
     *
     *  @param {string} content
     *  @param {Boolean} status
     */
    Factory.prototype.createItem = function(content, status) {
        var newlyItem = new Item(content, status);

        return newlyItem;
    };

    return new Factory();
});