import Component from './component.js';

export default class Textfield extends Component {
  setValue(value) {
    this.inputEl.clear();
    this.inputEl.sendKeys(value);
    return this;
  }

  get inputEl() {
    if (this.impl.getInputEl !== undefined) {
      return this.impl.getInputEl(this.componentEl);
    }
    return this.componentEl;
  }
}
