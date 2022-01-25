var dropdown = document.querySelector('.dropdown__bar');
var input = document.querySelector('.dropdown__input');
var button = document.querySelector('.dropdown__button');
var dropdownList = document.querySelector('.dropdown__list');
var selectedOption = '';

function checkListPosition() {
  var windowHeight = window.innerHeight;
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

document.addEventListener('scroll', function () {
  dropdownList.classList.remove('dropdown__list--visible');
});

window.addEventListener('resize', function () {
  dropdownList.classList.remove('dropdown__list--visible');
});

var selectItems = [
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
function insertOptions() {
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
      selectedOption = this.innerText;
      dropdown.classList.add('dropdown__bar--active');
      input.focus();
      dropdownList.classList.remove('dropdown__list--visible');
    });
    dropdownList.appendChild(li);
  }
}

insertOptions();
var listItems = dropdownList.querySelectorAll('.dropdown__list-item');

// Click on the button Open/Close the list
button.addEventListener('click', function () {
  dropdownList.classList.toggle('dropdown__list--visible');
  checkListPosition();
  input.focus();
  input.value = '';
  for (var i = 0; i < listItems.length; i++) {
    var listItem = listItems[i];
    listItem.style.display = '';
  }
});

// Click on the input Open/Close the list
input.addEventListener('click', function () {
  dropdownList.classList.add('dropdown__list--visible');
  checkListPosition();
  input.value = '';
  for (var i = 0; i < listItems.length; i++) {
    var listItem = listItems[i];
    listItem.style.display = '';
  }
});

// Click outside of DropDown
document.addEventListener('click', function (event) {
  if (!dropdown.contains(event.target)) {
    dropdownList.classList.remove('dropdown__list--visible');
    dropdown.classList.remove('dropdown__bar--active');
    input.value = selectedOption;
  }
});

// Filter function

input.addEventListener('keyup', filterNames);
function filterNames() {
  // get value of input

  var filterValue = input.value.toUpperCase();
  for (var i = 0; i < listItems.length; i = i + 1) {
    var listItem = listItems[i];
    if (listItem.innerHTML.toUpperCase().lastIndexOf(filterValue, 0) === 0) {
      listItem.style.display = '';
    } else {
      listItem.style.display = 'none';
    }
  }
}
