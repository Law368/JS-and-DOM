import {
  button,
  input,
  dropdownList,
  selectItems,
  selectedOption,
  dropdownWrapper,
} from './variables.js';
import {
  scrollListener,
  resizeListener,
  closeList,
  openList,
} from './eventListeners.js';
import { checkListPosition } from './checkListPosition.js';
import { insertOptions } from './insertOptions.js';
import { filterNames } from './filter.js';
dropdownList.appendChild(insertOptions());
var listItems = dropdownList.querySelectorAll('.dropdown__list-item');
openList(input);
openList(button);
input.addEventListener('keyup', filterNames);

// всплытие и погружение
// Введение в события
// особенности стд поведения формы/перезагрузка, как работаю кнопки в роли сабмит, как указать адрес дляотправки формы

export { listItems };
