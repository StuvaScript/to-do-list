import projects from './modules/projects.js';
import projectContainer from './modules/project-container.js';
import projectForm from './modules/project-form.js';
import './normalize.css';
import './style.css';

projectContainer();
projects();
projects();
projects();
projects();

const plus = document.querySelector('.plus > img');
plus.addEventListener('click', (e) => {
  const content = document.querySelector('.content').children;
  content[0].remove();
  projectForm();
});

// You just created the main project container importing it and creating it in its own javascript module.
// Next you need to make a module that creates the individual project html and import it.
// Then you need to make the Create Project Form and import with javascript module. Wiping the other module out temporarily.
// Then you need to make the logic of entering info populate a new project and slap it on the main page and bringing the main project container back into the scene.

// Still trying to figure out how to dynamically count the number of projects and add a data number attribute to them.

// MAYBE!! If statement. If there are no projects, append project to container. Otherwise append new project behind older project.
// Or maybe even length - 1 position?

// Will need to change mode to production mode after the project is finished.
// Read this page => https://webpack.js.org/guides/production/

// Remember to change the source branch on Github in order for your
// page to be displayed on Github. Check the very bottom
// of the Assignments part => https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page
