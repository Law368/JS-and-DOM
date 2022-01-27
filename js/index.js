// import {
//   button,
//   input,
//   dropdownList,
//   selectItems,
//   selectedOption,
//   dropdownWrapper,
// } from './variables.js';
// import { addDropdownListHandlers } from './addDropdownListHandlers.js';
// import { checkListPosition } from './checkListPosition.js';
// import { createDropdownListElements } from './createDropdownListElements.js';
// import { filterNames } from './filter.js';


(function(){
document.addEventListener('scroll', function () {
  window.variables.dropdownList.classList.remove('dropdown__list--visible');
});

window.addEventListener('resize', function () {
  window.variables.dropdownList.classList.remove('dropdown__list--visible');
});

// Click outside of dropdownWrapper
document.addEventListener('click', function (event) {
  if (!window.variables.dropdownWrapper.contains(event.target)) {
    window.variables.dropdownList.classList.remove('dropdown__list--visible');
    window.variables.dropdownWrapper.classList.remove('dropdown__wrapper--active');
    window.variables.input.value = window.variables.selectedOption.str;
  }
});

window.variables.input.addEventListener('keyup', window.filter.filterNames);
window.variables.dropdownList.appendChild(window.createDropdownListElements.createDropdownListElements());
window.addDropdownListHandlers.addDropdownListHandlers([window.variables.input, window.variables.button]);



})();
