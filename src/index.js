import {
  createToDoItemButton,
  makeForm,
  createProjectParagraphs,
  createToDoParagraphs,
  removeParagraphs,
} from './modules/dom-manipulation';

export { populateDropdownMenu };

// ! Do I need this code below for Prettier to work??
// const { doc } = require('prettier');

// ? I got a console.log shortcut. Put your cursor on a word and do ctr+alt+w then either W or up or down arrows. Also to make it a string, do shift+alt+W and either W or up or down arrows.

const todoArray = [];

createToDoItemButton();
createToDoItemButtonLogic();

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

function removeCreateToDoItemButton() {
  document.querySelector('.new-todo-button').remove();
}

function removeForm() {
  document.querySelector('form').remove();
}

function createToDoItemButtonLogic() {
  document.querySelector('.new-todo-button').addEventListener('click', (e) => {
    e.preventDefault();
    removeCreateToDoItemButton();
    makeForm();
    addToDoButtonLogic();
    addNewProjectButtonLogic();
  });
}

function addToDoButtonLogic() {
  document.querySelector('.todo-button').addEventListener('click', (e) => {
    e.preventDefault();
    const project = document.querySelector('#dropdownProjectMenu');
    let title = document.querySelector('#title');
    const description = document.querySelector('#description');
    const date = document.querySelector('#date');
    let priority;
    document.querySelectorAll('[name="priority"]').forEach((radio) => {
      if (radio.checked) {
        priority = radio.value;
      }
    });

    const notes = document.querySelector('#notes');

    const newToDo = createToDo(
      project.value,
      title.value,
      description.value,
      date.value,
      priority,
      notes.value
    );

    addToDoToArray(newToDo);
    console.log(todoArray);
    removeParagraphs();
    displayProjects();
    displayToDo();
    removeForm();
    createToDoItemButton();
    createToDoItemButtonLogic();
  });
}

function addNewProjectButtonLogic() {
  document.querySelector('.project-button').addEventListener('click', (e) => {
    e.preventDefault();
    const newProjectField = document.querySelector('#newproject');

    if (newProjectField.value === '') {
      return;
    }

    addOptions(newProjectField);

    // resets 'create new project' input field
    newProjectField.value = '';
  });
}

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
    createProjectParagraphs(projectValues);
  });
}

function displayToDo() {
  // Loops through the array and grabs each value and it's index position
  todoArray.forEach((currentValue, index) => {
    console.log(index + ' ' + Object.values(currentValue)[0]);
    // Loops through each object in the array and displays each key/value pair
    for (const [objectKey, objectValue] of Object.entries(currentValue)) {
      // console.log(`${objectKey}: ${objectValue}`);
      createToDoParagraphs(objectKey, objectValue);
    }
  });
}

function addToDoToArray(newTodo) {
  todoArray.unshift(newTodo);
}

function createToDo(project, title, description, date, priority, notes) {
  return { project, title, description, date, priority, notes };
}
