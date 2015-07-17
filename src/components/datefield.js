import Container from './container.js';
import Spectangular from '../spectangular.js';

export default class Datefield extends Container {
  get clickTargetSelector() {
    if (this.impl.clickTargetSelector !== undefined) {
      return this.impl.clickTargetSelector;
    }

    return null;
  }

  setValue(value) {
    var componentEl = this.componentEl;
    var clickTargetSelector = this.clickTargetSelector;
    var clickTargetEl = componentEl;

    if (clickTargetSelector) {
      clickTargetEl = componentEl.element(by.css(clickTargetSelector));
    }
    clickTargetEl.click();

    Spectangular.datepicker({
      datefield: this
    }).setDate(value);

    this.bodyEl.click();

    return this;
  }
}
