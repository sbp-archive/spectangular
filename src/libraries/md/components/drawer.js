import Container from './container.js';

export class Drawer extends Container {
  get defaultSelector() {
    return 'md-sidenav:not(.md-closed)';
  }
}

export default Drawer;
