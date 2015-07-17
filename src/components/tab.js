import Component from './component.js';

export default class Tab extends Component {
  getComponentElByConfig(config) {
    if (config.text) {
      return this.byTabText(config.text);
    } else if (config.index !== undefined) {
      return this.byTabIndex(config.index);
    }
    return null;
  }

  getTabText(tabEl) {
    if (this.impl.getTabText !== undefined) {
      return this.impl.getTabText(tabEl);
    }
    return tabEl.getText();
  }

  byTabIndex(index) {
    return this.rootEl.all(by.css(this.selector)).get(index);
  }

  byTabText(text) {
    return this.rootEl.all(by.css(this.selector)).filter((tabEl) => {
      return this.getTabText(tabEl).then((tabText) => {
        return tabText.toLowerCase().trim() === text.toLowerCase().trim();
      });
    });
  }
}
