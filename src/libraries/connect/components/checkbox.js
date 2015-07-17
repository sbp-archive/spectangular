import Component from './component.js';

export class Checkbox extends Component {
  isChecked(checkboxEl) {
    return checkboxEl.getAttribute('class').then((classVal) => {
      return (/material-checkbox-checked/).test(classVal);
    });
  }
}

export default Checkbox;
