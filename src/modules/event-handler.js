import projectContainer from './project-container.js';
import projects from './projects.js';
import projectForm from './project-form.js';
import projectInfo from './project-info.js';

export default function events() {
  const content = document.querySelector('.content').children;

  projectContainer();
  projects();
  projects();
  projects();
  projects();

  const plus = document.querySelector('.plus > img');
  plus.addEventListener('click', (e) => {
    content[0].remove();
    projectForm();
    // projectInfo();
  });

  const cancel = document.querySelector('.cancel-button');
  cancel.addEventListener('click', (e) => {
    content[0].remove();
    projectContainer();
    projects();
  });
}
