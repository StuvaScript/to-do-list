import {
  createToDoItemButton,
  displayTodaysDate,
  displayTask,
  displayToDoInfo,
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
  createID,
  getTaskName,
  getToDoInfo,
};

// ? I got a console.log shortcut. Put your cursor on a word and do ctr+alt+w then either W or up or down arrows. Also to make it a string, do shift+alt+W and either W or up or down arrows.

const todoArray = [];

createToDoItemButton();
createToDoItemButtonLogic();
displayTodaysDate();

//* **`` FUNCTIONS ``**

//? **`` Gets the task name and displays it
function getTaskName() {
  //? **`` Loops through the array and grabs each object and it's index position
  todoArray.forEach((currentObject, index) => {
    //? **`` Gets the value in the object (in this case, it's the task name)
    const taskName = Object.values(currentObject)[1];
    console.log('**`` taskName ``**');
    console.log(taskName);
    //? **`` Gets the value in the object (in this case, it's the unique ID number)
    const idNUmber = Object.values(currentObject)[5];
    console.log('idNUmber');
    console.log(idNUmber);
    //? **`` Displays the task name
    displayTask(taskName, idNUmber);
  });
}

//? **`` Displays all the form values
function getToDoInfo() {
  //? **`` Loops through the array and grabs each object and it's index position
  todoArray.forEach((currentObject, index) => {
    //? **`` Loops through each object in the array and displays each key/value pair
    for (const [objectKey, objectValue] of Object.entries(currentObject)) {
      displayToDoInfo(objectKey, objectValue);
    }
  });
}

//? **`` Creates a unique ID that gets attached to an object
function createID() {
  let number = Math.floor(Math.random() * (999999 - 100000) + 100000);
  //? **`` To check for duplicates, this loops through the array and grabs each object and it's index position
  todoArray.forEach((currentObject, index) => {
    //? **`` Compares the new number to the other object's unique IDs
    if (number === Object.values(currentObject)[5]) {
      //? **`` If there is a duplicate ID number, it will run recursively on itself until there is a unique ID
      createID();
    }
  });

  return number;
}

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
function createObject(project, task, date, priority, notes, idNUmber) {
  return { project, task, date, priority, notes, idNUmber };
}
