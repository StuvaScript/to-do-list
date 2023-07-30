import {
  createToDoItemButton,
  displayProjectName,
  createToDoParagraphs,
} from './modules/dom-manipulation';

import { createToDoItemButtonLogic } from './modules/event-handler';

export {
  populateDropdownMenu,
  addToDoToArray,
  getProjectName,
  displayToDo,
  addOptions,
  createToDo,
  todoArray,
};

// ! Do I need this code below for Prettier to work??
// const { doc } = require('prettier');

// ? I got a console.log shortcut. Put your cursor on a word and do ctr+alt+w then either W or up or down arrows. Also to make it a string, do shift+alt+W and either W or up or down arrows.

const todoArray = [];

createToDoItemButton();
createToDoItemButtonLogic();

//* **`` FUNCTIONS ``**

function populateDropdownMenu() {
  //? **`` Loops through the array and grabs each value and it's index position
  todoArray.forEach((currentValue, index) => {
    const projectValues = Object.values(currentValue)[0];

    let optionDuplicate = false;

    document.querySelectorAll('option').forEach((option) => {
      if (projectValues == option.innerText) {
        optionDuplicate = true;
      }
    });

    if (optionDuplicate !== true) {
      //? **`` fills the dropdown menu with the projects in the array
      const newOption = document.createElement('option');
      dropdownProjectMenu.appendChild(newOption);
      newOption.setAttribute('value', projectValues);
      newOption.innerText = projectValues;
    }
  });
}
//? **`` Updates the select dropdown options with the 'Create New Project' value
function addOptions(newProjectField) {
  //? **`` Duplicate check initial value
  let optionDuplicate = false;
  //? **`` Loops through all the select dropdown options
  document.querySelectorAll('option').forEach((option) => {
    //? **`` Checks for duplicates
    if (newProjectField.value == option.innerText) {
      optionDuplicate = true;
    }
  });
  //? **`` If the project input is NOT a duplicate, it adds it to the project select dropdown options
  if (optionDuplicate !== true) {
    updateOptions(newProjectField);

    //? **`` Automatically sets dropdown menu to last created new project
    document.querySelector('#dropdownProjectMenu').value =
      document.querySelector('#dropdownProjectMenu > option:last-child').value;
  }
}
//? **`` Creates a new <option> element and sets it as the new project value
function updateOptions(newProjectField) {
  const getDropdownMenu = document.querySelector('#dropdownProjectMenu');
  const makeOption = document.createElement('option');

  makeOption.setAttribute('value', newProjectField.value);
  makeOption.innerText = newProjectField.value;
  getDropdownMenu.appendChild(makeOption);
}
//? **`` Gets the project name and displays it
function getProjectName() {
  //? **`` Loops through the array and grabs each value and it's index position
  todoArray.forEach((currentValue, index) => {
    //? **`` Gets the first value in the object (in this case, it's the project name)
    const projectName = Object.values(currentValue)[0];
    console.log('projectName');
    console.log(projectName);
    //? **`` Displays the project name
    displayProjectName(projectName);
  });
}
//? **`` Displays all the form values
function displayToDo() {
  //? **`` Loops through the array and grabs each value and it's index position
  todoArray.forEach((currentValue, index) => {
    //? **`` Loops through each object in the array and displays each key/value pair
    for (const [objectKey, objectValue] of Object.entries(currentValue)) {
      createToDoParagraphs(objectKey, objectValue);
    }
  });
}

function addToDoToArray(newTodo) {
  todoArray.unshift(newTodo);
}

function createToDo(project, task, date, priority, notes) {
  return { project, task, date, priority, notes };
}
