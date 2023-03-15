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

let projectArray = [];

// --- FUNCTIONS ---

function makeForm() {
  const form = document.createElement('form');
  form.setAttribute('action', '');
  form.setAttribute('method', 'get');
  content.appendChild(form);

  const inputTitle = document.createElement('input');
  form.appendChild(inputTitle);
  inputTitle.setAttribute('type', 'text');
  inputTitle.setAttribute('id', 'title');
  inputTitle.setAttribute('name', 'title');
  const titleLabel = document.createElement('label');
  titleLabel.innerText = 'Project Title';
  titleLabel.setAttribute('for', 'title');
  form.appendChild(titleLabel);

  createBreak(titleLabel);

  const inputDescription = document.createElement('input');
  form.appendChild(inputDescription);
  inputDescription.setAttribute('type', 'text');
  inputDescription.setAttribute('id', 'description');
  inputDescription.setAttribute('name', 'description');
  const descriptionLabel = document.createElement('label');
  descriptionLabel.innerText = 'Project Description';
  descriptionLabel.setAttribute('for', 'description');
  form.appendChild(descriptionLabel);

  createBreak(descriptionLabel);

  const inputDate = document.createElement('input');
  form.appendChild(inputDate);
  inputDate.setAttribute('type', 'date');
  inputDate.setAttribute('id', 'date');
  inputDate.setAttribute('name', 'date');
  const dateLabel = document.createElement('label');
  dateLabel.innerText = 'Project Date';
  dateLabel.setAttribute('for', 'date');
  form.appendChild(dateLabel);

  createBreak(dateLabel);

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
  const labelPriority4 = document.createElement('label');
  labelPriority4.innerText = 'P4';
  labelPriority4.setAttribute('for', 'P4');
  form.appendChild(labelPriority4);

  createBreak(labelPriority4);

  const inputButton = document.createElement('button');
  inputButton.innerText = 'Add Project';
  inputButton.classList.add('form-button');
  form.appendChild(inputButton);
}

makeForm();

function createBreak(element) {
  const br = document.createElement('br');
  element.appendChild(br);
}

function displayProjects() {
  // Loops through the array and grabs each value and it's index position
  projectArray.forEach((currentValue, index) => {
    // Loops through each object in the array and displays each key/value pair
    for (const [key, value] of Object.entries(currentValue)) {
      console.log(`${key}: ${value}`);
      createParagraph(key, value);
    }
    console.log(index);
  });
}

function createParagraph(key, value) {
  let paragraph = document.createElement('p');
  paragraph.innerText = `${key}: ${value}`;
  content.appendChild(paragraph);
}

function removeParagraphs() {
  document.querySelectorAll('p').forEach((e) => e.remove());
}

function addProjectToArray(project) {
  projectArray.unshift(project);
}

function createProject(title, description, date, priority) {
  return { title, description, date, priority };
}

function getCheckedRadios(priority) {
  document.querySelectorAll('[name="priority"]').forEach((radio) => {
    if (radio.checked) {
      priority = radio.value;
      console.log(priority);
    }
  });
}

// --- PROJECT LOGIC ---

document.querySelector('.form-button').addEventListener('click', (e) => {
  e.preventDefault();
  let title = document.querySelector('#title').value;
  let description = document.querySelector('#description').value;
  let date = document.querySelector('#date').value;

  let priority;
  getCheckedRadios(priority);
  let newProject = createProject(title, description, date, priority);
  console.log(newProject);

  addProjectToArray(newProject);
  removeParagraphs();
  displayProjects();
});
