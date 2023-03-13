import projects from './projects.js';
import projectContainer from './project-container.js';

let projectArray = [];

function buildProject(name, urgency) {
  return { name, urgency };
}

// export default function cancelForm() {
//   const cancel = document.querySelector('.cancel-button');
//   cancel.addEventListener('click', (e) => {
//     console.log('yo mama');
//     const content = document.querySelector('.content').children;
//     content[0].remove();
//     projectContainer();
//     projects();
//   });
// }
