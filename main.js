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
/* harmony export */   "createObject": () => (/* binding */ createObject),
/* harmony export */   "displayToDo": () => (/* binding */ displayToDo),
/* harmony export */   "getProjectName": () => (/* binding */ getProjectName),
/* harmony export */   "getTodaysDate": () => (/* binding */ getTodaysDate),
/* harmony export */   "populateDropdownMenu": () => (/* binding */ populateDropdownMenu),
/* harmony export */   "todoArray": () => (/* binding */ todoArray)
/* harmony export */ });
/* harmony import */ var _modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom-manipulation */ "./src/modules/dom-manipulation.js");
/* harmony import */ var _modules_event_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/event-handler */ "./src/modules/event-handler.js");






// ? I got a console.log shortcut. Put your cursor on a word and do ctr+alt+w then either W or up or down arrows. Also to make it a string, do shift+alt+W and either W or up or down arrows.

const todoArray = [];

(0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.displayTodaysDate)();
(0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.createToDoItemButton)();
(0,_modules_event_handler__WEBPACK_IMPORTED_MODULE_1__.createToDoItemButtonLogic)();

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
    (0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.displayProjectName)(projectName);
  });
}
//? **`` Displays all the form values
function displayToDo() {
  //? **`` Loops through the array and grabs each value and it's index position
  todoArray.forEach((currentValue, index) => {
    //? **`` Loops through each object in the array and displays each key/value pair
    for (const [objectKey, objectValue] of Object.entries(currentValue)) {
      (0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.createToDoParagraphs)(objectKey, objectValue);
    }
  });
}
//? **`` Takes a new object as an argument and adds it to the front of the array
function addObjectToArray(newObject) {
  todoArray.unshift(newObject);
}

//? **`` Factory function that creates a new object of all the form values
function createObject(project, task, date, priority, notes) {
  return { project, task, date, priority, notes };
}


/***/ }),

/***/ "./src/modules/dom-manipulation.js":
/*!*****************************************!*\
  !*** ./src/modules/dom-manipulation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createToDoItemButton": () => (/* binding */ createToDoItemButton),
/* harmony export */   "createToDoParagraphs": () => (/* binding */ createToDoParagraphs),
/* harmony export */   "displayProjectName": () => (/* binding */ displayProjectName),
/* harmony export */   "displayTodaysDate": () => (/* binding */ displayTodaysDate),
/* harmony export */   "makeForm": () => (/* binding */ makeForm),
/* harmony export */   "removeChildrenOfContent": () => (/* binding */ removeChildrenOfContent)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");




const content = document.querySelector('.content');

//? **`` Shows the date
function displayTodaysDate() {
  const today = (0,_index__WEBPACK_IMPORTED_MODULE_0__.getTodaysDate)();
  const dateDiv = document.createElement('div');
  dateDiv.innerText = today + ' • today';
  content.prepend(dateDiv);
}

