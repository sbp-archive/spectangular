import Container from './container.js';

export class Dialog extends Container {
  get defaultSelector() {
    return '.md-dialog-container > md-dialog';
  }
}

export default Dialog;
