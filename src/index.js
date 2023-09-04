import {
  createToDoItemButton,
  displayTodaysDate,
  displayToDoInfo,
  updateOptions,
  removeChildrenOfContent,
  displayBackButton,
  displayDeleteButton,
  createSortingDropdown,
  createHeader,
} from './modules/dom-manipulation';

import {
  createToDoItemButtonLogic,
  taskDisplayLogic,
  backButtonLogic,
  deleteButtonLogic,
  sortingAndDisplayOfTasksLogic,
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
  findPriorities,
  priorityOrder,
  alphaOrder,
  reverseAlphaOrder,
  projectOrder,
  dueDateOrder,
  header,
};

//? **`` Initial functions to be ran
const todoArray = [];
createHeader();
const header = document.querySelector('header');
createToDoItemButton();
createToDoItemButtonLogic();
createSortingDropdown();
sortingAndDisplayOfTasksLogic();
displayTodaysDate();

//* **`` FUNCTIONS ``**

//? **`` Sorts the array by priority
function priorityOrder() {
  return todoArray.sort((a, b) => (a.priority > b.priority ? 1 : -1));
}

//? **`` Sorts the array by alphabetical A-Z
function alphaOrder() {
  return todoArray.sort((a, b) => (a.task > b.task ? 1 : -1));
}

//? **`` Sorts the array by reverse alphabetical Z-A
function reverseAlphaOrder() {
  return todoArray.sort((a, b) => (a.task < b.task ? 1 : -1));
}

//? **`` Sorts the array by project
function projectOrder() {
  return todoArray.sort((a, b) => (a.project > b.project ? 1 : -1));
}

//? **`` Sorts the array by due date
function dueDateOrder() {
  return todoArray.sort((a, b) => (a.date > b.date ? 1 : -1));
}

function findPriorities() {
  //? **``This finds all the 'priority' attributes, spreads the node list into an array, and returns the one thats checked.
  const checked = [...document.querySelectorAll('[name="priority"]')].find(
    (priority) => priority.checked
  );
  return checked.value;
}

//! **`` It throws an error when you add a task. When createToDoItemButton() is initially called, everything is fine. But when goToMainScreen() is called, createToDoItemButton() fails to create the class name on the button. Then createToDoItemButtonLogic() fails to see the class to add it's event listener to it. The only thing that has changed in the codebase is I created a <header> tag dynamically, and added the date, sort dropdown, and 'Create ToDo' button to it. Theres also a new removeHeader() function

function goToMainScreen() {
  removeChildrenOfContent();
  createHeader();
  createToDoItemButton();
  createToDoItemButtonLogic();
  createSortingDropdown();
  sortingAndDisplayOfTasksLogic();
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

function createID() {
  //? **`` This loops forever, and when we find that the random number does NOT match any ID numbers in the objects within the array, then we kill the loop and return the new unique number
  while (true) {
    const randomNumber =
      Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    if (!todoArray.some((obj) => obj.idNumber === randomNumber)) {
      return randomNumber;
    }
  }
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
  //? **`` Loops through each object in the array
  todoArray.map((objs) => {
    //? **`` As it loops, it checks to make sure each objects project name doesn't already exist in the dropdown list
    const optionNodeList = document.querySelectorAll(
      '#dropdownProjectMenu > option'
    );
    const duplicateCheck = [...optionNodeList].some(
      (oppies) => oppies.innerText === objs.project
    );
    //? **`` If there are no duplicates, it fills the dropdown menu with the project names
    if (!duplicateCheck) {
      const newOption = document.createElement('option');
      dropdownProjectMenu.appendChild(newOption);
      newOption.setAttribute('value', objs.project);
      newOption.innerText = objs.project;
    }
  });
}

//? **`` Updates the select dropdown options with the 'Create New Project' value
function addOptions(newProjectField) {
  const optionNodeList = document.querySelectorAll(
    '#dropdownProjectMenu > option'
  );
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
