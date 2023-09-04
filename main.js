/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addObjectToArray": () => (/* binding */ addObjectToArray),
/* harmony export */   "addOptions": () => (/* binding */ addOptions),
/* harmony export */   "alphaOrder": () => (/* binding */ alphaOrder),
/* harmony export */   "createID": () => (/* binding */ createID),
/* harmony export */   "createObject": () => (/* binding */ createObject),
/* harmony export */   "dueDateOrder": () => (/* binding */ dueDateOrder),
/* harmony export */   "findPriorities": () => (/* binding */ findPriorities),
/* harmony export */   "getTodaysDate": () => (/* binding */ getTodaysDate),
/* harmony export */   "goToMainScreen": () => (/* binding */ goToMainScreen),
/* harmony export */   "goToTaskScreen": () => (/* binding */ goToTaskScreen),
/* harmony export */   "header": () => (/* binding */ header),
/* harmony export */   "populateDropdownMenu": () => (/* binding */ populateDropdownMenu),
/* harmony export */   "priorityOrder": () => (/* binding */ priorityOrder),
/* harmony export */   "projectOrder": () => (/* binding */ projectOrder),
/* harmony export */   "reverseAlphaOrder": () => (/* binding */ reverseAlphaOrder),
/* harmony export */   "todoArray": () => (/* binding */ todoArray)
/* harmony export */ });
/* harmony import */ var _modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom-manipulation */ "./src/modules/dom-manipulation.js");
/* harmony import */ var _modules_event_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/event-handler */ "./src/modules/event-handler.js");






//? **`` Initial functions to be ran
const todoArray = [];
(0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.createHeader)();
const header = document.querySelector('header');
(0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.createToDoItemButton)();
(0,_modules_event_handler__WEBPACK_IMPORTED_MODULE_1__.createToDoItemButtonLogic)();
(0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.createSortingDropdown)();
(0,_modules_event_handler__WEBPACK_IMPORTED_MODULE_1__.sortingAndDisplayOfTasksLogic)();
(0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.displayTodaysDate)();

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
  (0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.removeChildrenOfContent)();
  (0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.createHeader)();
  (0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.createToDoItemButton)();
  (0,_modules_event_handler__WEBPACK_IMPORTED_MODULE_1__.createToDoItemButtonLogic)();
  (0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.createSortingDropdown)();
  (0,_modules_event_handler__WEBPACK_IMPORTED_MODULE_1__.sortingAndDisplayOfTasksLogic)();
  (0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.displayTodaysDate)();
  (0,_modules_event_handler__WEBPACK_IMPORTED_MODULE_1__.taskDisplayLogic)();
}

function goToTaskScreen(ID) {
  //? **`` Filters through all objects in the array and returns a new array with the object that matches the ID
  const currentObjArray = todoArray.filter((object) => ID == object.idNumber);
  (0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.removeChildrenOfContent)();
  //? **`` Loops through the object and passes the key/value pairs to the display function
  Object.entries(currentObjArray[0]).map(([key, value]) => {
    (0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.displayToDoInfo)(key, value);
  });
  (0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.displayBackButton)();
  (0,_modules_event_handler__WEBPACK_IMPORTED_MODULE_1__.backButtonLogic)();
  (0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.displayDeleteButton)();
  (0,_modules_event_handler__WEBPACK_IMPORTED_MODULE_1__.deleteButtonLogic)(ID);
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
    (0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.updateOptions)(newProjectField);
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


/***/ }),

/***/ "./src/modules/dom-manipulation.js":
/*!*****************************************!*\
  !*** ./src/modules/dom-manipulation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearTasks": () => (/* binding */ clearTasks),
/* harmony export */   "createHeader": () => (/* binding */ createHeader),
/* harmony export */   "createSortingDropdown": () => (/* binding */ createSortingDropdown),
/* harmony export */   "createToDoItemButton": () => (/* binding */ createToDoItemButton),
/* harmony export */   "displayBackButton": () => (/* binding */ displayBackButton),
/* harmony export */   "displayDeleteButton": () => (/* binding */ displayDeleteButton),
/* harmony export */   "displayTask": () => (/* binding */ displayTask),
/* harmony export */   "displayToDoInfo": () => (/* binding */ displayToDoInfo),
/* harmony export */   "displayTodaysDate": () => (/* binding */ displayTodaysDate),
/* harmony export */   "displayWarning": () => (/* binding */ displayWarning),
/* harmony export */   "makeForm": () => (/* binding */ makeForm),
/* harmony export */   "removeChildrenOfContent": () => (/* binding */ removeChildrenOfContent),
/* harmony export */   "removeHeader": () => (/* binding */ removeHeader),
/* harmony export */   "updateOptions": () => (/* binding */ updateOptions)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _event_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-handler */ "./src/modules/event-handler.js");





