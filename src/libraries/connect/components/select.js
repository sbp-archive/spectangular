import Menu from './menu.js';

export class Select extends Menu {
  get defaultSelector() {
    return '.material-select-menu.material-opened';
  }

  get itemSelector() {
    return 'material-menu.material-select-menu > material-item';
  }
}

export default Select;