//? **`` Creates the initial 'ToDo' button
function createToDoItemButton() {
  const newToDoButton = document.createElement('button');
  newToDoButton.innerText = 'Create ToDo Item';
  newToDoButton.classList.add('new-todo-button');
  content.prepend(newToDoButton);
}
//? **`` Creates the form that takes all the todo info
function makeForm() {
  const form = document.createElement('form');
  form.setAttribute('action', '');
  form.setAttribute('method', 'get');
  content.prepend(form);

  const dropdownProjectMenu = document.createElement('select');
  form.appendChild(dropdownProjectMenu);
  dropdownProjectMenu.setAttribute('id', 'dropdownProjectMenu');
  dropdownProjectMenu.setAttribute('name', 'dropdownProjectMenu');
  const dropdownProjectMenuLabel = document.createElement('label');
  dropdownProjectMenuLabel.innerText = 'Assign To Project';
  dropdownProjectMenuLabel.setAttribute('for', 'dropdownProjectMenu');
  form.appendChild(dropdownProjectMenuLabel);

  const defaultOption = document.createElement('option');
  dropdownProjectMenu.appendChild(defaultOption);
  defaultOption.setAttribute('value', 'default-project');
  defaultOption.innerText = 'Default Project';

  (0,_index__WEBPACK_IMPORTED_MODULE_0__.populateDropdownMenu)();

  createBreak(form);

  const newProjectTitle = document.createElement('input');
  form.appendChild(newProjectTitle);
  newProjectTitle.setAttribute('type', 'text');
  newProjectTitle.setAttribute('id', 'newproject');
  newProjectTitle.setAttribute('name', 'newproject');
  const newProjectLabel = document.createElement('label');
  newProjectLabel.innerText = 'Or Create New Project';
  newProjectLabel.setAttribute('for', 'newproject');
  form.appendChild(newProjectLabel);

  createBreak(form);

  const projectButton = document.createElement('button');
  projectButton.innerText = 'Create New Project';
  projectButton.classList.add('project-button');
  form.appendChild(projectButton);

  createBreak(form);

  const todoTask = document.createElement('input');
  form.appendChild(todoTask);
  todoTask.setAttribute('type', 'text');
  todoTask.setAttribute('id', 'task');
  todoTask.setAttribute('name', 'task');
  const taskLabel = document.createElement('label');
  taskLabel.innerText = 'ToDo Task';
  taskLabel.setAttribute('for', 'task');
  form.appendChild(taskLabel);

  createBreak(form);

  const todoDate = document.createElement('input');
  form.appendChild(todoDate);
  todoDate.setAttribute('type', 'date');
  todoDate.setAttribute('id', 'date');
  todoDate.setAttribute('name', 'date');
  const dateLabel = document.createElement('label');
  dateLabel.innerText = 'Due Date';
  dateLabel.setAttribute('for', 'date');
  form.appendChild(dateLabel);

  createBreak(form);

  const radioPriority1 = document.createElement('input');
  form.appendChild(radioPriority1);
  radioPriority1.setAttribute('type', 'radio');
  radioPriority1.setAttribute('id', 'P1');
  radioPriority1.setAttribute('name', 'priority');
  radioPriority1.setAttribute('value', 'P1');
  const labelPriority1 = document.createElement('label');
  labelPriority1.innerText = 'P1';
  labelPriority1.setAttribute('for', 'P1');
  form.appendChild(labelPriority1);

  const radioPriority2 = document.createElement('input');
  form.appendChild(radioPriority2);
  radioPriority2.setAttribute('type', 'radio');
  radioPriority2.setAttribute('id', 'P2');
  radioPriority2.setAttribute('name', 'priority');
  radioPriority2.setAttribute('value', 'P2');
  const labelPriority2 = document.createElement('label');
  labelPriority2.innerText = 'P2';
  labelPriority2.setAttribute('for', 'P2');
  form.appendChild(labelPriority2);

  const radioPriority3 = document.createElement('input');
  form.appendChild(radioPriority3);
  radioPriority3.setAttribute('type', 'radio');
  radioPriority3.setAttribute('id', 'P3');
  radioPriority3.setAttribute('name', 'priority');
  radioPriority3.setAttribute('value', 'P3');
  const labelPriority3 = document.createElement('label');
  labelPriority3.innerText = 'P3';
  labelPriority3.setAttribute('for', 'P3');
  form.appendChild(labelPriority3);

  const radioPriority4 = document.createElement('input');
  form.appendChild(radioPriority4);
  radioPriority4.setAttribute('type', 'radio');
  radioPriority4.setAttribute('id', 'P4');
  radioPriority4.setAttribute('name', 'priority');
  radioPriority4.setAttribute('value', 'P4');
  radioPriority4.setAttribute('checked', '');
  const labelPriority4 = document.createElement('label');
  labelPriority4.innerText = 'P4';
  labelPriority4.setAttribute('for', 'P4');
  form.appendChild(labelPriority4);

  createBreak(form);

  const notes = document.createElement('textarea');
  form.appendChild(notes);
  notes.setAttribute('id', 'notes');
  notes.setAttribute('name', 'notes');
  const notesLabel = document.createElement('label');
  notesLabel.innerText = 'Notes';
  notesLabel.setAttribute('for', 'notes');
  form.appendChild(notesLabel);

  createBreak(form);

  const todoButton = document.createElement('button');
  todoButton.innerText = 'Add ToDo';
  todoButton.classList.add('todo-button');
  form.appendChild(todoButton);
}
//? **`` Simply creates a <br> element to be used in the form
function createBreak(element) {
  const br = document.createElement('br');
  element.appendChild(br);
}
//? **`` Takes the project name as an argument and displays it
function displayProjectName(projectName) {
  const paragraph = document.createElement('p');
  paragraph.innerText = `${projectName}`;
  content.appendChild(paragraph);
}
//? **`` Displays the object key/value pair (in this case, its the form fields and their values)
function createToDoParagraphs(objectKey, objectValue) {
  const paragraph = document.createElement('p');
  paragraph.innerText = `${objectKey}: ${objectValue}`;
  content.appendChild(paragraph);
}

//? **`` Removes all the elements within the main "content" class element
function removeChildrenOfContent() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
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
/* harmony export */   "createToDoItemButtonLogic": () => (/* binding */ createToDoItemButtonLogic)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-manipulation */ "./src/modules/dom-manipulation.js");






//? **`` This removes the main button, creates the form, then applies the logic to the two buttons within the form.
function createToDoItemButtonLogic() {
  document.querySelector('.new-todo-button').addEventListener('click', (e) => {
    e.preventDefault();
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
    let priority;
    document.querySelectorAll('[name="priority"]').forEach((radio) => {
      if (radio.checked) {
        priority = radio.value;
      }
    });
    //? **`` Takes all the form values, turns them into a new object, and turns the object into it's own variable
    const newObject = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createObject)(project, task, date, priority, notes);

    (0,_index__WEBPACK_IMPORTED_MODULE_0__.addObjectToArray)(newObject);
    console.log('todoArray');
    console.log(_index__WEBPACK_IMPORTED_MODULE_0__.todoArray);
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.removeChildrenOfContent)();

    (0,_index__WEBPACK_IMPORTED_MODULE_0__.getProjectName)();
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.displayToDo)();
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.displayTodaysDate)();
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.createToDoItemButton)();
    createToDoItemButtonLogic();
  });
}

//? **`` This gets the value for a new project, then populates the select field with the new project.
function addNewProjectButtonLogic() {
  document.querySelector('.project-button').addEventListener('click', (e) => {
    e.preventDefault();
    const newProjectField = document.querySelector('#newproject');

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