const body = document.querySelector('body');
const content = document.querySelector('.content');

function createHeader() {
  const header = document.createElement('header');
  body.prepend(header);
}

//? **`` Finds all the tasks, spreads them into an array, then cycles thru them and removes them from display
function clearTasks() {
  [...document.querySelectorAll('.task')].map((task) => task.remove());
}

//? **`` Creates the sorting dropdown menu and all it's options
function createSortingDropdown() {
  const sortingDropdown = document.createElement('select');
  sortingDropdown.setAttribute('id', 'sortingDropdown');
  sortingDropdown.setAttribute('name', 'sortingDropdown');
  const sortingDropdownLabel = document.createElement('label');
  sortingDropdownLabel.innerText = 'Sort Tasks: ';
  sortingDropdownLabel.setAttribute('for', 'sortingDropdown');

  _index__WEBPACK_IMPORTED_MODULE_0__.header.prepend(sortingDropdownLabel, sortingDropdown);

  const initialOption = document.createElement('option');
  initialOption.setAttribute('value', '');
  initialOption.setAttribute('disabled', '');
  initialOption.setAttribute('selected', '');
  initialOption.innerText = '--sort by--';

  const priorityOption = document.createElement('option');
  priorityOption.setAttribute('value', 'priority');
  priorityOption.innerText = 'priority';

  const alphaOption = document.createElement('option');
  alphaOption.setAttribute('value', 'A-Z');
  alphaOption.innerText = 'A-Z';

  const reverseAlphaOption = document.createElement('option');
  reverseAlphaOption.setAttribute('value', 'Z-A');
  reverseAlphaOption.innerText = 'Z-A';

  const projectOption = document.createElement('option');
  projectOption.setAttribute('value', 'project');
  projectOption.innerText = 'project';

  const dueOption = document.createElement('option');
  dueOption.setAttribute('value', 'due-date');
  dueOption.innerText = 'due date';

  sortingDropdown.append(
    initialOption,
    priorityOption,
    alphaOption,
    reverseAlphaOption,
    projectOption,
    dueOption
  );
}

//? **`` Creates a new <option> element and sets it as the new project value
function updateOptions(newProjectField) {
  const getDropdownMenu = document.querySelector('#dropdownProjectMenu');
  const makeOption = document.createElement('option');

  makeOption.setAttribute('value', newProjectField.value);
  makeOption.innerText = newProjectField.value;
  getDropdownMenu.appendChild(makeOption);
}

//? **`` Shows the date
function displayTodaysDate() {
  const today = (0,_index__WEBPACK_IMPORTED_MODULE_0__.getTodaysDate)();
  const dateDiv = document.createElement('div');
  dateDiv.innerText = today + ' • today';
  _index__WEBPACK_IMPORTED_MODULE_0__.header.prepend(dateDiv);
}

//? **`` Creates the initial 'ToDo' button
function createToDoItemButton() {
  const newToDoButton = document.createElement('button');
  newToDoButton.innerText = 'Create ToDo Item';
  newToDoButton.classList.add('new-todo-button');
  _index__WEBPACK_IMPORTED_MODULE_0__.header.prepend(newToDoButton);
}

