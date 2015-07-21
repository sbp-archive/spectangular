import Component from './component.js';

export class Checkbox extends Component {
  isChecked(checkboxEl) {
    return checkboxEl.getAttribute('aria-checked').then((classVal) => {
      return (/true/).test(classVal);
    });
  }
}

export default Checkbox;
