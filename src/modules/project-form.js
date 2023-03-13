const content = document.querySelector('.content').children;

export default function projectForm() {
  const innerObject = {
    init() {
      this.createForm();
      this.addProject();
      this.cancelButton();
    },
    manipulateDOM(element, innerText, className, appendTo, ...attributes) {
      // You can add up to four class names, all inside one set of single quotes, separated by spaces.
      // Attributes can just be added in their own single quotes, separated by commas.
      // First the attribute, followed by its value.

      const newElement = document.createElement(element);
      innerText !== '' ? (newElement.innerText = innerText) : '';
      if (className !== '') {
        const classArray = className.split(' ');
        switch (classArray.length) {
          case 1:
            newElement.classList.add(classArray[0]);
            break;
          case 2:
            newElement.classList.add(classArray[0], classArray[1]);
            break;
          case 3:
            newElement.classList.add(
              classArray[0],
              classArray[1],
              classArray[2]
            );
            break;
          case 4:
            newElement.classList.add(
              classArray[0],
              classArray[1],
              classArray[2],
              classArray[3]
            );
            break;
          default:
        }
      }
      document.querySelector(appendTo).appendChild(newElement);
      if (attributes.length !== 0) {
        const sets = attributes.length / 2;
        let attPosition = 0;
        let valPosition = 1;
        for (let i = 0; i < sets; i++) {
          newElement.setAttribute(
            `${attributes[attPosition]}`,
            `${attributes[valPosition]}`
          );
          attPosition += 2;
          valPosition += 2;
        }
      }
    },
    createForm() {
      // manipulateDOM(element, innerText, className, appendTo, ...attributes) {
      this.div = this.manipulateDOM(
        'div',
        '',
        'add-project-container',
        '.content'
      );
      this.form = this.manipulateDOM(
        'form',
        '',
        'add-project-form',
        '.add-project-container',
        'action',
        '',
        'method',
        'get'
      );
      this.div = this.manipulateDOM(
        'div',
        '',
        'label-div',
        '.add-project-form'
      );
      this.label = this.manipulateDOM(
        'label',
        'Project Name',
        'add-project-title',
        '.label-div',
        'for',
        'title'
      );
      this.div = this.manipulateDOM(
        'div',
        '',
        'input-div',
        '.add-project-form'
      );
      this.input = this.manipulateDOM(
        'input',
        '',
        '',
        '.input-div',
        'type',
        'text',
        'id',
        'title',
        'name',
        'title',
        'required',
        ''
      );
      this.div = this.manipulateDOM(
        'div',
        '',
        'form-radio',
        '.add-project-form'
      );
      this.span = this.manipulateDOM('span', '', 'span1', '.form-radio');
      this.input = this.manipulateDOM(
        'input',
        '',
        '',
        '.span1',
        'type',
        'radio',
        'name',
        'urgency',
        'id',
        'non-urgent',
        'checked',
        ''
      );
      this.label = this.manipulateDOM(
        'label',
        'Non Urgent',
        '',
        '.span1',
        'for',
        'non-urgent'
      );
      this.span = this.manipulateDOM('span', '', 'span2', '.form-radio');
      this.input = this.manipulateDOM(
        'input',
        '',
        '',
        '.span2',
        'type',
        'radio',
        'name',
        'urgency',
        'id',
        'mild-urgent'
      );
      this.label = this.manipulateDOM(
        'label',
        'Mildly Urgent',
        '',
        '.span2',
        'for',
        'mild-urgent'
      );
      this.span = this.manipulateDOM('span', '', 'span3', '.form-radio');
      this.input = this.manipulateDOM(
        'input',
        '',
        '',
        '.span3',
        'type',
        'radio',
        'name',
        'urgency',
        'id',
        'urgent'
      );
      this.label = this.manipulateDOM(
        'label',
        'Urgent',
        '',
        '.span3',
        'for',
        'urgent'
      );
      this.span = this.manipulateDOM('span', '', 'span4', '.form-radio');
      this.input = this.manipulateDOM(
        'input',
        '',
        '',
        '.span4',
        'type',
        'radio',
        'name',
        'urgency',
        'id',
        'very-urgent'
      );
      this.label = this.manipulateDOM(
        'label',
        'Very Urgent',
        '',
        '.span4',
        'for',
        'very-urgent'
      );
      this.div = this.manipulateDOM(
        'div',
        '',
        'button-div',
        '.add-project-form'
      );
      this.button = this.manipulateDOM(
        'button',
        'Add',
        'add-button',
        '.button-div'
      );
      this.button = this.manipulateDOM(
        'button',
        'Cancel',
        'cancel-button',
        '.button-div',
        'type',
        'button'
      );
    },
    addProject() {
      const addButton = document.querySelector('.add-button');
      addButton.addEventListener('click', (e) => {
        console.log('ballzack');
      });
    },
    cancelButton() {
      const cancel = document.querySelector('.cancel-button');
      cancel.addEventListener('click', (e) => {
        console.log(cancel);
        content[0].remove();
        projectContainer();
        projects();
      });
    },
  };

  innerObject.init();

  return { innerObject };
}