//? **`` Creates the form that takes all the todo info
function makeForm() {
  const form = document.createElement('form');
  form.setAttribute('action', '');
  form.setAttribute('method', 'get');
  content.prepend(form);

  const dropdownProjectMenu = document.createElement('select');
  dropdownProjectMenu.setAttribute('id', 'dropdownProjectMenu');
  dropdownProjectMenu.setAttribute('name', 'dropdownProjectMenu');
  const dropdownProjectMenuLabel = document.createElement('label');
  dropdownProjectMenuLabel.innerText = 'Assign To Project';
  dropdownProjectMenuLabel.setAttribute('for', 'dropdownProjectMenu');

  const defaultOption = document.createElement('option');
  dropdownProjectMenu.appendChild(defaultOption);
  defaultOption.setAttribute('value', 'Default Project');
  defaultOption.innerText = 'Default Project';

  const newProjectTitle = document.createElement('input');
  newProjectTitle.setAttribute('type', 'text');
  newProjectTitle.setAttribute('id', 'newproject');
  newProjectTitle.setAttribute('name', 'newproject');
  const newProjectLabel = document.createElement('label');
  newProjectLabel.innerText = 'Or Create New Project';
  newProjectLabel.setAttribute('for', 'newproject');

  const projectButton = document.createElement('button');
  projectButton.innerText = 'Create New Project';
  projectButton.classList.add('project-button');

  const todoTask = document.createElement('input');
  todoTask.setAttribute('type', 'text');
  todoTask.setAttribute('id', 'task');
  todoTask.setAttribute('name', 'task');
  const taskLabel = document.createElement('label');
  taskLabel.innerText = 'ToDo Task';
  taskLabel.setAttribute('for', 'task');

  const todoDate = document.createElement('input');
  todoDate.setAttribute('type', 'date');
  todoDate.setAttribute('id', 'date');
  todoDate.setAttribute('name', 'date');
  const dateLabel = document.createElement('label');
  dateLabel.innerText = 'Due Date';
  dateLabel.setAttribute('for', 'date');

  const radioPriority1 = document.createElement('input');
  radioPriority1.setAttribute('type', 'radio');
  radioPriority1.setAttribute('id', 'P1');
  radioPriority1.setAttribute('name', 'priority');
  radioPriority1.setAttribute('value', 'P1');
  const labelPriority1 = document.createElement('label');
  labelPriority1.innerText = 'P1';
  labelPriority1.setAttribute('for', 'P1');

  const radioPriority2 = document.createElement('input');
  radioPriority2.setAttribute('type', 'radio');
  radioPriority2.setAttribute('id', 'P2');
  radioPriority2.setAttribute('name', 'priority');
  radioPriority2.setAttribute('value', 'P2');
  const labelPriority2 = document.createElement('label');
  labelPriority2.innerText = 'P2';
  labelPriority2.setAttribute('for', 'P2');

  const radioPriority3 = document.createElement('input');
  radioPriority3.setAttribute('type', 'radio');
  radioPriority3.setAttribute('id', 'P3');
  radioPriority3.setAttribute('name', 'priority');
  radioPriority3.setAttribute('value', 'P3');
  const labelPriority3 = document.createElement('label');
  labelPriority3.innerText = 'P3';
  labelPriority3.setAttribute('for', 'P3');

  const radioPriority4 = document.createElement('input');
  radioPriority4.setAttribute('type', 'radio');
  radioPriority4.setAttribute('id', 'P4');
  radioPriority4.setAttribute('name', 'priority');
  radioPriority4.setAttribute('value', 'P4');
  radioPriority4.setAttribute('checked', '');
  const labelPriority4 = document.createElement('label');
  labelPriority4.innerText = 'P4';
  labelPriority4.setAttribute('for', 'P4');

  const notes = document.createElement('textarea');
  notes.setAttribute('id', 'notes');
  notes.setAttribute('name', 'notes');
  const notesLabel = document.createElement('label');
  notesLabel.innerText = 'Notes';
  notesLabel.setAttribute('for', 'notes');

  const todoButton = document.createElement('button');
  todoButton.innerText = 'Add ToDo';
  todoButton.classList.add('todo-button');

  const button = document.createElement('button');
  button.innerText = 'Go Back';
  button.classList.add('back');

  form.append(
    dropdownProjectMenu,
    dropdownProjectMenuLabel,
    newProjectTitle,
    newProjectLabel,
    projectButton,
    todoTask,
    taskLabel,
    todoDate,
    dateLabel,
    radioPriority1,
    labelPriority1,
    radioPriority2,
    labelPriority2,
    radioPriority3,
    labelPriority3,
    radioPriority4,
    labelPriority4,
    notes,
    notesLabel,
    todoButton,
    button
  );

  (0,_index__WEBPACK_IMPORTED_MODULE_0__.populateDropdownMenu)();
  (0,_event_handler__WEBPACK_IMPORTED_MODULE_1__.backButtonLogic)();
}

