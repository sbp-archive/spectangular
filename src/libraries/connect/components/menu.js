import Container from './container.js';

export class Menu extends Container {
  get defaultSelector() {
    return 'material-menu.material-opened';
  }

  get itemSelector() {
    return 'material-menu > *';
  }
}

export default Menu;
