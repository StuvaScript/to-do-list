import plusSign from '../icons/plus.png';

export default function projectContainer() {
  const innerObject = {
    init() {
      this.createContainer();
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
    createContainer() {
      // manipulateDOM(element, innerText, className, appendTo, ...attributes) {
      this.div = this.manipulateDOM('div', '', 'project-container', '.content');
      this.div = this.manipulateDOM(
        'div',
        '',
        'projects-title',
        '.project-container'
      );
      this.para = this.manipulateDOM('p', 'Projects', '', '.projects-title');
      this.div = this.manipulateDOM('div', '', 'plus', '.projects-title');
      this.img = this.manipulateDOM(
        'img',
        '',
        '',
        '.plus',
        'src',
        plusSign,
        'alt',
        'Add projects'
      );
    },
  };

  innerObject.init();

  return { innerObject };
}
