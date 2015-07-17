import Container from './container.js';

export default class Pagination extends Container {
  get previousButtonSelector() {
    if (this.impl.previousButtonSelector === undefined) {
      throw 'The library you use should define previousButtonSelector on its Pagination implementation';
    }
    return this.impl.previousButtonSelector;
  }

  get nextButtonSelector() {
    if (this.impl.nextButtonSelector === undefined) {
      throw 'The library you use should define nextButtonSelector on its Pagination implementation';
    }
    return this.impl.nextButtonSelector;
  }

  get currentPageSelector() {
    if (this.impl.currentPageSelector === undefined) {
      throw 'The library you use should define currentPageSelector on its Pagination implementation';
    }
    return this.impl.currentPageSelector;
  }

  get previousButtonEl() {
    return this.componentEl.element(by.css(this.previousButtonSelector));
  }

  get nextButtonEl() {
    return this.componentEl.element(by.css(this.nextButtonSelector));
  }

  get currentPageEl() {
    return this.componentEl.element(by.css(this.currentPageSelector));
  }

  getCurrentPage() {
    return this.currentPageEl.getText();
  }

  previous() {
    this.previousButtonEl.click();
    return this;
  }

  next() {
    this.nextButtonEl.click();
    return this;
  }
}
