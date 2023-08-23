import {
  createToDoItemButton,
  displayTodaysDate,
  displayTask,
  displayToDoInfo,
  updateOptions,
  removeChildrenOfContent,
  displayBackButton,
  displayDeleteButton,
} from './modules/dom-manipulation';

import {
  createToDoItemButtonLogic,
  taskDisplayLogic,
  backButtonLogic,
  deleteButtonLogic,
} from './modules/event-handler';

export {
  populateDropdownMenu,
  addObjectToArray,
  addOptions,
  createObject,
  todoArray,
  getTodaysDate,
  createID,
  goToMainScreen,
  goToTaskScreen,
};

// ? I got a console.log shortcut. Put your cursor on a word and do ctr+alt+w then either W or up or down arrows. Also to make it a string, do shift+alt+W and either W or up or down arrows.

const todoArray = [];

createToDoItemButton();
createToDoItemButtonLogic();
displayTodaysDate();

//* **`` FUNCTIONS ``**

function goToMainScreen() {
  removeChildrenOfContent();
  displayTask();
  createToDoItemButton();
  createToDoItemButtonLogic();
  displayTodaysDate();
  taskDisplayLogic();
}

function goToTaskScreen(ID) {
  //? **`` Filters through all objects in the array and returns a new array with the object that matches the ID
  const currentObjArray = todoArray.filter((object) => ID == object.idNumber);
  removeChildrenOfContent();
  //? **`` Loops through the object and passes the key/value pairs to the display function
  Object.entries(currentObjArray[0]).map(([key, value]) => {
    displayToDoInfo(key, value);
  });
  displayBackButton();
  backButtonLogic();
  displayDeleteButton();
  deleteButtonLogic(ID);
}

//! **`` Not being used anywhere
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

//! ************************************************************************************************
//todo **`` Trying to get this unique number checker to work. Chat GPT recommended I add used numbers to an array like the code below. I need the usedNumbers array to live outside the function so that it doesn't reset with each function call. Also, that way I can remove the number when I delete a task.

function createID() {
  const usedNumbers = [];
  while (true) {
    const randomNumber = Math.floor(Math.random() * (15 - 10 + 1)) + 10;
    if (!usedNumbers.includes(randomNumber)) {
      usedNumbers.push(randomNumber);
      console.log('usedNumbers');
      console.log(usedNumbers);
      return randomNumber;
    }
  }
}

// //? **`` Creates a unique ID that gets attached to an object
// function createID() {

//   let number = Math.floor(Math.random() * (5 - 1) + 1);
//   // let number = Math.floor(Math.random() * (999999 - 100000) + 100000);
//   if (todoArray.some((obj) => obj.idNumber === number)) {
//     console.log('farts');
//     createID();
//   } else {
//     return number;
//   }

// let number = Math.floor(Math.random() * (999999 - 100000) + 100000);
// //? **`` To check for duplicates, this loops through the array and grabs each object and it's index position
// todoArray.forEach((currentObject, index) => {
//   //? **`` Compares the new number to the other object's unique IDs
//   if (number === Object.values(currentObject)[5]) {
//     //? **`` If there is a duplicate ID number, it will run recursively on itself until there is a unique ID
//     createID();
//   }
// });

// }

//! ************************************************************************************************

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
  const optionNodeList = document.querySelectorAll('option');
  //? **`` Big "if statement" !!
  if (
    //? **`` Turns the node list into an array then checks for duplicate project names. Notice the "bang" mark at the beginning saying "if this is NOT true..."
    ![...optionNodeList].some(
      (option) => newProjectField.value == option.innerText
    )
  ) {
    //? **`` If there are no duplicates, it adds it to the select dropdown
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
function createObject(project, task, date, priority, notes, idNumber) {
  return { project, task, date, priority, notes, idNumber };
}
