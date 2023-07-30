import {
  addToDoToArray,
  getProjectName,
  displayToDo,
  addOptions,
  createToDo,
  todoArray,
} from '../index';

import {
  makeForm,
  removeParagraphs,
  createToDoItemButton,
  removeCreateToDoItemButton,
  removeForm,
} from './dom-manipulation';

export { createToDoItemButtonLogic, addToDoButtonLogic };

//? **`` This removes the main button, creates the form, then applies the logic to the two buttons within the form.
function createToDoItemButtonLogic() {
  document.querySelector('.new-todo-button').addEventListener('click', (e) => {
    e.preventDefault();
    removeCreateToDoItemButton();
    makeForm();
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
    //? **`` Creates a new object composed of all the form values
    const newToDo = createToDo(project, task, date, priority, notes);

    addToDoToArray(newToDo);
    console.log('todoArray');
    console.log(todoArray);
    removeParagraphs();
    getProjectName();
    displayToDo();
    removeForm();
    createToDoItemButton();
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

    addOptions(newProjectField);

    //? **`` resets 'create new project' input field
    newProjectField.value = '';
  });
}
