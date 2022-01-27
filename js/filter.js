// import { input, dropdownList } from './variables.js';
(function(){
function filterNames() {
  var listItems = window.variables.dropdownList.querySelectorAll('.dropdown__list-item');
  var filterValue = window.variables.input.value.toUpperCase();
  for (var i = 0; i < listItems.length; i = i + 1) {
    var listItem = listItems[i];
    if (listItem.innerHTML.toUpperCase().indexOf(filterValue, 0) === 0) {
      listItem.style.display = '';
    } else {
      listItem.style.display = 'none';
    }
  }
}

;
;

window.filter = {
  filterNames: filterNames,
}

// export { filterNames };
})();