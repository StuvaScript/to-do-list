import {
  createToDoItemButton,
  displayProjectName,
  displayToDoInfo,
  displayTodaysDate,
  updateOptions,
} from './modules/dom-manipulation';

import { createToDoItemButtonLogic } from './modules/event-handler';

export {
  populateDropdownMenu,
  addObjectToArray,
  addOptions,
  createObject,
  todoArray,
  getTodaysDate,
};

// ? I got a console.log shortcut. Put your cursor on a word and do ctr+alt+w then either W or up or down arrows. Also to make it a string, do shift+alt+W and either W or up or down arrows.

const todoArray = [];

createToDoItemButton();
createToDoItemButtonLogic();
displayTodaysDate();

//* **`` FUNCTIONS ``**

function getTodaysDate() {
  const date = new Date();
  //? **`` These are the date formatting options
  const dateOptions = { month: 'short', day: 'numeric' };
  const todaysDate = date.toLocaleDateString(undefined, dateOptions);
  return todaysDate;
}

//? **`` Adds the new projects as options to the select dropdown
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

//? **`` Takes a new object as an argument and adds it to the front of the array
function addObjectToArray(newObject) {
  todoArray.unshift(newObject);
}

//? **`` Factory function that creates a new object of all the form values
function createObject(project, task, date, priority, notes) {
  return { project, task, date, priority, notes };
}
