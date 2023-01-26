import trashIcon from '../icons/trash.png';

export default function makeProject() {
  let firstDiv = document.createElement('div');
  firstDiv.classList.add('projects');

  let secondDiv = document.createElement('div');
  firstDiv.appendChild(secondDiv);

  let input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.setAttribute('id', 'project');
  secondDiv.appendChild(input);

  let label = document.createElement('label');
  label.setAttribute('for', 'project');
  label.textContent = 'Punch babies';
  secondDiv.appendChild(label);

  let thirdDiv = document.createElement('div');
  firstDiv.appendChild(thirdDiv);

  let img = document.createElement('img');
  img.setAttribute('src', trashIcon);
  img.setAttribute('alt', 'Delete project');
  thirdDiv.appendChild(img);

  let projectContainer = document.querySelector('.project-container');
  projectContainer.appendChild(firstDiv);
}
