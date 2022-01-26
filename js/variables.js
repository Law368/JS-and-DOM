var dropdownWrapper = document.querySelector('.dropdown__wrapper');
var input = document.querySelector('.dropdown__input');
var button = document.querySelector('.dropdown__button');
var dropdownList = document.querySelector('.dropdown__list');
var selectedOption = {
  str: '',
};
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

export {
  button,
  input,
  dropdownList,
  selectItems,
  selectedOption,
  dropdownWrapper,
};
