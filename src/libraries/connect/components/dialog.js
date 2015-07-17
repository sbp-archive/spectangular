import Container from './container.js';

export class Dialog extends Container {
  get defaultSelector() {
    return '.material-dialog-wrap.material-opened';
  }

  getDialogType(dialogEl) {
    return dialogEl.getAttribute('dialog-id').then((dialogId) => {
      return dialogId.replace('dialog-service-generated-', '');
    });
  }
}

export default Dialog;
