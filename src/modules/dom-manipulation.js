import { populateDropdownMenu, getTodaysDate, todoArray } from '../index';

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
};

const content = document.querySelector('.content');

//? **`` Creates a new <option> element and sets it as the new project value
function updateOptions(newProjectField) {
  const getDropdownMenu = document.querySelector('#dropdownProjectMenu');
  const makeOption = document.createElement('option');

  makeOption.setAttribute('value', newProjectField.value);
  makeOption.innerText = newProjectField.value;
  getDropdownMenu.appendChild(makeOption);
}

//? **`` Gets the project name and displays it
function getProjectName() {
  //? **`` Loops through the array and grabs each value and it's index position
  todoArray.forEach((currentValue, index) => {
    //? **`` Gets the value in the object (in this case, it's the project name)
    const projectName = Object.values(currentValue)[0];
    console.log('projectName');
    console.log(projectName);
    //! The function below is now unique to displaying only tasks.
    //? **`` Displays the project name
    displayTask(projectName);
    //! ********************************************************
  });
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
  form.appendChild(dropdownProjectMenu);
  dropdownProjectMenu.setAttribute('id', 'dropdownProjectMenu');
  dropdownProjectMenu.setAttribute('name', 'dropdownProjectMenu');
  const dropdownProjectMenuLabel = document.createElement('label');
  dropdownProjectMenuLabel.innerText = 'Assign To Project';
  dropdownProjectMenuLabel.setAttribute('for', 'dropdownProjectMenu');
  form.appendChild(dropdownProjectMenuLabel);

  const defaultOption = document.createElement('option');
  dropdownProjectMenu.appendChild(defaultOption);
  defaultOption.setAttribute('value', 'default-project');
  defaultOption.innerText = 'Default Project';

  populateDropdownMenu();

  createBreak(form);

  const newProjectTitle = document.createElement('input');
  form.appendChild(newProjectTitle);
  newProjectTitle.setAttribute('type', 'text');
  newProjectTitle.setAttribute('id', 'newproject');
  newProjectTitle.setAttribute('name', 'newproject');
  const newProjectLabel = document.createElement('label');
  newProjectLabel.innerText = 'Or Create New Project';
  newProjectLabel.setAttribute('for', 'newproject');
  form.appendChild(newProjectLabel);

  createBreak(form);

  const projectButton = document.createElement('button');
  projectButton.innerText = 'Create New Project';
  projectButton.classList.add('project-button');
  form.appendChild(projectButton);

  createBreak(form);

  const todoTask = document.createElement('input');
  form.appendChild(todoTask);
  todoTask.setAttribute('type', 'text');
  todoTask.setAttribute('id', 'task');
  todoTask.setAttribute('name', 'task');
  const taskLabel = document.createElement('label');
  taskLabel.innerText = 'ToDo Task';
  taskLabel.setAttribute('for', 'task');
  form.appendChild(taskLabel);

  createBreak(form);

  const todoDate = document.createElement('input');
  form.appendChild(todoDate);
  todoDate.setAttribute('type', 'date');
  todoDate.setAttribute('id', 'date');
  todoDate.setAttribute('name', 'date');
  const dateLabel = document.createElement('label');
  dateLabel.innerText = 'Due Date';
  dateLabel.setAttribute('for', 'date');
  form.appendChild(dateLabel);

  createBreak(form);

  const radioPriority1 = document.createElement('input');
  form.appendChild(radioPriority1);
  radioPriority1.setAttribute('type', 'radio');
  radioPriority1.setAttribute('id', 'P1');
  radioPriority1.setAttribute('name', 'priority');
  radioPriority1.setAttribute('value', 'P1');
  const labelPriority1 = document.createElement('label');
  labelPriority1.innerText = 'P1';
  labelPriority1.setAttribute('for', 'P1');
  form.appendChild(labelPriority1);

  const radioPriority2 = document.createElement('input');
  form.appendChild(radioPriority2);
  radioPriority2.setAttribute('type', 'radio');
  radioPriority2.setAttribute('id', 'P2');
  radioPriority2.setAttribute('name', 'priority');
  radioPriority2.setAttribute('value', 'P2');
  const labelPriority2 = document.createElement('label');
  labelPriority2.innerText = 'P2';
  labelPriority2.setAttribute('for', 'P2');
  form.appendChild(labelPriority2);

  const radioPriority3 = document.createElement('input');
  form.appendChild(radioPriority3);
  radioPriority3.setAttribute('type', 'radio');
  radioPriority3.setAttribute('id', 'P3');
  radioPriority3.setAttribute('name', 'priority');
  radioPriority3.setAttribute('value', 'P3');
  const labelPriority3 = document.createElement('label');
  labelPriority3.innerText = 'P3';
  labelPriority3.setAttribute('for', 'P3');
  form.appendChild(labelPriority3);

  const radioPriority4 = document.createElement('input');
  form.appendChild(radioPriority4);
  radioPriority4.setAttribute('type', 'radio');
  radioPriority4.setAttribute('id', 'P4');
  radioPriority4.setAttribute('name', 'priority');
  radioPriority4.setAttribute('value', 'P4');
  radioPriority4.setAttribute('checked', '');
  const labelPriority4 = document.createElement('label');
  labelPriority4.innerText = 'P4';
  labelPriority4.setAttribute('for', 'P4');
  form.appendChild(labelPriority4);

  createBreak(form);

  const notes = document.createElement('textarea');
  form.appendChild(notes);
  notes.setAttribute('id', 'notes');
  notes.setAttribute('name', 'notes');
  const notesLabel = document.createElement('label');
  notesLabel.innerText = 'Notes';
  notesLabel.setAttribute('for', 'notes');
  form.appendChild(notesLabel);

  createBreak(form);

  const todoButton = document.createElement('button');
  todoButton.innerText = 'Add ToDo';
  todoButton.classList.add('todo-button');
  form.appendChild(todoButton);
}
//? **`` Simply creates a <br> element to be used in the form
function createBreak(element) {
  const br = document.createElement('br');
  element.appendChild(br);
}
//? **`` Takes the name as an argument, creates a class, adds a unique ID, and displays it
function displayTask(taskName, idNumber) {
  const button = document.createElement('button');
  button.innerText = `${taskName}`;
  button.classList.add('task');
  button.setAttribute('id', idNumber);
  content.appendChild(button);
}
//? **`` Displays the object key/value pair except for the ID Number
function displayToDoInfo(objectKey, objectValue) {
  if (objectKey !== 'idNumber') {
    const paragraph = document.createElement('p');
    paragraph.innerText = `${objectKey}: ${objectValue}`;
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
