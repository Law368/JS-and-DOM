// import { dropdownList, button, input } from './variables.js';
// import { checkListPosition } from './checkListPosition.js';
(function(){
// universal addeventListener that should work with IE 9
var addDropdownListHandlers = function (arr) {
  arr.forEach(function (element) {
    element.addEventListener('click', function () {
      if (this === window.variables.button) {
        window.variables.dropdownList.classList.toggle('dropdown__list--visible');
        window.variables.input.focus();
      } else if (this === window.variables.input) {
        window.variables.dropdownList.classList.add('dropdown__list--visible');
      }
      window.checkListPosition.checkListPosition();
      window.variables.input.value = '';
    });
  });
};


window.checkListPosition.checkListPosition;

window.addDropdownListHandlers = {
  addDropdownListHandlers: addDropdownListHandlers,
}

// export { addDropdownListHandlers };
})();