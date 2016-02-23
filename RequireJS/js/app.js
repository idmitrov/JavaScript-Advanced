(function() {
    require.config({
        paths: {
            'extensions': 'src/extensions/extensions',
            'helpers': 'src/helpers/helpers',
            'factory': 'src/factories/factory',
            'container': 'src/models/container',
            'section': 'src/models/section',
            'item': 'src/models/item'
        }
    });
} ());

require(['factory'], function(Factory) {
    Factory.createContainer('My Todo');

    var appWrapper,
        sectionsWrapper,
        createSectionBtn,
        sectionNameInput;

    appWrapper = document.getElementById('todo-app') || document.querySelector('body');

    // CREATE NODES
    sectionsWrapper = document.createElement('DIV');
    sectionsWrapper.className = 'sections';

    createSectionBtn = document.createElement('BUTTON');
    createSectionBtn.innerHTML = 'Create Section';
    createSectionBtn.className = 'button';

    sectionNameInput = document.createElement('INPUT');
    sectionNameInput.placeholder = 'Section Name...';
    sectionNameInput.className = 'form-control';

    // APPEND NODES
    appWrapper.appendChild(sectionsWrapper);
    appWrapper.appendChild(sectionNameInput);
    appWrapper.appendChild(createSectionBtn);

    var createTodoSection = function(sectionName) {
        try {
            Factory.createSection(sectionName).addToDOM(sectionsWrapper);
        } catch(err) {
            alert(err.message);
        } finally {
            sectionNameInput.value = '';
        }
    };

    // BUTTON CLICK EVENT
    createSectionBtn.addEventListener('click', function() {
        createTodoSection(sectionNameInput.value);
    });

    // ENTER BUTTON EVENT
    sectionNameInput.addEventListener('keypress', function(ev) {
        if (ev.code === 'Enter' || ev.keyCode === 13) {
            createTodoSection(sectionNameInput.value);
        }
    });
});