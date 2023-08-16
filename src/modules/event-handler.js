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
  displayToDoInfo,
  displayTodaysDate,
  removeChildrenOfContent,
  displayBackButton,
} from './dom-manipulation';

export { createToDoItemButtonLogic, addToDoButtonLogic };

//? **`` Clicking the back button takes you back to the starting screen
function backButtonLogic() {
  document.querySelector('.back').addEventListener('click', (e) => {
    removeChildrenOfContent();
    getTaskName();
    createToDoItemButton();
    createToDoItemButtonLogic();
    displayTodaysDate();
    taskDisplayLogic();
  });
}

//? **`` Gets the ID assigned to the task button you clicked on
function taskDisplayLogic() {
  document.querySelectorAll('.task').forEach((task) => {
    task.addEventListener('click', (e) => {
      //? **`` Gets the ID from the html element
      const ID = e.target.id;
      //? **`` Loops through the array and grabs each object and it's index position
      todoArray.forEach((currentObject, index) => {
        //? **`` Compares the task ID number to the other object's unique IDs
        if (ID == Object.values(currentObject)[5]) {
          removeChildrenOfContent();
          //? **`` If there is a matching number, it displays that task's info
          for (const [objectKey, objectValue] of Object.entries(
            currentObject
          )) {
            displayToDoInfo(objectKey, objectValue);
          }
          displayBackButton();
          backButtonLogic();
        }
      });
    });
  });
}

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
    const idNumber = createID();

    //? **`` If the task field is empty, nothing happens.
    if (task == '') return;

    //? **`` Takes all the form values, turns them into a new object, and turns the object into it's own variable
    const newObject = createObject(
      project,
      task,
      date,
      priority,
      notes,
      idNumber
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
