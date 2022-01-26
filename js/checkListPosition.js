import { dropdownList } from './variables.js';

function checkListPosition() {
  var windowHeight = document.documentElement.clientHeight;
  var listHeight = dropdownList.offsetHeight;
  var distanceToTop =
    window.pageYOffset + dropdownList.getBoundingClientRect().top;
  var distanceToBottom = windowHeight - (listHeight + distanceToTop);
  if (distanceToBottom < 0) {
    dropdownList.style.bottom = '52px';
    dropdownList.style.top = 'auto';
  } else {
    dropdownList.style.bottom = 'auto';
    dropdownList.style.top = '52px';
  }
}

export { checkListPosition };
