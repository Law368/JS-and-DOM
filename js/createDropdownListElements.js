// import {
//   input,
//   dropdownList,
//   selectItems,
//   selectedOption,
//   dropdownWrapper,
// } from './variables.js';
(function(){
function createDropdownListElements() {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < window.variables.selectItems.length; i = i + 1) {
    var selectOptionLabel = window.variables.selectItems[i].label;
    var selectOptionID = window.variables.selectItems[i].id;
    var li = document.createElement('li');

    li.appendChild(document.createTextNode(selectOptionLabel));
    li.setAttribute('id', selectOptionID);
    li.classList.add('dropdown__list-item');
    li.addEventListener('click', function (event) {
      event.stopPropagation();
      window.variables.input.value = this.innerText;
      window.variables.selectedOption.str = this.innerText;
      window.variables.dropdownWrapper.classList.add('dropdown__wrapper--active');
      window.variables.input.focus();
      window.variables.dropdownList.classList.remove('dropdown__list--visible');
    });
    fragment.appendChild(li);
  }
  return fragment;
}


window.createDropdownListElements = {
  createDropdownListElements: createDropdownListElements,
}

// export { createDropdownListElements };
})();