import Component from './component.js';

export default class Button extends Component {
  getComponentElByConfig(config) {
    if (config.icon) {
      return this.byIcon(config.icon);
    }
    else if (config.text) {
      return this.byButtonText(config.text);
    }
    return null;
  }

  byIcon(icon) {
    return this.rootEl.all(by.css(this.selector)).filter((buttonEl) => {
      return this.getButtonIcon(buttonEl).then((buttonIcon) => {
        return buttonIcon.toLowerCase().trim() === icon.toLowerCase().trim();
      });
    });
  }

  byButtonText(text) {
    return this.rootEl.all(by.css(this.selector)).filter((buttonEl) => {
      return this.getButtonText(buttonEl).then((buttonText) => {
        return buttonText.toLowerCase().trim() === text.toLowerCase().trim();
      });
    });
  }

  getButtonIcon(buttonEl) {
    if (this.impl.getButtonIcon === undefined) {
      throw 'The library you use does not support getButtonIcon';
    }
    return this.impl.getButtonIcon(buttonEl);
  }

  getButtonText(buttonEl) {
    if (this.impl.getButtonText !== undefined) {
      return this.impl.getButtonText(buttonEl);
    }
    return buttonEl.getText();
  }
}
