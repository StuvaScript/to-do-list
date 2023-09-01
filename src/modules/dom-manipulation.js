import { populateDropdownMenu, getTodaysDate, todoArray } from '../index';
import { backButtonLogic } from './event-handler';

export {
  createToDoItemButton,
  makeForm,
  displayTodaysDate,
  removeChildrenOfContent,
  displayTask,
  displayToDoInfo,
  updateOptions,
  displayBackButton,
  displayDeleteButton,
  displayWarning,
  createSortingDropdown,
  content,
};

const content = document.querySelector('.content');

//todo **`` I want to be able to pick tasks by project titles or by priority
//todo **`` I want to be able to pull up upcoming tasks based on due date
//todo **`` I want to be able to show tasks due only on their date

//todo **`` Working on the logic to sort all the tasks. Using displayTask() and sortingAndDisplayOfTasksLogic()

//? **`` Creates the sorting dropdown menu and all it's options
function createSortingDropdown() {
  const sortingDropdown = document.createElement('select');
  sortingDropdown.setAttribute('id', 'sortingDropdown');
  sortingDropdown.setAttribute('name', 'sortingDropdown');
  const sortingDropdownLabel = document.createElement('label');
  sortingDropdownLabel.innerText = 'Sort Tasks: ';
  sortingDropdownLabel.setAttribute('for', 'sortingDropdown');

  content.prepend(sortingDropdownLabel, sortingDropdown);

  const priorityOption = document.createElement('option');
  priorityOption.setAttribute('value', 'priority');
  priorityOption.innerText = 'priority';

  const alphaOption = document.createElement('option');
  alphaOption.setAttribute('value', 'A-Z');
  alphaOption.innerText = 'A-Z';

  const reverseAlphaOption = document.createElement('option');
  reverseAlphaOption.setAttribute('value', 'Z-A');
  reverseAlphaOption.innerText = 'Z-A';

  const projectOption = document.createElement('option');
  projectOption.setAttribute('value', 'project');
  projectOption.innerText = 'project';

  const dueOption = document.createElement('option');
  dueOption.setAttribute('value', 'due-date');
  dueOption.innerText = 'due date';

  sortingDropdown.append(
    priorityOption,
    alphaOption,
    reverseAlphaOption,
    projectOption,
    dueOption
  );
}

//? **`` Creates a new <option> element and sets it as the new project value
function updateOptions(newProjectField) {
  const getDropdownMenu = document.querySelector('#dropdownProjectMenu');
  const makeOption = document.createElement('option');

  makeOption.setAttribute('value', newProjectField.value);
  makeOption.innerText = newProjectField.value;
  getDropdownMenu.appendChild(makeOption);
}

