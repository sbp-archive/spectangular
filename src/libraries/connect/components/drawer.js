import Container from './container.js';

export class Drawer extends Container {
  get defaultSelector() {
    return '.material-drawer-wrap';
  }
}

export default Drawer;
