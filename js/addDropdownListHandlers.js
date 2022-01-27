import { dropdownList, button, input } from './variables.js';
import { checkListPosition } from './checkListPosition.js';

// universal addeventListener that should work with IE 9
var addDropdownListHandlers = function (arr) {
  arr.forEach(function (element) {
    element.addEventListener('click', function () {
      if (this === button) {
        dropdownList.classList.toggle('dropdown__list--visible');
        input.focus();
      } else if (this === input) {
        dropdownList.classList.add('dropdown__list--visible');
      }
      checkListPosition();
      input.value = '';
    });
  });
};

export { addDropdownListHandlers };
