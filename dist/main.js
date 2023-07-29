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
/* harmony export */   "addOptions": () => (/* binding */ addOptions),
/* harmony export */   "addToDoToArray": () => (/* binding */ addToDoToArray),
/* harmony export */   "createToDo": () => (/* binding */ createToDo),
/* harmony export */   "displayProjects": () => (/* binding */ displayProjects),
/* harmony export */   "displayToDo": () => (/* binding */ displayToDo),
/* harmony export */   "populateDropdownMenu": () => (/* binding */ populateDropdownMenu),
/* harmony export */   "todoArray": () => (/* binding */ todoArray)
/* harmony export */ });
/* harmony import */ var _modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom-manipulation */ "./src/modules/dom-manipulation.js");
/* harmony import */ var _modules_event_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/event-handler */ "./src/modules/event-handler.js");






// ! Do I need this code below for Prettier to work??
// const { doc } = require('prettier');

// ? I got a console.log shortcut. Put your cursor on a word and do ctr+alt+w then either W or up or down arrows. Also to make it a string, do shift+alt+W and either W or up or down arrows.

const todoArray = [];

(0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.createToDoItemButton)();
(0,_modules_event_handler__WEBPACK_IMPORTED_MODULE_1__.createToDoItemButtonLogic)();

// --- FUNCTIONS ---

function populateDropdownMenu() {
  // Loops through the array and grabs each value and it's index position
  todoArray.forEach((currentValue, index) => {
    const projectValues = Object.values(currentValue)[0];

    let optionDuplicate = false;

    document.querySelectorAll('option').forEach((option) => {
      if (projectValues == option.innerText) {
        optionDuplicate = true;
      }
    });

    if (optionDuplicate !== true) {
      // fills the dropdown menu with the projects in the array
      const newOption = document.createElement('option');
      dropdownProjectMenu.appendChild(newOption);
      newOption.setAttribute('value', projectValues);
      newOption.innerText = projectValues;
    }
  });
}

// function removeCreateToDoItemButton() {
//   document.querySelector('.new-todo-button').remove();
// }

// function removeForm() {
//   document.querySelector('form').remove();
// }

function addOptions(newProjectField) {
  // Checks for duplicates
  let optionDuplicate = false;

  document.querySelectorAll('option').forEach((option) => {
    if (newProjectField.value == option.innerText) {
      optionDuplicate = true;
    }
  });

  if (optionDuplicate !== true) {
    updateOptions(newProjectField);

    // automatically sets dropdown menu to last created new project
    document.querySelector('#dropdownProjectMenu').value =
      document.querySelector('#dropdownProjectMenu > option:last-child').value;
  }
}

function updateOptions(newProjectField) {
  const getDropdownMenu = document.querySelector('#dropdownProjectMenu');
  const makeOption = document.createElement('option');

  makeOption.setAttribute('value', newProjectField.value);
  makeOption.innerText = newProjectField.value;
  getDropdownMenu.appendChild(makeOption);
}

function displayProjects() {
  // Loops through the array and grabs each value and it's index position
  todoArray.forEach((currentValue, index) => {
    const projectValues = Object.values(currentValue)[0];
    (0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.createProjectParagraphs)(projectValues);
  });
}

function displayToDo() {
  // Loops through the array and grabs each value and it's index position
  todoArray.forEach((currentValue, index) => {
    console.log(index + ' ' + Object.values(currentValue)[0]);
    // Loops through each object in the array and displays each key/value pair
    for (const [objectKey, objectValue] of Object.entries(currentValue)) {
      // console.log(`${objectKey}: ${objectValue}`);
      (0,_modules_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.createToDoParagraphs)(objectKey, objectValue);
    }
  });
}

function addToDoToArray(newTodo) {
  todoArray.unshift(newTodo);
}

function createToDo(project, title, description, date, priority, notes) {
  return { project, title, description, date, priority, notes };
}


/***/ }),

/***/ "./src/modules/dom-manipulation.js":
/*!*****************************************!*\
  !*** ./src/modules/dom-manipulation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectParagraphs": () => (/* binding */ createProjectParagraphs),
