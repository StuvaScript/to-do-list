// import projects from './modules/projects.js';
// import projectContainer from './modules/project-container.js';
// import projectForm from './modules/project-form.js';
// // import projectInfo from './modules/project-info.js';
// // import eventHandler from './modules/event-handler.js';
// import './normalize.css';
// import './style.css';

const { doc } = require('prettier');

// const content = document.querySelector('.content').children;

// projectContainer();
// projects();
// projects();
// projects();
// projects();

// const plus = document.querySelector('.plus > img');
// plus.addEventListener('click', (e) => {
//   content[0].remove();
//   projectForm();
// });

// const cancel = document.querySelector('.cancel-button');
// console.log(cancel);
// cancel.addEventListener('click', (e) => {
//   console.log(cancel);
//   content[0].remove();
//   projectContainer();
//   projects();
// });

// Trying to get the html elements to properly erase and display when clicking buttons on screen.

// Will need to change mode to production mode after the project is finished.
// Read this page => https://webpack.js.org/guides/production/

// Remember to change the source branch on Github in order for your
// page to be displayed on Github. Check the very bottom
// of the Assignments part => https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page

// =======================================================================================================================================
// =======================================================================================================================================

// Everything above this line is my old code

const content = document.querySelector('.content');

const todoArray = [];

makeForm();

// --- 'ADD TODO' BUTTON LOGIC ---

document.querySelector('.todo-button').addEventListener('click', (e) => {
  e.preventDefault();
  const project = document.querySelector('#dropdownProjectMenu');
  let title = document.querySelector('#title');
  const description = document.querySelector('#description');
  const date = document.querySelector('#date');
  getCheckedRadio();
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
  // createDefaultProject();
  removeParagraphs();
  displayToDo();
  resetFormFields(project, title, description, date, notes);
});

// --- 'ADD NEW PROJECT' BUTTON LOGIC ---

document.querySelector('.project-button').addEventListener('click', (e) => {
  e.preventDefault();
  const newProject = document.querySelector('#newproject').value;

  // createNewProject(newProject);
  updateOptions(newProject);
});

// --- FUNCTIONS ---

function resetFormFields(project, title, description, date, notes) {
  project.value = document.querySelector('#dropdownProjectMenu > option').value;
  title.value = '';
  description.value = '';
  date.value = '';
  notes.value = '';
  // resets radio buttons
  document.querySelector('#P4').checked = true;
  // resets 'create new project' input field
  document.querySelector('#newproject').value = '';
}

function makeForm() {
  const form = document.createElement('form');
  form.setAttribute('action', '');
  form.setAttribute('method', 'get');
  content.appendChild(form);

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
  projectButton.innerText = 'Add New Project';
  projectButton.classList.add('project-button');
  form.appendChild(projectButton);

  createBreak(form);

  const todoTitle = document.createElement('input');
  form.appendChild(todoTitle);
  todoTitle.setAttribute('type', 'text');
  todoTitle.setAttribute('id', 'title');
  todoTitle.setAttribute('name', 'title');
  const titleLabel = document.createElement('label');
  titleLabel.innerText = 'ToDo Title';
  titleLabel.setAttribute('for', 'title');
  form.appendChild(titleLabel);

  createBreak(form);

  const todoDescription = document.createElement('input');
  form.appendChild(todoDescription);
  todoDescription.setAttribute('type', 'text');
  todoDescription.setAttribute('id', 'description');
  todoDescription.setAttribute('name', 'description');
  const descriptionLabel = document.createElement('label');
  descriptionLabel.innerText = 'ToDo Description';
  descriptionLabel.setAttribute('for', 'description');
  form.appendChild(descriptionLabel);

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

function createBreak(element) {
  const br = document.createElement('br');
  element.appendChild(br);
}

function updateOptions(newProject) {
  const getDropdownMenu = document.querySelector('#dropdownProjectMenu');
  const option = document.createElement('option');
  option.setAttribute('value', newProject);
  option.innerText = newProject;
  getDropdownMenu.appendChild(option);
}

// function clearOptions() {
//   document.querySelectorAll('option').forEach((option) => {
//     option.remove();
//   });
// }

function displayToDo() {
  // Loops through the array and grabs each value and it's index position
  todoArray.forEach((currentValue, index) => {
    console.log(index + ' ' + Object.values(currentValue)[0]);
    // Loops through each object in the array and displays each key/value pair
    for (const [objectKey, objectValue] of Object.entries(currentValue)) {
      // console.log(`${key}: ${value}`);
      createParagraph(objectKey, objectValue);
    }
  });
}

function createParagraph(objectKey, objectValue) {
  const paragraph = document.createElement('p');
  paragraph.innerText = `${objectKey}: ${objectValue}`;

  // todoArray.forEach((currentValue, index) => {
  //   console.log(index + ' ' + Object.values(currentValue)[0]);

  // }

  content.appendChild(paragraph);
}

function removeParagraphs() {
  document.querySelectorAll('p').forEach((para) => para.remove());
}

function addToDoToArray(newTodo) {
  todoArray.unshift(newTodo);
}

function createToDo(project, title, description, date, priority, notes) {
  return { project, title, description, date, priority, notes };
}

function getCheckedRadio() {
  document.querySelectorAll('[name="priority"]').forEach((radio) => {
    if (radio.checked) {
      return (priority = radio.value);
    }
  });
}

// function createDefaultProject() {
//   if (!document.querySelector('#default-project')) {
//     const defaultProject = document.createElement('div');
//     defaultProject.setAttribute('id', 'default-project');
//     defaultProject.classList.add('project');
//     defaultProject.innerText = 'Default Project';
//     content.appendChild(defaultProject);
//   }
// }

// function createNewProject(newProject) {
//   if (newProject) {
//     const newProjectDiv = document.createElement('div');
//     newProjectDiv.classList.add('project');
//     newProjectDiv.innerText = newProject;
//     content.appendChild(newProjectDiv);
//   }
// }
