//IE Support Node List Polyfill
console.log(555);
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
  const dropdown = dropDownWrapper.querySelector('.dropdown__bar');
  const input = dropDownWrapper.querySelector('.dropdown__input');
  const button = dropDownWrapper.querySelector('.dropdown__button');
  const dropdownList = dropDownWrapper.querySelector('.dropdown__list');
  const listItems = dropdownList.querySelectorAll('.dropdown__list-item');

  // Click on the button Open/Close the list
  button.addEventListener('click', function () {
    dropdownList.classList.toggle('dropdown__list--visible');
    input.focus();
  });

  // Click on the input Open/Close the list
  input.addEventListener('click', function () {
    dropdownList.classList.add('dropdown__list--visible');
  });

  // Choosing the List item, remember selected option, close dropwdown
  listItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (event) {
      event.stopPropagation();
      input.value = this.innerText; //maybe would need to change the value to that of data attribute like input.value = this.dataset.value
      dropdown.classList.add('dropdown__bar--active');
      input.focus();
      dropdownList.classList.remove('dropdown__list--visible');
      // dropdown.classList.remove('dropdown__bar--active');
    });
  });

  // Click outside of DropDown
  document.addEventListener('click', function (event) {
    if (!dropdown.contains(event.target)) {
      dropdownList.classList.remove('dropdown__list--visible');
      dropdown.classList.remove('dropdown__bar--active');
      console.log(event.currentTarget);
    }
  });
});
