import {
  button,
  input,
  dropdownList,
  selectItems,
  selectedOption,
  dropdownWrapper,
} from './variables.js';
import { addDropdownListHandlers } from './addDropdownListHandlers.js';
import { checkListPosition } from './checkListPosition.js';
import { createDropdownListElements } from './createDropdownListElements.js';
import { filterNames } from './filter.js';

document.addEventListener('scroll', function () {
  dropdownList.classList.remove('dropdown__list--visible');
});

window.addEventListener('resize', function () {
  dropdownList.classList.remove('dropdown__list--visible');
});

// Click outside of dropdownWrapper
document.addEventListener('click', function (event) {
  if (!dropdownWrapper.contains(event.target)) {
    dropdownList.classList.remove('dropdown__list--visible');
    dropdownWrapper.classList.remove('dropdown__wrapper--active');
    input.value = selectedOption.str;
  }
});

input.addEventListener('keyup', filterNames);
dropdownList.appendChild(createDropdownListElements());
addDropdownListHandlers([input, button]);

// всплытие и погружение
// Введение в события
// особенности стд поведения формы/перезагрузка, как работаю кнопки в роли сабмит, как указать адрес дляотправки формы
