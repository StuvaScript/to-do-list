import {
  removeCreateToDoItemButton,
  addToDoToArray,
  displayProjects,
  displayToDo,
  removeForm,
  addOptions,
  createToDo,
  todoArray,
} from '../index';

import {
  makeForm,
  removeParagraphs,
  createToDoItemButton,
} from './dom-manipulation';

export { createToDoItemButtonLogic, addToDoButtonLogic };

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
