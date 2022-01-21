//IE Support Node List Polyfill
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

  const selectItems = [
    {
      label: 'Bawcomville',
      id: 0,
    },
    {
      label: 'Rushford',
      id: 1,
    },
    {
      label: 'Bayview',
      id: 2,
    },
    {
      label: 'Something',
      id: 3,
    },
    {
      label: 'New',
      id: 4,
    },
    {
      label: 'I',
      id: 5,
    },
    {
      label: 'Made',
      id: 6,
    },
  ];

  window.onload = function insertOptions() {
    for (var i = 0; i < selectItems.length; i = i + 1) {
      var selectOptionLabel = selectItems[i].label;
      var selectOptionID = selectItems[i].id;
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(selectOptionLabel));
      li.setAttribute('id', selectOptionID);
      li.classList.add('dropdown__list-item');
      dropdownList.appendChild(li);
      console.log(li.id);
    }
  };
});
