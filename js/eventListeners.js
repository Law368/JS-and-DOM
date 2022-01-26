import {
  dropdownList,
  button,
  input,
  dropdownWrapper,
  selectedOption,
} from './variables.js';
import { checkListPosition } from './checkListPosition.js';

// universal addeventListener that should work with IE 9
var openList = function (element) {
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
};

var scrollListener = document.addEventListener('scroll', function () {
  dropdownList.classList.remove('dropdown__list--visible');
});

var resizeListener = window.addEventListener('resize', function () {
  dropdownList.classList.remove('dropdown__list--visible');
});

// Click outside of dropdownWrapper
var closeList = document.addEventListener('click', function (event) {
  if (!dropdownWrapper.contains(event.target)) {
    dropdownList.classList.remove('dropdown__list--visible');
    dropdownWrapper.classList.remove('dropdown__wrapper--active');
    input.value = selectedOption.str;
  }
});

export { scrollListener, resizeListener, closeList, openList };