//? **`` Loops through the array and for each object it creates a button, puts the task name on it, adds a class, sets the object's ID number to the element ID, and displays it
function displayTask(array) {
  array.map((obj) => {
    const button = document.createElement('button');
    button.innerText = `${obj.task}`;
    button.classList.add('task');
    button.setAttribute('id', obj.idNumber);
    content.appendChild(button);
  });
}

//? **`` Displays the object key/value pair except for the ID Number
function displayToDoInfo(key, value) {
  //? **`` This makes sure it doesn't display the 'IDNumber' value from the object
  if (key !== 'idNumber') {
    const paragraph = document.createElement('p');
    paragraph.innerText = `${key}: ${value}`;
    content.appendChild(paragraph);
  }
}

//? **`` Creates a 'go back' button
function displayBackButton() {
  const button = document.createElement('button');
  button.innerText = 'Go Back';
  button.classList.add('back');
  content.appendChild(button);
}

//? **`` Creates a 'delete' button
function displayDeleteButton() {
  const button = document.createElement('button');
  button.innerText = 'Delete';
  button.classList.add('delete');
  content.appendChild(button);
}

//? **`` Creates a warning screen when trying to delete a task
function displayWarning() {
  const div = document.createElement('div');
  div.classList.add('warning');
  content.appendChild(div);

  const paragraph = document.createElement('p');
  paragraph.innerText = 'Are you sure?';
  div.appendChild(paragraph);

  const backButton = document.createElement('button');
  backButton.innerText = 'Go Back';
  backButton.classList.add('warning-back');
  div.appendChild(backButton);

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.classList.add('warning-delete');
  div.appendChild(deleteButton);
}

//? **`` Removes all the elements within the main "content" class element
function removeChildrenOfContent() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

function removeHeader() {
  _index__WEBPACK_IMPORTED_MODULE_0__.header.remove();
}


/***/ }),

/***/ "./src/modules/event-handler.js":
/*!**************************************!*\
  !*** ./src/modules/event-handler.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToDoButtonLogic": () => (/* binding */ addToDoButtonLogic),
/* harmony export */   "backButtonLogic": () => (/* binding */ backButtonLogic),
/* harmony export */   "createToDoItemButtonLogic": () => (/* binding */ createToDoItemButtonLogic),
/* harmony export */   "deleteButtonLogic": () => (/* binding */ deleteButtonLogic),
/* harmony export */   "sortingAndDisplayOfTasksLogic": () => (/* binding */ sortingAndDisplayOfTasksLogic),
/* harmony export */   "taskDisplayLogic": () => (/* binding */ taskDisplayLogic)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-manipulation */ "./src/modules/dom-manipulation.js");






//? **`` Displays the tasks by the chosen order
function sortingAndDisplayOfTasksLogic() {
  //? **`` The initial task display
  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.displayTask)(_index__WEBPACK_IMPORTED_MODULE_0__.todoArray);
  //? **`` Listens for changes in the sorting dropdown menu
  document.querySelector('#sortingDropdown').addEventListener('change', (e) => {
    const sortValue = document.querySelector('#sortingDropdown').value;
    //? **`` Removes the displayed tasks
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.clearTasks)();
    //? **`` Reorders the tasks based on the user selection and displays them again in the new order
    switch (sortValue) {
      case 'priority':
        (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.displayTask)((0,_index__WEBPACK_IMPORTED_MODULE_0__.priorityOrder)());
        break;

      case 'A-Z':
        (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.displayTask)((0,_index__WEBPACK_IMPORTED_MODULE_0__.alphaOrder)());
        break;

      case 'Z-A':
        (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.displayTask)((0,_index__WEBPACK_IMPORTED_MODULE_0__.reverseAlphaOrder)());
        break;

      case 'project':
        (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.displayTask)((0,_index__WEBPACK_IMPORTED_MODULE_0__.projectOrder)());
        break;

      case 'due-date':
        (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.displayTask)((0,_index__WEBPACK_IMPORTED_MODULE_0__.dueDateOrder)());
        break;
    }
    //? **`` Adds the logic back to the new task order to display each task's info
    taskDisplayLogic();
  });
}

