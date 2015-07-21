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
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Component = (function () {
  function Component(ImplementationCls) {
    var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, Component);

    this.config = config;
    this.impl = new ImplementationCls(this);
  }

  _createClass(Component, [{
    key: 'getComponentElByConfig',

    /**
     * Extension point for componentEl. A subclass of a component may implement this for a specific
     * configuration.
     *
     * @returns {null}
     */
    value: function getComponentElByConfig() {
      return null;
    }
  }, {
    key: 'click',

    /**
     * Clicks on the component element.
     *
     * @returns {Component}
     */
    value: function click() {
      this.componentEl.click();
      return this;
    }
  }, {
    key: 'sendKeys',

    /**
     * Sets the value of the component element.
     *
     * @param value, the value of the element.
     * @returns {Component}
     */
    value: function sendKeys(value) {
      this.componentEl.sendKeys(value);
      return this;
    }
  }, {
    key: 'whenVisible',

    /**
     * Waits for the web element to be visible.
     *
     * @returns {Component}
     */
    value: function whenVisible() {
      browser.wait(protractor.ExpectedConditions.visibilityOf(this.componentEl), this.timeout);
      return this;
    }
  }, {
    key: 'whenInvisible',

    /**
     * Waits for the wb element to be invisible.
     *
     * @returns {Component}
     */
    value: function whenInvisible() {
      var EC = protractor.ExpectedConditions;
      browser.wait(EC.or(EC.stalenessOf(this.componentEl), EC.invisibilityOf(this.componentEl)), this.timeout);
      return this;
    }
  }, {
    key: 'componentEl',

    /**
     *  Each component has a single unique web element, which is stored in the componentEl. Note that
     *  the componentEl is a promise to a Selenium web element.
     *
     * @returns {promise to Selenium web element}
     */
    get: function get() {
      if (!this._componentEl) {
        var componentElByConfig = this.getComponentElByConfig(this.config);
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
  }, {
    key: 'defaultSelector',

    /**
     * Obligatory for each component. The method implements the default selector in case the configuration does not
     * contain a selector.
     *
     * @returns {*|null} throws exception if not implemented.
     */
    get: function get() {
      if (this.impl.defaultSelector === undefined) {
        throw 'The library you use should define a defaultSelector on its Component implementations';
      }
      return this.impl.defaultSelector || null;
    }
  }, {
    key: 'selector',
    get: function get() {
      return this.config.selector || this.defaultSelector;
    }
  }, {
    key: 'rootEl',

    /**
     * Returns the root element. The root element is the container element which contains the component element(s).
     *
     * For instance, a form contains a input element.
     * form = rootEl
     * input = componentEl
     *
     * @returns {*} the rootElement or the body of the html page.
     */
    get: function get() {
      return this.config.rootEl || this.bodyEl;
    }
  }, {
    key: 'bodyEl',
    get: function get() {
      return element(by.css('body'));
    }
  }, {
    key: 'timeout',

    /**
     * The configuration can contain a time out. If not, the default time out is selected. The time out is used
     * in the whenVisible and whenInvisble methods.
     *
     * @returns {*|Number|number}
     */
    get: function get() {
      return this.config.timeout || 5000;
    }
  }]);

  return Component;
})();

exports['default'] = Component;
module.exports = exports['default'];
