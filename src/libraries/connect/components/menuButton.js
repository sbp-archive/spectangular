import Button from './button.js';

export class MenuButton extends Button {
  get defaultSelector() {
    return 'material-menu-button';
  }

  getButtonIcon(menuButtonEl) {
    return menuButtonEl.element(by.css('material-menu-button > material-button')).getAttribute('material-icon');
  }

  getButtonText(menuButtonEl) {
    return menuButtonEl.element(by.css('material-menu-button > material-button')).getText();
  }
}

export default MenuButton;