//? **`` This is the 'delete task' warning screen's 'Delete' button logic. It removes the object from the array and returns you to the main screen
function warningDeleteButtonLogic(ID) {
  document.querySelector('.warning-delete').addEventListener('click', (e) => {
    // //? **`` Loops through the array and grabs each object and it's index position
    _index__WEBPACK_IMPORTED_MODULE_0__.todoArray.map((object, index) => {
      //? **`` If the task ID number to be deleted matches an ID in an object, that object is removed from the array and you're returned to the main screen
      if (ID == object.idNumber) {
        _index__WEBPACK_IMPORTED_MODULE_0__.todoArray.splice(index, 1);
        (0,_index__WEBPACK_IMPORTED_MODULE_0__.goToMainScreen)();
      }
    });
  });
}

//? **`` This is the 'delete task' warning screen's 'Go Back' button logic. It takes you back to the task screen.
function warningBackButtonLogic(ID) {
  document.querySelector('.warning-back').addEventListener('click', (e) => {
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.goToTaskScreen)(ID);
  });
}

//? **`` Clicking the delete button clears the screen and brings up a warning
function deleteButtonLogic(ID) {
  document.querySelector('.delete').addEventListener('click', (e) => {
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.removeChildrenOfContent)();
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.displayWarning)();
    warningBackButtonLogic(ID);
    warningDeleteButtonLogic(ID);
  });
}

//? **`` Clicking the back button takes you back to the starting screen
function backButtonLogic() {
  document.querySelector('.back').addEventListener('click', (e) => {
    e.preventDefault();
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.goToMainScreen)();
  });
}

//? **`` The logic that allows you to display the info from the task you clicked on
function taskDisplayLogic() {
  //? **`` Turns your query node list into an array, loops thru each 'task' class, adds a listener to each 'task' class
  [...document.querySelectorAll('.task')].map((task) => {
    task.addEventListener('click', (e) => {
      //? **`` Gets the ID from the html element and uses it as the argument
      (0,_index__WEBPACK_IMPORTED_MODULE_0__.goToTaskScreen)(e.target.id);
    });
  });
}

//? **`` This removes the main button, creates the form, then applies the logic to the two buttons within the form.
function createToDoItemButtonLogic() {
  document.querySelector('.new-todo-button').addEventListener('click', (e) => {
    e.preventDefault();
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.removeHeader)();
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.removeChildrenOfContent)();
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.makeForm)();
    addToDoButtonLogic();
    addNewProjectButtonLogic();
  });
}

//? **`` This gets all the values from the form, puts the values into their own object, puts the object into the main array, displays all the values, removes the form, displays the main 'ToDo button', and applies the logic to the button.
function addToDoButtonLogic() {
  document.querySelector('.todo-button').addEventListener('click', (e) => {
    e.preventDefault();
    //? **`` Assigns all the form values to their own variables
    const project = document.querySelector('#dropdownProjectMenu').value;
    const task = document.querySelector('#task').value;
    const date = document.querySelector('#date').value;
    const notes = document.querySelector('#notes').value;
    const priority = (0,_index__WEBPACK_IMPORTED_MODULE_0__.findPriorities)();
    const idNumber = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createID)();

    //? **`` If the task field is empty, nothing happens.
    if (task == '') return;

    //? **`` Takes all the form values, turns them into a new object, and turns the object into it's own variable
    const newObject = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createObject)(
      project,
      task,
      date,
      priority,
      notes,
      idNumber
    );

    (0,_index__WEBPACK_IMPORTED_MODULE_0__.addObjectToArray)(newObject);
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.goToMainScreen)();
  });
}

//? **`` This gets the value for a new project, then populates the select field with the new project.
function addNewProjectButtonLogic() {
  document.querySelector('.project-button').addEventListener('click', (e) => {
    e.preventDefault();
    let newProjectField = document.querySelector('#newproject');

    //? **`` Returns if nothing is added to the new project field
    if (newProjectField.value === '') {
      return;
    }

    (0,_index__WEBPACK_IMPORTED_MODULE_0__.addOptions)(newProjectField);

    //? **`` resets 'create new project' input field
    newProjectField.value = '';
  });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map