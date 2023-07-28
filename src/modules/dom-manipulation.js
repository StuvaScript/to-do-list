import { populateDropdownMenu } from '../index';

export {
  createToDoItemButton,
  makeForm,
  createProjectParagraphs,
  createToDoParagraphs,
  removeParagraphs,
};

const content = document.querySelector('.content');

function createToDoItemButton() {
  const newToDoButton = document.createElement('button');
  newToDoButton.innerText = 'Create ToDo Item';
  newToDoButton.classList.add('new-todo-button');
  content.prepend(newToDoButton);
}

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

function createProjectParagraphs(projectValues) {
  const paragraph = document.createElement('p');
  paragraph.innerText = `${projectValues}`;
  content.appendChild(paragraph);
}

function createToDoParagraphs(objectKey, objectValue) {
  const paragraph = document.createElement('p');
  paragraph.innerText = `${objectKey}: ${objectValue}`;
  content.appendChild(paragraph);
}

function removeParagraphs() {
  document.querySelectorAll('p').forEach((para) => para.remove());
}
