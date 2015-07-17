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

var _containerJs = require('./container.js');

var _containerJs2 = _interopRequireDefault(_containerJs);

var Dialog = (function (_Container) {
  _inherits(Dialog, _Container);

  function Dialog() {
    _classCallCheck(this, Dialog);

    _get(Object.getPrototypeOf(Dialog.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Dialog, [{
    key: 'getComponentElByConfig',
    value: function getComponentElByConfig(config) {
      if (config.type) {
        return this.byDialogType(config.type);
      }
      return null;
    }
  }, {
    key: 'byDialogType',
    value: function byDialogType(type) {
      var _this = this;

      return this.rootEl.all(by.css(this.selector)).filter(function (dialogEl) {
        return _this.getDialogType(dialogEl).then(function (dialogType) {
          return dialogType.toLowerCase().trim() === type.toLowerCase().trim();
        });
      });
    }
  }, {
    key: 'getDialogType',
    value: function getDialogType(dialogEl) {
      if (this.impl.getDialogType === undefined) {
        throw 'The library you use does not support getDialogType';
      }
      return this.impl.getDialogType(dialogEl);
    }
  }]);

  return Dialog;
})(_containerJs2['default']);

exports['default'] = Dialog;
module.exports = exports['default'];
//# sourceMappingURL=dialog.js.map