/* harmony export */   "createToDoItemButton": () => (/* binding */ createToDoItemButton),
/* harmony export */   "createToDoParagraphs": () => (/* binding */ createToDoParagraphs),
/* harmony export */   "makeForm": () => (/* binding */ makeForm),
/* harmony export */   "removeCreateToDoItemButton": () => (/* binding */ removeCreateToDoItemButton),
/* harmony export */   "removeForm": () => (/* binding */ removeForm),
/* harmony export */   "removeParagraphs": () => (/* binding */ removeParagraphs)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");




const content = document.querySelector('.content');

function createToDoItemButton() {
  const newToDoButton = document.createElement('button');
  newToDoButton.innerText = 'Create ToDo Item';
  newToDoButton.classList.add('new-todo-button');
  content.prepend(newToDoButton);
}

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
  projectButton.innerText = 'Add New Project';
  projectButton.classList.add('project-button');
  form.appendChild(projectButton);

  createBreak(form);

  const todoTitle = document.createElement('input');
  form.appendChild(todoTitle);
  todoTitle.setAttribute('type', 'text');
  todoTitle.setAttribute('id', 'title');
  todoTitle.setAttribute('name', 'title');
  const titleLabel = document.createElement('label');
  titleLabel.innerText = 'ToDo Title';
  titleLabel.setAttribute('for', 'title');
  form.appendChild(titleLabel);

  createBreak(form);

  const todoDescription = document.createElement('input');
  form.appendChild(todoDescription);
  todoDescription.setAttribute('type', 'text');
  todoDescription.setAttribute('id', 'description');
  todoDescription.setAttribute('name', 'description');
  const descriptionLabel = document.createElement('label');
  descriptionLabel.innerText = 'ToDo Description';
  descriptionLabel.setAttribute('for', 'description');
  form.appendChild(descriptionLabel);

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

function createBreak(element) {
  const br = document.createElement('br');
  element.appendChild(br);
}

function createProjectParagraphs(projectValues) {
  const paragraph = document.createElement('p');
  paragraph.innerText = `${projectValues}`;
  content.appendChild(paragraph);
}

function createToDoParagraphs(objectKey, objectValue) {
  const paragraph = document.createElement('p');
  paragraph.innerText = `${objectKey}: ${objectValue}`;
  content.appendChild(paragraph);
}

function removeParagraphs() {
  document.querySelectorAll('p').forEach((para) => para.remove());
}

function removeCreateToDoItemButton() {
  document.querySelector('.new-todo-button').remove();
}

function removeForm() {
  document.querySelector('form').remove();
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
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.removeCreateToDoItemButton)();
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.makeForm)();
    addToDoButtonLogic();
    addNewProjectButtonLogic();
  });
}

//? **`` This gets all the values from the form, puts the values into their own object, puts the object into the main array, displays all the values, removes the form, displays the main 'ToDo button', and applies the logic to the button.
function addToDoButtonLogic() {
  document.querySelector('.todo-button').addEventListener('click', (e) => {
    e.preventDefault();
    const project = document.querySelector('#dropdownProjectMenu').value;
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const date = document.querySelector('#date').value;
    const notes = document.querySelector('#notes').value;
    let priority;
    document.querySelectorAll('[name="priority"]').forEach((radio) => {
      if (radio.checked) {
        priority = radio.value;
      }
    });

    const newToDo = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createToDo)(
      project,
      title,
      description,
      date,
      priority,
      notes
    );

    (0,_index__WEBPACK_IMPORTED_MODULE_0__.addToDoToArray)(newToDo);
    console.log(_index__WEBPACK_IMPORTED_MODULE_0__.todoArray);
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.removeParagraphs)();
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.displayProjects)();
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.displayToDo)();
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.removeForm)();
    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.createToDoItemButton)();
    createToDoItemButtonLogic();
  });
}

//? **`` This gets the value for a new project, then populates the select field with the new project.
function addNewProjectButtonLogic() {
  document.querySelector('.project-button').addEventListener('click', (e) => {
    e.preventDefault();
    const newProjectField = document.querySelector('#newproject');

    if (newProjectField.value === '') {
      return;
    }

    (0,_index__WEBPACK_IMPORTED_MODULE_0__.addOptions)(newProjectField);

    // ? **`` resets 'create new project' input field
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