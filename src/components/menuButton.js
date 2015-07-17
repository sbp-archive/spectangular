import Button from './button.js';
import Spectangular from '../spectangular.js';

export default class MenuButton extends Button {
  get menu() {
    return Spectangular.menu().whenVisible();
  }

  open() {
    this.componentEl.click();
    return this;
  }

  close() {
    this.bodyEl.click();
    return this;
  }

  openAndClickItem(config) {
    this.open();
    this.menu.clickItem(config);
    return this;
  }
}
