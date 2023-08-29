import {
  addObjectToArray,
  addOptions,
  createObject,
  todoArray,
  createID,
  goToMainScreen,
  goToTaskScreen,
  findPriorities,
} from '../index';

import {
  makeForm,
  removeChildrenOfContent,
  displayWarning,
} from './dom-manipulation';

export {
  createToDoItemButtonLogic,
  addToDoButtonLogic,
  taskDisplayLogic,
  backButtonLogic,
  deleteButtonLogic,
};

//todo **`` I want to be able to pick tasks by project titles or by priority
//todo **`` I want to be able to pull up upcoming tasks based on due date
//todo **`` I want to be able to show tasks due only on their date

//? **`` This is the 'delete task' warning screen's 'Delete' button logic. It removes the object from the array and returns you to the main screen
function warningDeleteButtonLogic(ID) {
  document.querySelector('.warning-delete').addEventListener('click', (e) => {
    // //? **`` Loops through the array and grabs each object and it's index position
    todoArray.map((object, index) => {
      //? **`` If the task ID number to be deleted matches an ID in an object, that object is removed from the array and you're returned to the main screen
      if (ID == object.idNumber) {
        todoArray.splice(index, 1);
        goToMainScreen();
      }
    });
  });
}

//? **`` This is the 'delete task' warning screen's 'Go Back' button logic. It takes you back to the task screen.
function warningBackButtonLogic(ID) {
  document.querySelector('.warning-back').addEventListener('click', (e) => {
    goToTaskScreen(ID);
  });
}

//? **`` Clicking the delete button clears the screen and brings up a warning
function deleteButtonLogic(ID) {
  document.querySelector('.delete').addEventListener('click', (e) => {
    removeChildrenOfContent();
    displayWarning();
    warningBackButtonLogic(ID);
    warningDeleteButtonLogic(ID);
  });
}

//? **`` Clicking the back button takes you back to the starting screen
function backButtonLogic() {
  document.querySelector('.back').addEventListener('click', (e) => {
    e.preventDefault();
    goToMainScreen();
  });
}

//? **`` Gets the ID assigned to the task button you clicked on
function taskDisplayLogic() {
  //? **`` Turns your query node list into an array, loops thru each 'task' class, adds a listener to each 'task' class
  [...document.querySelectorAll('.task')].map((task) => {
    task.addEventListener('click', (e) => {
      //? **`` Gets the ID from the html element and uses it as the argument
      goToTaskScreen(e.target.id);
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

    const priority = findPriorities();
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
    goToMainScreen();
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

    addOptions(newProjectField);

    //? **`` resets 'create new project' input field
    newProjectField.value = '';
  });
}
