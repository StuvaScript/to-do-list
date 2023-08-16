import {
  addObjectToArray,
  addOptions,
  createObject,
  todoArray,
  createID,
  getTaskName,
  getToDoInfo,
} from '../index';

import {
  getProjectName,
  makeForm,
  createToDoItemButton,
  displayTodaysDate,
  removeChildrenOfContent,
} from './dom-manipulation';

export { createToDoItemButtonLogic, addToDoButtonLogic };

//todo *************************************************************************************

//todo **`` Apply some logic when you click on the new task button it finds it's id number and matches that to the array object and displays it's info.

//! **`` Move the function below to index.js when done building logic
//? **`` Gets the ID assigned to the task button you clicked on
function getID() {
  document.querySelectorAll('.task').forEach((task) => {
    task.addEventListener('click', (e) => {
      console.log(e.target.id);
      return e.target.id;
    });
  });
}

function taskDisplayLogic() {
  const ID = getID();
}

//todo *************************************************************************************

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
    const idNUmber = createID();

    //? **`` If the task field is empty, nothing happens.
    if (task == '') return;

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
    removeChildrenOfContent();
    // getProjectName();
    getTaskName();
    // getToDoInfo();
    createToDoItemButton();
    createToDoItemButtonLogic();
    displayTodaysDate();
    console.log('**`` todoArray ``**');
    console.log(todoArray);
    taskDisplayLogic();
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
