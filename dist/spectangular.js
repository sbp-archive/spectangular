'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

// Load in the NodeJS Babel (ES6) polyfill

require('../node_modules/babel/polyfill.js');

// These are the components that are exposed publicly

var _componentsButtonJs = require('./components/button.js');

var _componentsButtonJs2 = _interopRequireDefault(_componentsButtonJs);

var _componentsCheckboxJs = require('./components/checkbox.js');

var _componentsCheckboxJs2 = _interopRequireDefault(_componentsCheckboxJs);

var _componentsComponentJs = require('./components/component.js');

var _componentsComponentJs2 = _interopRequireDefault(_componentsComponentJs);

var _componentsContainerJs = require('./components/container.js');

var _componentsContainerJs2 = _interopRequireDefault(_componentsContainerJs);

var _componentsDatefieldJs = require('./components/datefield.js');

var _componentsDatefieldJs2 = _interopRequireDefault(_componentsDatefieldJs);

var _componentsDatepickerJs = require('./components/datepicker.js');

var _componentsDatepickerJs2 = _interopRequireDefault(_componentsDatepickerJs);

var _componentsDialogJs = require('./components/dialog.js');

var _componentsDialogJs2 = _interopRequireDefault(_componentsDialogJs);

var _componentsDrawerJs = require('./components/drawer.js');

var _componentsDrawerJs2 = _interopRequireDefault(_componentsDrawerJs);

var _componentsFormJs = require('./components/form.js');

var _componentsFormJs2 = _interopRequireDefault(_componentsFormJs);

var _componentsMenuJs = require('./components/menu.js');

var _componentsMenuJs2 = _interopRequireDefault(_componentsMenuJs);

var _componentsMenuButtonJs = require('./components/menuButton.js');

var _componentsMenuButtonJs2 = _interopRequireDefault(_componentsMenuButtonJs);

var _componentsPaginationJs = require('./components/pagination.js');

var _componentsPaginationJs2 = _interopRequireDefault(_componentsPaginationJs);

var _componentsSearchfieldJs = require('./components/searchfield.js');

var _componentsSearchfieldJs2 = _interopRequireDefault(_componentsSearchfieldJs);

var _componentsSelectJs = require('./components/select.js');

var _componentsSelectJs2 = _interopRequireDefault(_componentsSelectJs);

var _componentsSelectfieldJs = require('./components/selectfield.js');

var _componentsSelectfieldJs2 = _interopRequireDefault(_componentsSelectfieldJs);

var _componentsTabJs = require('./components/tab.js');

var _componentsTabJs2 = _interopRequireDefault(_componentsTabJs);

var _componentsTableJs = require('./components/table.js');

var _componentsTableJs2 = _interopRequireDefault(_componentsTableJs);

var _componentsTextfieldJs = require('./components/textfield.js');

var _componentsTextfieldJs2 = _interopRequireDefault(_componentsTextfieldJs);

var _componentsTextareaJs = require('./components/textarea.js');

var _componentsTextareaJs2 = _interopRequireDefault(_componentsTextareaJs);

