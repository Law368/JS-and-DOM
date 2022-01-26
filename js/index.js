var dropdownWrapper = document.querySelector('.dropdown__wrapper');
var input = document.querySelector('.dropdown__input');
var button = document.querySelector('.dropdown__button');
var dropdownList = document.querySelector('.dropdown__list');
var selectedOption = '';

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
      selectedOption = this.innerText;
      dropdownWrapper.classList.add('dropdown__wrapper--active');
      input.focus();
      dropdownList.classList.remove('dropdown__list--visible');
    });
    fragment.appendChild(li);
  }
  return fragment;
}

dropdownList.append(insertOptions());
var listItems = dropdownList.querySelectorAll('.dropdown__list-item');

// universal addeventListener
[button, input].forEach((item) => {
  item.addEventListener('click', function () {
    if (this === button) {
      dropdownList.classList.toggle('dropdown__list--visible');
      input.focus();
    } else if (this === input) {
      dropdownList.classList.add('dropdown__list--visible');
    }
    checkListPosition();
    input.value = '';
  });
});

// Click outside of dropdownWrapper
document.addEventListener('click', function (event) {
  if (!dropdownWrapper.contains(event.target)) {
    dropdownList.classList.remove('dropdown__list--visible');
    dropdownWrapper.classList.remove('dropdown__wrapper--active');
    input.value = selectedOption;
  }
});

// Filter function
input.addEventListener('keyup', filterNames);

function filterNames() {
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

// Использовать document fragment +
// разбить js файл на части
// написать одну функцию для проверки клика по кнопке или инпуту
// всплытие и погружение
// Введение в события
// особенности стд поведения формы/перезагрузка, как работаю кнопки в роли сабмит, как указать адрес дляотправки формы
