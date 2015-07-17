'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _defaults(subClass, superClass); }

var _containerJs = require('./container.js');

var _containerJs2 = _interopRequireDefault(_containerJs);

var _spectangularJs = require('../spectangular.js');

var _spectangularJs2 = _interopRequireDefault(_spectangularJs);

var Form = (function (_Container) {
  _inherits(Form, _Container);

  _createClass(Form, null, [{
    key: 'validate',
    value: function validate(data) {
      for (var index in data) {
        if (data.hasOwnProperty(index)) {
          var row = data[index];
          if (!row.hasOwnProperty('model')) {
            throw 'Test specification does not have a model';
          }
          if (!row.hasOwnProperty('value')) {
            throw 'Test specification does not have value';
          }
          if (!row.hasOwnProperty('type')) {
            throw 'Test specification does not have a type';
          }
        }
      }

      return true;
    }
  }]);

  function Form(impl) {
    var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, Form);

    _get(Object.getPrototypeOf(Form.prototype), 'constructor', this).call(this, impl, config);

    if (config.data) {
      this.createFields(config.data);
      this.setValues(config.data);
    } else if (config.fields) {
      this.createFields(config.fields);
    } else {
      throw 'A form needs to have either data (containing fields) or fields specified on the configuration';
    }
  }

  _createClass(Form, [{
    key: 'setValues',
    value: function setValues(data) {
      var _this = this;

      if (!Form.validate(data)) {
        throw 'The data that you are trying to set to this form is not valid';
      }

      data.forEach(function (item) {
        var field = _this.fields[item.model];
        if (field) {
          field.setValue(item.value);
        }
      });

      return this;
    }
  }, {
    key: 'getValues',
    value: function getValues() {
      var values = {};
      this.fields.forEach(function (field) {
        values[field.model] = field.getValue();
      });
      return values;
    }
  }, {
    key: 'createFields',
    value: function createFields(data) {
      var _this2 = this;

      this.fields = {};

      data.forEach(function (item) {
        if (!_spectangularJs2['default'][item.type]) {
          throw 'Field type ' + item.type + ' is not valid.';
        }

        _this2.fields[item.model] = _spectangularJs2['default'][item.type]({
          rootEl: _this2.componentEl,
          selector: '[ng-model=\'' + item.model + '\']'
        });
      });

      return this;
    }
  }]);

  return Form;
})(_containerJs2['default']);

exports['default'] = Form;
module.exports = exports['default'];
