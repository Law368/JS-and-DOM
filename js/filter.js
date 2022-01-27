import { input, dropdownList } from './variables.js';
// import { listItems } from './index.js';

function filterNames() {
  var listItems = dropdownList.querySelectorAll('.dropdown__list-item');
  var filterValue = input.value.toUpperCase();
  for (var i = 0; i < listItems.length; i = i + 1) {
    var listItem = listItems[i];
    if (listItem.innerHTML.toUpperCase().indexOf(filterValue, 0) === 0) {
      listItem.style.display = '';
    } else {
      listItem.style.display = 'none';
    }
  }
}

export { filterNames };
