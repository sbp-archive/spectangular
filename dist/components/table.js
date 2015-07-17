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

var _spectangularJs = require('../spectangular.js');

var _spectangularJs2 = _interopRequireDefault(_spectangularJs);

var Table = (function (_Container) {
  _inherits(Table, _Container);

  function Table() {
    _classCallCheck(this, Table);

    _get(Object.getPrototypeOf(Table.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Table, [{
    key: 'clickHeader',
    value: function clickHeader(config) {
      if (config.text) {
        return this.clickHeaderByText(config.text);
      } else if (config.index) {
        return this.clickHeaderByIndex(config.index);
      } else {
        throw 'Table.clickHeader() expects a config with either text or index';
      }
    }
  }, {
    key: 'clickHeaderByIndex',
    value: function clickHeaderByIndex(index) {
      this.headers.get(index).click();
      return this;
    }
  }, {
    key: 'clickHeaderByText',
    value: function clickHeaderByText(text) {
      this.headers.filter(function (header) {
        return header.getText().then(function (headerText) {
          return headerText.toLowerCase().trim() === text.toLowerCase().trim();
        });
      }).then(function (filteredItems) {
        if (filteredItems.length === 1) {
          filteredItems[0].click();
        } else if (!filteredItems.length) {
          throw 'Could not find a header with the text ' + text;
        } else {
          throw 'There are multiple headers with the text ' + text;
        }
      });
      return this;
    }
  }, {
    key: 'getRowByIndex',
    value: function getRowByIndex(index) {
      return this.rows.get(index);
    }
  }, {
    key: 'getCellValue',
    value: function getCellValue(rowIndex, columnIndex) {
      return this.rows.get(rowIndex).all(by.css(this.cellSelector)).get(columnIndex).getText();
    }
  }, {
    key: 'getRowMenuButton',
    value: function getRowMenuButton(rowIndex) {
      return _spectangularJs2['default'].menuButton({
        rootEl: this.rows.get(rowIndex)
      });
    }
  }, {
    key: 'rowSelector',
    get: function get() {
      if (this.impl.rowSelector === undefined) {
        throw 'The library you use should define rowSelector on its Table implementation';
      }
      return this.impl.rowSelector;
    }
  }, {
    key: 'cellSelector',
    get: function get() {
      if (this.impl.cellSelector === undefined) {
        throw 'The library you use should define cellSelector on its Table implementation';
      }
      return this.impl.cellSelector;
    }
  }, {
    key: 'headerSelector',
    get: function get() {
      if (this.impl.headerSelector === undefined) {
        throw 'The library you use should define headerSelector on its Table implementation';
      }
      return this.impl.headerSelector;
    }
  }, {
    key: 'rows',
    get: function get() {
      return this.componentEl.all(by.css(this.rowSelector));
    }
  }, {
    key: 'headers',
    get: function get() {
      return this.componentEl.all(by.css(this.headerSelector));
    }
  }, {
    key: 'pagination',
    get: function get() {
      return _spectangularJs2['default'].pagination({
        rootEl: this.componentEl
      });
    }
  }, {
    key: 'rowCount',
    get: function get() {
      return this.rows.count();
    }
  }]);

  return Table;
})(_containerJs2['default']);

exports['default'] = Table;
module.exports = exports['default'];
