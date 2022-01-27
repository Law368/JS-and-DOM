// import { dropdownList } from './variables.js';
(function(){
  function checkListPosition() {
  var windowHeight = document.documentElement.clientHeight;
  var listHeight = window.variables.dropdownList.offsetHeight;
  var distanceToTop =
    window.pageYOffset + window.variables.dropdownList.getBoundingClientRect().top;
  var distanceToBottom = windowHeight - (listHeight + distanceToTop);
  if (distanceToBottom < 0) {
    window.variables.dropdownList.style.bottom = '52px';
    window.variables.dropdownList.style.top = 'auto';
  } else {
    window.variables.dropdownList.style.bottom = 'auto';
    window.variables.dropdownList.style.top = '52px';
  }
}

;

window.checkListPosition = {
  checkListPosition: checkListPosition,
}

// export {checkListPosition};
})();