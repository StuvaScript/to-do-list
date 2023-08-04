import { populateDropdownMenu, getTodaysDate, todoArray } from '../index';

export {
  createToDoItemButton,
  makeForm,
  displayProjectName,
  displayToDoInfo,
  displayTodaysDate,
  removeChildrenOfContent,
  getProjectName,
  displayToDo,
  updateOptions,
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
    //? **`` Gets the first value in the object (in this case, it's the project name)
    const projectName = Object.values(currentValue)[0];
    console.log('projectName');
    console.log(projectName);
    //? **`` Displays the project name
    displayProjectName(projectName);
  });
}

//? **`` Displays all the form values
function displayToDo() {
  //? **`` Loops through the array and grabs each value and it's index position
  todoArray.forEach((currentValue, index) => {
    //? **`` Loops through each object in the array and displays each key/value pair
    for (const [objectKey, objectValue] of Object.entries(currentValue)) {
      displayToDoInfo(objectKey, objectValue);
    }
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
//? **`` Takes the project name as an argument and displays it
function displayProjectName(projectName) {
  const paragraph = document.createElement('p');
  paragraph.innerText = `${projectName}`;
  content.appendChild(paragraph);
}
//? **`` Displays the object key/value pair (in this case, its the form fields and their values)
function displayToDoInfo(objectKey, objectValue) {
  const paragraph = document.createElement('p');
  paragraph.innerText = `${objectKey}: ${objectValue}`;
  content.appendChild(paragraph);
}

//? **`` Removes all the elements within the main "content" class element
function removeChildrenOfContent() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}
