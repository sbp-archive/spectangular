import Component from './component.js';

export default class Checkbox extends Component {
  setValue(value) {
    this.isChecked(this.componentEl).then((checked) => {
      if (value !== checked) {
        this.componentEl.click();
      }
    });
  }

  isChecked(checkboxEl) {
    if (this.impl.isChecked === undefined) {
      throw 'The library should implement isChecked(checkboxEl) on its Checkbox implementation';
    }
    return this.impl.isChecked(checkboxEl);
  }
}