//? **`` Shows the date
function displayTodaysDate() {
  const today = getTodaysDate();
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
  dropdownProjectMenu.setAttribute('id', 'dropdownProjectMenu');
  dropdownProjectMenu.setAttribute('name', 'dropdownProjectMenu');
  const dropdownProjectMenuLabel = document.createElement('label');
  dropdownProjectMenuLabel.innerText = 'Assign To Project';
  dropdownProjectMenuLabel.setAttribute('for', 'dropdownProjectMenu');

  const defaultOption = document.createElement('option');
  dropdownProjectMenu.appendChild(defaultOption);
  defaultOption.setAttribute('value', 'Default Project');
  defaultOption.innerText = 'Default Project';

  const newProjectTitle = document.createElement('input');
  newProjectTitle.setAttribute('type', 'text');
  newProjectTitle.setAttribute('id', 'newproject');
  newProjectTitle.setAttribute('name', 'newproject');
  const newProjectLabel = document.createElement('label');
  newProjectLabel.innerText = 'Or Create New Project';
  newProjectLabel.setAttribute('for', 'newproject');

  const projectButton = document.createElement('button');
  projectButton.innerText = 'Create New Project';
  projectButton.classList.add('project-button');

  const todoTask = document.createElement('input');
  todoTask.setAttribute('type', 'text');
  todoTask.setAttribute('id', 'task');
  todoTask.setAttribute('name', 'task');
  const taskLabel = document.createElement('label');
  taskLabel.innerText = 'ToDo Task';
  taskLabel.setAttribute('for', 'task');

  const todoDate = document.createElement('input');
  todoDate.setAttribute('type', 'date');
  todoDate.setAttribute('id', 'date');
  todoDate.setAttribute('name', 'date');
  const dateLabel = document.createElement('label');
  dateLabel.innerText = 'Due Date';
  dateLabel.setAttribute('for', 'date');

  const radioPriority1 = document.createElement('input');
  radioPriority1.setAttribute('type', 'radio');
  radioPriority1.setAttribute('id', 'P1');
  radioPriority1.setAttribute('name', 'priority');
  radioPriority1.setAttribute('value', 'P1');
  const labelPriority1 = document.createElement('label');
  labelPriority1.innerText = 'P1';
  labelPriority1.setAttribute('for', 'P1');

  const radioPriority2 = document.createElement('input');
  radioPriority2.setAttribute('type', 'radio');
  radioPriority2.setAttribute('id', 'P2');
  radioPriority2.setAttribute('name', 'priority');
  radioPriority2.setAttribute('value', 'P2');
  const labelPriority2 = document.createElement('label');
  labelPriority2.innerText = 'P2';
  labelPriority2.setAttribute('for', 'P2');

  const radioPriority3 = document.createElement('input');
  radioPriority3.setAttribute('type', 'radio');
  radioPriority3.setAttribute('id', 'P3');
  radioPriority3.setAttribute('name', 'priority');
  radioPriority3.setAttribute('value', 'P3');
  const labelPriority3 = document.createElement('label');
  labelPriority3.innerText = 'P3';
  labelPriority3.setAttribute('for', 'P3');

  const radioPriority4 = document.createElement('input');
  radioPriority4.setAttribute('type', 'radio');
  radioPriority4.setAttribute('id', 'P4');
  radioPriority4.setAttribute('name', 'priority');
  radioPriority4.setAttribute('value', 'P4');
  radioPriority4.setAttribute('checked', '');
  const labelPriority4 = document.createElement('label');
  labelPriority4.innerText = 'P4';
  labelPriority4.setAttribute('for', 'P4');

  const notes = document.createElement('textarea');
  notes.setAttribute('id', 'notes');
  notes.setAttribute('name', 'notes');
  const notesLabel = document.createElement('label');
  notesLabel.innerText = 'Notes';
  notesLabel.setAttribute('for', 'notes');

  const todoButton = document.createElement('button');
  todoButton.innerText = 'Add ToDo';
  todoButton.classList.add('todo-button');

  const button = document.createElement('button');
  button.innerText = 'Go Back';
  button.classList.add('back');

  form.append(
    dropdownProjectMenu,
    dropdownProjectMenuLabel,
    newProjectTitle,
    newProjectLabel,
    projectButton,
    todoTask,
    taskLabel,
    todoDate,
    dateLabel,
    radioPriority1,
    labelPriority1,
    radioPriority2,
    labelPriority2,
    radioPriority3,
    labelPriority3,
    radioPriority4,
    labelPriority4,
    notes,
    notesLabel,
    todoButton,
    button
  );

  populateDropdownMenu();
  backButtonLogic();
}

//? **`` Loops through the array and for each object it creates a button, puts the task name on it, adds a class, sets the object's ID number to the element ID, and displays it
function displayTask(array) {
  array.map((obj) => {
    const button = document.createElement('button');
    button.innerText = `${obj.task}`;
    button.classList.add('task');
    button.setAttribute('id', obj.idNumber);
    content.appendChild(button);
  });
}

//? **`` Displays the object key/value pair except for the ID Number
function displayToDoInfo(key, value) {
  //? **`` This makes sure it doesn't display the 'IDNumber' value from the object
  if (key !== 'idNumber') {
    const paragraph = document.createElement('p');
    paragraph.innerText = `${key}: ${value}`;
    content.appendChild(paragraph);
  }
}

//? **`` Creates a 'go back' button
function displayBackButton() {
  const button = document.createElement('button');
  button.innerText = 'Go Back';
  button.classList.add('back');
  content.appendChild(button);
}

//? **`` Creates a 'delete' button
function displayDeleteButton() {
  const button = document.createElement('button');
  button.innerText = 'Delete';
  button.classList.add('delete');
  content.appendChild(button);
}

//? **`` Creates a warning screen when trying to delete a task
function displayWarning() {
  const div = document.createElement('div');
  div.classList.add('warning');
  content.appendChild(div);

  const paragraph = document.createElement('p');
  paragraph.innerText = 'Are you sure?';
  div.appendChild(paragraph);

  const backButton = document.createElement('button');
  backButton.innerText = 'Go Back';
  backButton.classList.add('warning-back');
  div.appendChild(backButton);

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.classList.add('warning-delete');
  div.appendChild(deleteButton);
}

//? **`` Removes all the elements within the main "content" class element
function removeChildrenOfContent() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}
