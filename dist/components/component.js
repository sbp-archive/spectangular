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
    value: function getComponentElByConfig() {
      return null;
    }
  }, {
    key: 'click',
    value: function click() {
      this.componentEl.click();
      return this;
    }
  }, {
    key: 'sendKeys',
    value: function sendKeys(value) {
      this.componentEl.sendKeys(value);
      return this;
    }
  }, {
    key: 'whenVisible',
    value: function whenVisible() {
      browser.wait(protractor.ExpectedConditions.visibilityOf(this.componentEl), this.timeout);
      return this;
    }
  }, {
    key: 'whenInvisible',
    value: function whenInvisible() {
      var EC = protractor.ExpectedConditions;
      browser.wait(EC.or(EC.stalenessOf(this.componentEl), EC.invisibilityOf(this.componentEl)), this.timeout);
      return this;
    }
  }, {
    key: 'componentEl',
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
    get: function get() {
      return this.config.timeout || 5000;
    }
  }]);

  return Component;
})();

exports['default'] = Component;
module.exports = exports['default'];
