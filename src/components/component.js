export default class Component {
  constructor(ImplementationCls, config = {}) {
    this.config = config;
    this.impl = new ImplementationCls(this);
  }

  get componentEl() {
    if (!this._componentEl) {
      let componentElByConfig = this.getComponentElByConfig(this.config);
      if (componentElByConfig) {
        this._componentEl = componentElByConfig;
      } else if (this.selector) {
        this._componentEl = this.rootEl.element(by.css(this.selector));
      } else {
        throw 'Unable to get componentEl based on config or selector.';
      }
    }

    return this._componentEl;
  }

  getComponentElByConfig() {
    return null;
  }

  get defaultSelector() {
    if (this.impl.defaultSelector === undefined) {
      throw 'The library you use should define a defaultSelector on its Component implementations';
    }
    return this.impl.defaultSelector || null;
  }

  get selector() {
    return this.config.selector || this.defaultSelector;
  }

  get rootEl() {
    return this.config.rootEl || this.bodyEl;
  }

  get bodyEl() {
    return element(by.css('body'));
  }

  get timeout() {
    return this.config.timeout || 5000;
  }

  click() {
    this.componentEl.click();
    return this;
  }

  sendKeys(value) {
    this.componentEl.sendKeys(value);
    return this;
  }

  whenVisible() {
    browser.wait(protractor.ExpectedConditions.visibilityOf(this.componentEl), this.timeout);
    return this;
  }

  whenInvisible() {
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.or(
      EC.stalenessOf(this.componentEl),
      EC.invisibilityOf(this.componentEl)
    ), this.timeout);
    return this;
  }
}
