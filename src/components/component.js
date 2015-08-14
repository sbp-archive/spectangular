/**
 * Component class is a parent for all classes in Spectangular and contains the API for all actions.
 *
 * The component element is specified in the configuration (selector).
 *
 * Example:
 *   Spectangular.button({selector: '[ng-click=\"showListBottomSheet($event)\"]'}).click();
 *
 * The selector is css selector for a web element with an attribute ng-click with value showListBottomSheet($event).
 * The web element is the componentEl.
 *
 * The ImplementationCls is a class for a specific implementation. For instance angular-material
 * has a specific component class. The base component class is injected into the implementation class
 * during construction. In this way implementation and base classes are loosely coupled.
 *
 */
export default class Component {
  constructor(ImplementationCls, config = {}) {
    this.config = config;
    this.impl = new ImplementationCls(this);
  }

  /**
   *  Each component has a single unique web element, which is stored in the componentEl. Note that
   *  the componentEl and rootEl are protractor elements.
   *
   *  A componentEl can be retrieved in two ways:
   *
   *  - by the config object (this.config), which is passed as argument to the component.
   *  By config is used if the component has extended the getComponentElByConfig method.
   *  - by a css selector, which finds the child of a root element (this.rootEl)
   *  By css selector can be used for any parent root element. Make sure you pass the rootElement as a protractor
   *  element to the component.
   *
   *  Example for a menu button:
   *          var rootEl = $('[demo-id=\"menudemoBasicUsage\"]');
   *          Spectangular
   *             .menuButton({rootEl: rootEl})
   *            .openAndClickItem({text: 'redial'});
   *
   * @returns {protractor element}
   */
  get componentEl() {
    if (!this._componentEl) {
      let componentElByConfig = this.getComponentElByConfig(this.config);
      if (componentElByConfig) {
        this._componentEl = componentElByConfig;
      } else if (this.selector) {
        this._componentEl = this.rootEl.element(by.css(this.selector));
      } else {
        throw 'Unable to get componentEl based on config or root selector.';
      }
    }
    return this._componentEl;
  }

  /**
   * Extension point for componentEl. A subclass of a component may implement this for a specific
   * configuration.
   *
   * @returns {null}
   */
  getComponentElByConfig() {
    return null;
  }

  /**
   * Obligatory for each component. The method implements the default selector in case the configuration does not
   * contain a selector.
   *
   * @returns {*|null} throws exception if not implemented.
   */
  get defaultSelector() {
    if (this.impl.defaultSelector === undefined) {
      throw 'The library you use should define a defaultSelector on its Component implementations';
    }
    return this.impl.defaultSelector || null;
  }

  get selector() {
    return this.config.selector || this.defaultSelector;
  }

  /**
   * Returns the root element. The root element is the container element which contains the component element(s).
   *
   * For instance, a form contains a input element.
   * form = rootEl
   * input = componentEl
   *
   * @returns {*} the rootElement or the body of the html page.
   */
  get rootEl() {
    return this.config.rootEl || this.bodyEl;
  }

  get bodyEl() {
    return element(by.css('body'));
  }

  /**
   * The configuration can contain a time out. If not, the default time out is selected. The time out is used
   * in the whenVisible and whenInvisble methods.
   *
   * @returns {*|Number|number}
   */
  get timeout() {
    return this.config.timeout || 5000;
  }

  /**
   * Clicks on the component element.
   *
   * @returns {Component}
   */
  click() {
    this.componentEl.click();
    return this;
  }

  /**
   * Sets the value of the component element.
   *
   * @param value, the value of the element.
   * @returns {Component}
   */
  sendKeys(value) {
    this.componentEl.sendKeys(value);
    return this;
  }

  /**
   * Waits for the web element to be visible.
   *
   * @returns {Component}
   */
  whenVisible() {
    browser.wait(protractor.ExpectedConditions.visibilityOf(this.componentEl), this.timeout);
    return this;
  }

  /**
   * Waits for the wb element to be invisible.
   *
   * @returns {Component}
   */
  whenInvisible() {
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.or(
      EC.stalenessOf(this.componentEl),
      EC.invisibilityOf(this.componentEl)
    ), this.timeout);
    return this;
  }
}
