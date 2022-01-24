var dropdown = document.querySelector('.dropdown__bar');
var input = document.querySelector('.dropdown__input');
var button = document.querySelector('.dropdown__button');
var dropdownList = document.querySelector('.dropdown__list');
var listItems = dropdownList.querySelectorAll('.dropdown__list-item');
var children = dropdownList.children; // .children работают
var selectedOption = '';

var windowHeight = document.body.clientHeight;
var listHeight = dropdownList.offsetHeight;
var distanceToTop =
  window.pageYOffset + dropdownList.getBoundingClientRect().top;
var distanceToBottom = windowHeight - (listHeight + distanceToTop);

console.log(distanceToBottom);

window.addEventListener('resize', function () {
  if (distanceToBottom < 0) {
    dropdownList.style.bottom = '52px';
    dropdownList.style.top = 'auto';
  } else {
    dropdownList.style.bottom = 'auto';
    dropdownList.style.top = '52px';
  }
  dropdownList.classList.remove('dropdown__list--visible');
}); /// QUESTION 3 Почему срабатывает только один раз, если лисенер на resize?
document.addEventListener('scroll', function () {
  dropdownList.classList.remove('dropdown__list--visible');
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
function insertOptions() {
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
}

document.addEventListener('DOMContentLoaded', function initDropdown() {
  //IE Support Node List Polyfill
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

  insertOptions();

  // Click on the button Open/Close the list
  button.addEventListener('click', function () {
    dropdownList.classList.toggle('dropdown__list--visible');
    input.focus();
    input.value = '';
    for (var i = 0; i < children.length; i++) {
      var listItem = children[i];
      listItem.style.display = '';
    }
  });

  // Click on the input Open/Close the list
  input.addEventListener('click', function () {
    dropdownList.classList.add('dropdown__list--visible');
    input.value = '';
    for (var i = 0; i < children.length; i++) {
      var listItem = children[i];
      listItem.style.display = '';
    }
  });

  // Click outside of DropDown
  document.addEventListener('click', function (event) {
    if (!dropdown.contains(event.target)) {
      dropdownList.classList.remove('dropdown__list--visible');
      dropdown.classList.remove('dropdown__bar--active');
      console.log(event.currentTarget);
      input.value = selectedOption;
      console.log(input.value);
    }
  });

  // Choosing the List item, remember selected option, close dropwdown
  document.addEventListener('click', function (event) {
    if (dropdownList.contains(event.target)) {
      event.stopPropagation();
      input.value = event.target.innerText;
      selectedOption = event.target.innerText;
      dropdown.classList.add('dropdown__bar--active');
      input.focus();
      dropdownList.classList.remove('dropdown__list--visible');
    }
  });

  //  Original choose the list item function that didn't work /////////// QUESTION 1 Можно ли обратиться напрямую к динамически созданным элементам без делегирования?
  // listItems.forEach(function (listItem) {
  //   listItem.addEventListener('click', function (event) {
  //     event.stopPropagation();
  //     input.value = this.innerText;
  //     dropdown.classList.add('dropdown__bar--active');
  //     input.focus();
  //     dropdownList.classList.remove('dropdown__list--visible');
  //     // dropdown.classList.remove('dropdown__bar--active');
  //   });
  // });
});

// Filter function       //// QUESTION 2 Как правильнее сделать фильтр, если тут не получается использовать делегирование?
// input.addEventListener('keyup', filterNames);
// function filterNames() {
//   // get value of input
//   let filterValue = input.value.toUpperCase();
//   console.log(listItems);
//   for (let i = 0; i < listItems.length; i = i + 1) {
//     let listItem = listItems[i].getElementsByTagName('li')[0];
//     if (listItem.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
//       listItem[i].style.display = '';
//     } else {
//       listItem[i].style.display = 'none';
//     }
//   }
// }

document.body.onkeyup = function (event) {
  if (event.target === input) {
    let filterValue = input.value.toUpperCase();
    for (let item of children) {
      if (item.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    }
  }
};
