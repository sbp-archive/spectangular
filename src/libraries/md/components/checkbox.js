import Component from './component.js';

export class Checkbox extends Component {
  isChecked(checkboxEl) {
    return checkboxEl.getAttribute('class').then((classVal) => {
      return (/md-checked/).test(classVal);
    });
  }
}

export default Checkbox;
