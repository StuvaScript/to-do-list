import {
  addObjectToArray,
  addOptions,
  createObject,
  todoArray,
} from '../index';

import {
  getProjectName,
  getTaskName,
  displayToDo,
  makeForm,
  createToDoItemButton,
  displayTodaysDate,
  removeChildrenOfContent,
} from './dom-manipulation';

export { createToDoItemButtonLogic, addToDoButtonLogic };

//? **`` This removes the main button, creates the form, then applies the logic to the two buttons within the form.
function createToDoItemButtonLogic() {
  document.querySelector('.new-todo-button').addEventListener('click', (e) => {
    e.preventDefault();
    removeChildrenOfContent();
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
    //? **`` If the task field is empty, nothing happens.
    if (task == '') return;

    //todo **`` Write a description next to the new ID function and other places it affects, try to get the idNumber to show up in the console.log array display, apply some logic to when you click on the new task button it finds it's id number and matches that to the array object and displays it's info.

    const createID = () => {
      return Math.floor(Math.random() * (999999 - 100000) + 100000);
    };
    const idNUmber = createID();
    console.log(idNUmber);

    //? **`` Takes all the form values, turns them into a new object, and turns the object into it's own variable
    const newObject = createObject(
      project,
      task,
      date,
      priority,
      notes,
      idNUmber
    );

    addObjectToArray(newObject);
    console.log('**`` todoArray ``**');
    console.log(todoArray);
    removeChildrenOfContent();
    // getProjectName();
    getTaskName(idNUmber);
    // displayToDo();
    createToDoItemButton();
    createToDoItemButtonLogic();
    displayTodaysDate();
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
