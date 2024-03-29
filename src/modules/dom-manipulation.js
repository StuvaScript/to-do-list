import { populateDropdownMenu, getTodaysDate, header } from '../index';
import { backButtonLogic } from './event-handler';

export {
  createToDoItemButton,
  makeForm,
  displayTodaysDate,
  removeChildrenOfContent,
  removeHeader,
  displayTask,
  displayToDoInfo,
  updateOptions,
  displayBackButton,
  displayDeleteButton,
  displayWarning,
  createSortingDropdown,
  clearTasks,
  createHeader,
};

const body = document.querySelector('body');
const content = document.querySelector('.content');

function createHeader() {
  body.prepend(document.createElement('header'));
}

//? **`` Finds all the tasks, spreads them into an array, then cycles thru them and removes them from display
function clearTasks() {
  [...document.querySelectorAll('.task')].map((task) => task.remove());
}

//? **`` Creates the sorting dropdown menu and all it's options
function createSortingDropdown() {
  const sortingDiv = document.createElement('div');
  sortingDiv.classList.add('sorting');
  header.prepend(sortingDiv);

  const sortingDropdown = document.createElement('select');
  sortingDropdown.setAttribute('id', 'sortingDropdown');
  sortingDropdown.setAttribute('name', 'sortingDropdown');
  const sortingDropdownLabel = document.createElement('label');
  sortingDropdownLabel.innerText = 'Sort Tasks: ';
  sortingDropdownLabel.setAttribute('for', 'sortingDropdown');

  sortingDiv.prepend(sortingDropdownLabel, sortingDropdown);

  const initialOption = document.createElement('option');
  initialOption.setAttribute('value', '');
  initialOption.setAttribute('disabled', '');
  initialOption.setAttribute('selected', '');
  initialOption.innerText = '--sort by--';

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
    initialOption,
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
  header.prepend(dateDiv);
}

//? **`` Creates the 'Add ToDo' icon button
function createToDoItemButton() {
  const newToDoButton = document.createElement('div');
  newToDoButton.classList.add('new-todo-button');
  header.prepend(newToDoButton);

  //? **`` This icon is linked from Google in the HTML head
  const newTaskIcon = document.createElement('span');
  newTaskIcon.classList.add('material-symbols-outlined');
  newTaskIcon.innerText = ' add_circle ';
  newToDoButton.append(newTaskIcon);
}

