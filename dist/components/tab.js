'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _defaults(subClass, superClass); }

var _componentJs = require('./component.js');

var _componentJs2 = _interopRequireDefault(_componentJs);

var Tab = (function (_Component) {
  _inherits(Tab, _Component);

  function Tab() {
    _classCallCheck(this, Tab);

    _get(Object.getPrototypeOf(Tab.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Tab, [{
    key: 'getComponentElByConfig',
    value: function getComponentElByConfig(config) {
      if (config.text) {
        return this.byTabText(config.text);
      } else if (config.index !== undefined) {
        return this.byTabIndex(config.index);
      }
      return null;
    }
  }, {
    key: 'getTabText',
    value: function getTabText(tabEl) {
      if (this.impl.getTabText !== undefined) {
        return this.impl.getTabText(tabEl);
      }
      return tabEl.getText();
    }
  }, {
    key: 'byTabIndex',
    value: function byTabIndex(index) {
      return this.rootEl.all(by.css(this.selector)).get(index);
    }
  }, {
    key: 'byTabText',
    value: function byTabText(text) {
      var _this = this;

      return this.rootEl.all(by.css(this.selector)).filter(function (tabEl) {
        return _this.getTabText(tabEl).then(function (tabText) {
          return tabText.toLowerCase().trim() === text.toLowerCase().trim();
        });
      });
    }
  }]);

  return Tab;
})(_componentJs2['default']);

exports['default'] = Tab;
module.exports = exports['default'];
