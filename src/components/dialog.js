import Container from './container.js';

export default class Dialog extends Container {
  getComponentElByConfig(config) {
    if (config.type) {
      return this.byDialogType(config.type);
    }
    return null;
  }

  byDialogType(type) {
    return this.rootEl.all(by.css(this.selector)).filter((dialogEl) => {
      return this.getDialogType(dialogEl).then((dialogType) => {
        return dialogType.toLowerCase().trim() === type.toLowerCase().trim();
      });
    });
  }

  getDialogType(dialogEl) {
    if (this.impl.getDialogType === undefined) {
      throw 'The library you use does not support getDialogType';
    }
    return this.impl.getDialogType(dialogEl);
  }
}
