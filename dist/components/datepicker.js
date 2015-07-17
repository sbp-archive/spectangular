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

var monthMap = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December'
};

exports.monthMap = monthMap;

var Datepicker = (function (_Container) {
  _inherits(Datepicker, _Container);

  function Datepicker() {
    _classCallCheck(this, Datepicker);

    _get(Object.getPrototypeOf(Datepicker.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Datepicker, [{
    key: 'setDate',
    value: function setDate(value) {
      var date = new Date(value);

      var year = date.getFullYear();
      var month = date.getMonth();
      var day = date.getDate();

      this.setYear(year);
      this.setMonth(month);
      this.setDay(day);
    }
  }, {
    key: 'setYear',
    value: function setYear(year) {
      this.clickItemByValue(this.enabledYears, year);
      return this;
    }
  }, {
    key: 'setMonth',
    value: function setMonth(month) {
      this.clickItemByValue(this.enabledMonths, monthMap[month]);
      return this;
    }
  }, {
    key: 'setDay',
    value: function setDay(day) {
      this.clickItemByValue(this.enabledDays, day);
      return this;
    }
  }, {
    key: 'clickItemByValue',
    value: function clickItemByValue(items, value) {
      return items.filter(function (item) {
        return item.getText().then(function (text) {
          return text.toLowerCase().trim() === ('' + value).toLowerCase().trim();
        });
      }).then(function (filteredItems) {
        if (filteredItems.length === 1) {
          filteredItems[0].click();
        } else if (!filteredItems.length) {
          throw value + ' is not within valid range. Test fails.';
        } else {
          throw value + ' is not unique. Test fails.';
        }
      });
    }
  }, {
    key: 'enabledYears',
    get: function get() {
      if (this.impl.enabledYears === undefined) {
        throw 'The library you use should define a getter for enabledYears on its Datepicker';
      }
      return this.impl.enabledYears;
    }
  }, {
    key: 'enabledMonths',
    get: function get() {
      if (this.impl.enabledMonths === undefined) {
        throw 'The library you use should define a getter for enabledMonths on its Datepicker';
      }
      return this.impl.enabledMonths;
    }
  }, {
    key: 'enabledDays',
    get: function get() {
      if (this.impl.enabledDays === undefined) {
        throw 'The library you use should define a getter for enabledDays on its Datepicker';
      }
      return this.impl.enabledDays;
    }
  }]);

  return Datepicker;
})(_containerJs2['default']);

exports['default'] = Datepicker;
//# sourceMappingURL=datepicker.js.map
