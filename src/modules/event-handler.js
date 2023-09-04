import {
  addObjectToArray,
  addOptions,
  createObject,
  todoArray,
  createID,
  goToMainScreen,
  goToTaskScreen,
  findPriorities,
  priorityOrder,
  alphaOrder,
  reverseAlphaOrder,
  projectOrder,
  dueDateOrder,
} from '../index';

import {
  makeForm,
  removeChildrenOfContent,
  displayWarning,
  displayTask,
  clearTasks,
  removeHeader,
  createHeader,
} from './dom-manipulation';

export {
  createToDoItemButtonLogic,
  addToDoButtonLogic,
  taskDisplayLogic,
  backButtonLogic,
  deleteButtonLogic,
  sortingAndDisplayOfTasksLogic,
};

//? **`` Displays the tasks by the chosen order
function sortingAndDisplayOfTasksLogic() {
  //? **`` The initial task display
  displayTask(todoArray);
  //? **`` Listens for changes in the sorting dropdown menu
  document.querySelector('#sortingDropdown').addEventListener('change', (e) => {
    const sortValue = document.querySelector('#sortingDropdown').value;
    //? **`` Removes the displayed tasks
    clearTasks();
    //? **`` Reorders the tasks based on the user selection and displays them again in the new order
    switch (sortValue) {
      case 'priority':
        displayTask(priorityOrder());
        break;

      case 'A-Z':
        displayTask(alphaOrder());
        break;

      case 'Z-A':
        displayTask(reverseAlphaOrder());
        break;

      case 'project':
        displayTask(projectOrder());
        break;

      case 'due-date':
        displayTask(dueDateOrder());
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

//? **`` The logic that allows you to display the info from the task you clicked on
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
    removeHeader();
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
