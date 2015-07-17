import Button from './button.js';

export class MenuButton extends Button {
  get defaultSelector() {
    return 'md-menu > button';
  }
}

export default MenuButton;