//? **`` Creates the form that takes all the todo info
function makeForm() {
  const formWrapper = document.createElement('div');
  formWrapper.classList.add('form-wrapper');
  content.prepend(formWrapper);

  const form = document.createElement('form');
  form.setAttribute('action', '');
  form.setAttribute('method', 'get');
  formWrapper.prepend(form);

  //? **`` Dropdown select
  const dropdownWrapper = document.createElement('div');
  dropdownWrapper.classList.add('input-wrapper');
  form.append(dropdownWrapper);

  const dropdownProjectMenu = document.createElement('select');
  dropdownProjectMenu.setAttribute('id', 'dropdownProjectMenu');
  dropdownProjectMenu.setAttribute('name', 'dropdownProjectMenu');

  const dropdownProjectMenuLabel = document.createElement('label');
  dropdownProjectMenuLabel.innerText = 'Assign To Project';
  dropdownProjectMenuLabel.setAttribute('for', 'dropdownProjectMenu');
  dropdownWrapper.append(dropdownProjectMenuLabel, dropdownProjectMenu);

  const defaultOption = document.createElement('option');
  defaultOption.setAttribute('value', 'Default Project');
  defaultOption.innerText = 'Default Project';
  dropdownProjectMenu.appendChild(defaultOption);

  //? **`` Create new project
  const newProjectWrapper = document.createElement('div');
  newProjectWrapper.classList.add('input-wrapper');
  form.append(newProjectWrapper);

  const newProjectTitle = document.createElement('input');
  newProjectTitle.setAttribute('type', 'text');
  newProjectTitle.setAttribute('id', 'newproject');
  newProjectTitle.setAttribute('name', 'newproject');
  const newProjectLabel = document.createElement('label');
  newProjectLabel.innerText = 'Or Create New Project';
  newProjectLabel.setAttribute('for', 'newproject');
  newProjectWrapper.append(newProjectLabel, newProjectTitle);

  const projectButton = document.createElement('button');
  projectButton.innerText = 'Create New Project';
  projectButton.classList.add('project-button');
  form.append(projectButton);

  //? **`` New todo title
  const todoTaskWrapper = document.createElement('div');
  todoTaskWrapper.classList.add('input-wrapper');
  form.append(todoTaskWrapper);

  const todoTask = document.createElement('input');
  todoTask.setAttribute('type', 'text');
  todoTask.setAttribute('id', 'task');
  todoTask.setAttribute('name', 'task');
  const taskLabel = document.createElement('label');
  taskLabel.innerText = 'ToDo Task';
  taskLabel.setAttribute('for', 'task');
  todoTaskWrapper.append(taskLabel, todoTask);

  //? **`` Due date
  const todoDateWrapper = document.createElement('div');
  todoDateWrapper.classList.add('input-wrapper');
  form.append(todoDateWrapper);

  const todoDate = document.createElement('input');
  todoDate.setAttribute('type', 'date');
  todoDate.setAttribute('id', 'date');
  todoDate.setAttribute('name', 'date');
  const dateLabel = document.createElement('label');
  dateLabel.innerText = 'Due Date';
  dateLabel.setAttribute('for', 'date');
  todoDateWrapper.append(dateLabel, todoDate);

  //? **`` Priority
  const priorityWrapper = document.createElement('div');
  priorityWrapper.classList.add('priority-wrapper');
  form.append(priorityWrapper);

  const p1Wrapper = document.createElement('div');
  p1Wrapper.classList.add('p-wrapper');
  priorityWrapper.append(p1Wrapper);

  const radioPriority1 = document.createElement('input');
  radioPriority1.setAttribute('type', 'radio');
  radioPriority1.setAttribute('id', 'P1');
  radioPriority1.setAttribute('name', 'priority');
  radioPriority1.setAttribute('value', 'P1');
  const labelPriority1 = document.createElement('label');
  labelPriority1.innerText = 'P1';
  labelPriority1.setAttribute('for', 'P1');
  p1Wrapper.append(labelPriority1, radioPriority1);

  const p2Wrapper = document.createElement('div');
  p2Wrapper.classList.add('p-wrapper');
  priorityWrapper.append(p2Wrapper);

  const radioPriority2 = document.createElement('input');
  radioPriority2.setAttribute('type', 'radio');
  radioPriority2.setAttribute('id', 'P2');
  radioPriority2.setAttribute('name', 'priority');
  radioPriority2.setAttribute('value', 'P2');
  const labelPriority2 = document.createElement('label');
  labelPriority2.innerText = 'P2';
  labelPriority2.setAttribute('for', 'P2');
  p2Wrapper.append(labelPriority2, radioPriority2);

  const p3Wrapper = document.createElement('div');
  p3Wrapper.classList.add('p-wrapper');
  priorityWrapper.append(p3Wrapper);

  const radioPriority3 = document.createElement('input');
  radioPriority3.setAttribute('type', 'radio');
  radioPriority3.setAttribute('id', 'P3');
  radioPriority3.setAttribute('name', 'priority');
  radioPriority3.setAttribute('value', 'P3');
  const labelPriority3 = document.createElement('label');
  labelPriority3.innerText = 'P3';
  labelPriority3.setAttribute('for', 'P3');
  p3Wrapper.append(labelPriority3, radioPriority3);

  const p4Wrapper = document.createElement('div');
  p4Wrapper.classList.add('p-wrapper');
  priorityWrapper.append(p4Wrapper);

  const radioPriority4 = document.createElement('input');
  radioPriority4.setAttribute('type', 'radio');
  radioPriority4.setAttribute('id', 'P4');
  radioPriority4.setAttribute('name', 'priority');
  radioPriority4.setAttribute('value', 'P4');
  radioPriority4.setAttribute('checked', '');
  const labelPriority4 = document.createElement('label');
  labelPriority4.innerText = 'P4';
  labelPriority4.setAttribute('for', 'P4');
  p4Wrapper.append(labelPriority4, radioPriority4);

  //? **`` Additional notes
  const notesWrapper = document.createElement('div');
  notesWrapper.classList.add('input-wrapper');
  form.append(notesWrapper);

  const notes = document.createElement('textarea');
  notes.setAttribute('id', 'notes');
  notes.setAttribute('name', 'notes');
  const notesLabel = document.createElement('label');
  notesLabel.innerText = 'Notes';
  notesLabel.setAttribute('for', 'notes');
  notesWrapper.append(notesLabel, notes);

  //? **`` Create new todo button
  const todoButton = document.createElement('button');
  todoButton.innerText = 'Add ToDo';
  todoButton.classList.add('todo-button');

  //? **`` Go back button
  const button = document.createElement('button');
  button.innerText = 'Go Back';
  button.classList.add('back');

  form.append(todoButton, button);

  populateDropdownMenu();
  backButtonLogic();
}

//? **`` Loops through the array and for each object it creates a div, puts the task name on it, adds a class, sets the object's ID number to the element ID, and displays it
function displayTask(array) {
  array.map((obj) => {
    const div = document.createElement('div');
    div.innerText = `${obj.task}`;
    div.classList.add('task');
    div.setAttribute('id', obj.idNumber);
    content.appendChild(div);
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

function removeHeader() {
  while (header.firstChild) {
    header.removeChild(header.firstChild);
  }
}
