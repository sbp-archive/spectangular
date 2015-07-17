import Component from './component.js';
import Spectangular from '../spectangular.js';

export default class Container extends Component {
  clickComponent(config) {
    if (!config.selector) {
      throw `When you click a component inside of a container, a config with selector is expected`;
    }

    Object.assign(config, {
      rootEl: this.componentEl
    });

    Spectangular.component(config).click();
    return this;
  }

  clickButton(config = {}) {
    if (!config.text && !config.selector) {
      throw `When you click a button inside of a container, a config with either text or selector is expected`;
    }

    Object.assign(config, {
      rootEl: this.componentEl
    });

    Spectangular.button(config).click();
    return this;
  }

  switchTab(config = {}) {
    if (!config.text && !config.selector && config.index === undefined) {
      throw `When you click a tab inside of a container, a config with either text, selector or index is expected`;
    }

    Object.assign(config, {
      rootEl: this.componentEl
    });

    Spectangular.tab(config).click();
    return this;
  }
}
