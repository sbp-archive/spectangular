import Menu from './menu.js';

export class Select extends Menu {
  get defaultSelector() {
    return '.md-select-menu-container.md-active md-select-menu';
  }

  get itemSelector() {
    return 'md-content > md-option';
  }
}

export default Select;
