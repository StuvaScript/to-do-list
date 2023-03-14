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
  let form = document.createElement('form');
  form.setAttribute('action', '');
  form.setAttribute('method', 'get');
  content.appendChild(form);

  let inputTitle = document.createElement('input');
  form.appendChild(inputTitle);
  inputTitle.setAttribute('type', 'text');
  inputTitle.setAttribute('id', 'title');
  inputTitle.setAttribute('name', 'title');
  let titleLabel = document.createElement('label');
  titleLabel.innerText = 'Project Title';
  titleLabel.setAttribute('for', 'title');
  form.appendChild(titleLabel);

  let inputDescription = document.createElement('input');
  form.appendChild(inputDescription);
  inputDescription.setAttribute('type', 'text');
  inputDescription.setAttribute('id', 'description');
  inputDescription.setAttribute('name', 'description');
  let descriptionLabel = document.createElement('label');
  descriptionLabel.innerText = 'Project Description';
  descriptionLabel.setAttribute('for', 'description');
  form.appendChild(descriptionLabel);

  let inputDate = document.createElement('input');
  form.appendChild(inputDate);
  inputDate.setAttribute('type', 'date');
  inputDate.setAttribute('id', 'date');
  inputDate.setAttribute('name', 'date');
  let dateLabel = document.createElement('label');
  dateLabel.innerText = 'Project Date';
  dateLabel.setAttribute('for', 'date');
  form.appendChild(dateLabel);

  let inputButton = document.createElement('button');
  inputButton.innerText = 'Add Project';
  inputButton.classList.add('form-button');
  form.appendChild(inputButton);
}

makeForm();

// Maybe split this big mother up!!
function displayProjects() {
  // Removing displayed info
  removeParagraphs();
  // Loops through the array and grabs each value and it's index position
  projectArray.forEach((currentValue, index) => {
    // Loops through each object in the array and displays each key/value pair
    for (const [key, value] of Object.entries(currentValue)) {
      console.log(`${key}: ${value}`);
      // Creating the displayed info
      let paragraph = document.createElement('p');
      paragraph.innerText = `${key}: ${value}`;
      content.appendChild(paragraph);
    }
    console.log(index);
  });
}

function removeParagraphs() {
  document.querySelectorAll('p').forEach((e) => e.remove());
}

function addProjectToArray(project) {
  projectArray.unshift(project);
}

function createProject(title, description, date) {
  return { title, description, date };
}

// --- PROJECT LOGIC ---

document.querySelector('.form-button').addEventListener('click', (e) => {
  e.preventDefault();
  let title = document.querySelector('#title').value;
  let description = document.querySelector('#description').value;
  let date = document.querySelector('#date').value;

  let newProject = createProject(title, description, date);
  console.log(newProject);

  addProjectToArray(newProject);

  displayProjects();
});
