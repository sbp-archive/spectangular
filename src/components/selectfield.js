import Component from './component.js';
import Spectangular from '../spectangular.js';

export default class Selectfield extends Component {
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
      clickTargetEl =  componentEl.element(by.css(clickTargetSelector));
    }
    clickTargetEl.click();

    Spectangular.select().clickItem({text: value});
    
    return this;
  }
}
