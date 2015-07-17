import Container from './container.js';

export class Menu extends Container {
  get defaultSelector() {
    return '.md-open-menu-container';
  }

  get itemSelector() {
    return 'md-menu-item > button';
  }
}

export default Menu;