if (!element || !by || !expect) {
  throw 'Protractor should be available when using Spectangular!';
}
var Spectangular = (function () {
  function Spectangular() {
    _classCallCheck(this, Spectangular);
  }

  _createClass(Spectangular, [{
    key: 'loadPageAndWait',

    /**
     * Page loading of non-angular pages. This method is called before each tests in the beforeEach method.
     * 
     * The page loads the url and waits until the web element is loaded. This method is used for
     * Angular applications which use AMD module pattern to load asynchronyously modules. See
     * https://github.com/angular/protractor/issues/66 for discussion.
     *
     * Example:
     *  Spectangular.loadPage('http://www.google.com','input#search');
     *
     * @param url, location of the page
     * @param waitForElementSelector, css selector for the element
     */
    value: function loadPageAndWait(url) {
      var waitForElementSelector = arguments.length <= 1 || arguments[1] === undefined ? 'body' : arguments[1];

      browser.driver.get('' + this.baseUrl + url);

      browser.driver.wait(function () {
        if (browser.driver.isElementPresent(by.css(waitForElementSelector))) {
          browser.sleep(2000);
          return true;
        } else {
          console.log('Page is not ready yet. Trying again...');
          return false;
        }
      }, 50000, 'Was not able to load the application!');
    }
  }, {
    key: 'loadPageRefresh',

    /**
     * Refreshes the page and loads again the page. This is used in combination with closePage. This method reloads
     * the Angular context before continue with the loading the page. This method is useful if tests use the same fixture
     * and the test need a fully reload of the fixture and Angular context.
     *
     * @param url
     * @param waitForElementSelector
     */
    value: function loadPageRefresh(url) {
      var waitForElementSelector = arguments.length <= 1 || arguments[1] === undefined ? 'body' : arguments[1];

      browser.driver.navigate().refresh();
      this.loadPage(url, waitForElementSelector);
    }
  }, {
    key: 'loadPage',

    /**
     * Page loading of angular pages. This method is called before each tests in the beforeEach method.
     *
     * The page loads the url. Protractor waits until the page is loaded and expect that the web element is loaded.
     * This method is used for application which do NOT use AMD module pattern and load the Angular application with
     * a ng-app directive.
     *
     * Example:
     *  Spectangular.loadAngularPage('http://www.my-angular-app.nl','.toolbar');
     *
     * @param url of the page
     * @param waitForElementSelector, css selector for the element
     */
    value: function loadPage(url) {
      var waitForElementSelector = arguments.length <= 1 || arguments[1] === undefined ? 'body' : arguments[1];

      browser.get('' + this.baseUrl + url);
      expect(element(by.css(waitForElementSelector)).isPresent()).toBe(true);
    }
  }, {
    key: 'getImplementationFor',

    /**
     * Returns the specific implementation class for the current library.
     *
     * @param clsName class name
     * @returns {*} or an exception if the clsName does not exits
     */
    value: function getImplementationFor(clsName) {
      var LibraryImplementation = this.library[clsName];
      if (LibraryImplementation === undefined) {
        throw 'The library you are using has no implementation for ' + clsName;
      }
      return LibraryImplementation;
    }
  }, {
    key: 'component',
    value: function component(config) {
      return new _componentsComponentJs2['default'](this.getImplementationFor('Component'), config);
    }
  }, {
    key: 'container',
    value: function container(config) {
      return new _componentsContainerJs2['default'](this.getImplementationFor('Container'), config);
    }
  }, {
    key: 'button',
    value: function button(config) {
      return new _componentsButtonJs2['default'](this.getImplementationFor('Button'), config);
    }
  }, {
    key: 'tab',
    value: function tab(config) {
      return new _componentsTabJs2['default'](this.getImplementationFor('Tab'), config);
    }
  }, {
    key: 'dialog',
    value: function dialog(config) {
      return new _componentsDialogJs2['default'](this.getImplementationFor('Dialog'), config);
    }
  }, {
    key: 'drawer',
    value: function drawer(config) {
      return new _componentsDrawerJs2['default'](this.getImplementationFor('Drawer'), config);
    }
  }, {
    key: 'form',
    value: function form(config) {
      return new _componentsFormJs2['default'](this.getImplementationFor('Form'), config);
    }
  }, {
    key: 'textfield',
    value: function textfield(config) {
      return new _componentsTextfieldJs2['default'](this.getImplementationFor('Textfield'), config);
    }
  }, {
    key: 'textarea',
    value: function textarea(config) {
      return new _componentsTextareaJs2['default'](this.getImplementationFor('Textarea'), config);
    }
  }, {
    key: 'selectfield',
    value: function selectfield(config) {
      return new _componentsSelectfieldJs2['default'](this.getImplementationFor('Selectfield'), config);
    }
  }, {
    key: 'searchfield',
    value: function searchfield(config) {
      return new _componentsSearchfieldJs2['default'](this.getImplementationFor('Searchfield'), config);
    }
  }, {
    key: 'datefield',
    value: function datefield(config) {
      return new _componentsDatefieldJs2['default'](this.getImplementationFor('Datefield'), config);
    }
  }, {
    key: 'datepicker',
    value: function datepicker(config) {
      return new _componentsDatepickerJs2['default'](this.getImplementationFor('Datepicker'), config);
    }
  }, {
    key: 'select',
    value: function select(config) {
      return new _componentsSelectJs2['default'](this.getImplementationFor('Select'), config);
    }
  }, {
    key: 'checkbox',
    value: function checkbox(config) {
      return new _componentsCheckboxJs2['default'](this.getImplementationFor('Checkbox'), config);
    }
  }, {
    key: 'menu',
    value: function menu(config) {
      return new _componentsMenuJs2['default'](this.getImplementationFor('Menu'), config);
    }
  }, {
    key: 'menuButton',
    value: function menuButton(config) {
      return new _componentsMenuButtonJs2['default'](this.getImplementationFor('MenuButton'), config);
    }
  }, {
    key: 'table',
    value: function table(config) {
      return new _componentsTableJs2['default'](this.getImplementationFor('Table'), config);
    }
  }, {
    key: 'pagination',
    value: function pagination(config) {
      return new _componentsPaginationJs2['default'](this.getImplementationFor('Pagination'), config);
    }
  }, {
    key: 'library',
    get: function get() {
      return this._library;
    },
    set: function set(library) {
      this._library = library;
    }
  }, {
    key: 'baseUrl',
    set: function set(baseUrl) {
      this._baseUrl = baseUrl;
    },
    get: function get() {
      return this._baseUrl || '';
    }
  }]);

  return Spectangular;
})();

exports['default'] = new Spectangular();
module.exports = exports['default'];
