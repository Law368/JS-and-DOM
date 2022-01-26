import {
  input,
  dropdownList,
  selectItems,
  selectedOption,
  dropdownWrapper,
} from './variables.js';

function insertOptions() {
  var fragment = new DocumentFragment();
  for (var i = 0; i < selectItems.length; i = i + 1) {
    var selectOptionLabel = selectItems[i].label;
    var selectOptionID = selectItems[i].id;
    var li = document.createElement('li');

    li.appendChild(document.createTextNode(selectOptionLabel));
    li.setAttribute('id', selectOptionID);
    li.classList.add('dropdown__list-item');
    li.addEventListener('click', function (event) {
      event.stopPropagation();
      input.value = this.innerText;
      selectedOption.str = this.innerText;
      dropdownWrapper.classList.add('dropdown__wrapper--active');
      input.focus();
      dropdownList.classList.remove('dropdown__list--visible');
    });
    fragment.appendChild(li);
  }
  return fragment;
}

export { insertOptions };
