import Container from './container.js';

export default class Menu extends Container {
  get menuItems() {
    return this.componentEl.all(by.css(this.itemSelector));
  }

  get itemSelector() {
    if (this.impl.itemSelector === undefined) {
      throw 'The library you use should define itemSelector on its Menu implementation';
    }
    return this.impl.itemSelector;
  }

  clickItem(config) {
    if (config.text) {
      this.clickItemByText(config.text);
    }
    else if (config.index !== undefined) {
      this.clickItemByIndex(config.index);
    }
    else if (config.selector) {
      this.componentEl.element(by.css(config.selector)).click();
    }
    else {
      throw 'Menu.clickItem() expects a config with either text, index or a selector';
    }

    return this;
  }

  clickItemByIndex(index) {
    return this.menuItems.get(index).click();
  }

  clickItemByText(text) {
    return this.menuItems.filter((el) => {
      return el.getText().then((itemText) => {
        return itemText.toLowerCase().trim() === text.toLowerCase().trim();
      });
    }).then((filteredItems) => {
      if (filteredItems.length) {
        filteredItems[0].click();
      } else {
        throw 'Trying to click on a menu item by text that does not exist';
      }
    });
  }
}
