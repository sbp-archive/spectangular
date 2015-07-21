if (!element || !by || !expect) {
  throw 'Protractor should be available when using Spectangular!';
}

// Load in the NodeJS Babel (ES6) polyfill
import '../node_modules/babel/polyfill.js';

// These are the components that are exposed publicly
import Button from './components/button.js';
import Checkbox from './components/checkbox.js';
import Component from './components/component.js';
import Container from './components/container.js';
import Datefield from './components/datefield.js';
import Datepicker from './components/datepicker.js';
import Dialog from './components/dialog.js';
import Drawer from './components/drawer.js';
import Form from './components/form.js';
import Menu from './components/menu.js';
import MenuButton from './components/menuButton.js';
import Pagination from './components/pagination.js';
import Searchfield from './components/searchfield.js';
import Select from './components/select.js';
import Selectfield from './components/selectfield.js';
import Tab from './components/tab.js';
import Table from './components/table.js';
import Textfield from './components/textfield.js';
import Textarea from './components/textarea.js';

class Spectangular {
  get library() {
    return this._library;
  }

  set library(library) {
    this._library = library;
  }

  set baseUrl(baseUrl) {
    this._baseUrl = baseUrl;
  }

  get baseUrl() {
    return this._baseUrl || '';
  }

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
   * @param url of the page
   * @param waitForElementSelector, css selector for the element
   */
  loadPageAndWait(url, waitForElementSelector = 'body') {
    browser.driver.get(`${this.baseUrl}${url}`);

    browser.driver.wait(() => {
      if (browser.driver.isElementPresent(by.css(waitForElementSelector))) {
        browser.sleep(2000);
        return true;
      } else {
        console.log('Page is not ready yet. Trying again...');
        return false;
      }
    }, 50000, 'Was not able to load the application!');
  }

  /**
   * Refreshes the page and loads again the page. This is used in combination with closePage. This method reloads
   * the Angular context before continue with the loading the page. This method is useful if tests use the same fixture
   * and the test need a fully reload of the fixture and Angular context.
   *
   * @param url
   * @param waitForElementSelector
   */
  loadPageRefresh(url, waitForElementSelector = 'body') {
    browser.driver.navigate().refresh();
    this.loadPage(url, waitForElementSelector);
  }

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
  loadPage(url, waitForElementSelector = 'body') {
    browser.get(`${this.baseUrl}${url}`);
    expect(element(by.css(waitForElementSelector)).isPresent()).toBe(true);
  }

  /**
   * Returns the specific implementation class for the current library.
   *
   * @param clsName class name
   * @returns {*} or an exception if the clsName does not exits
   */
  getImplementationFor(clsName) {
    var LibraryImplementation = this.library[clsName];
    if (LibraryImplementation === undefined) {
      throw `The library you are using has no implementation for ${clsName}`;
    }
    return LibraryImplementation;
  }

  component(config) {
    return new Component(this.getImplementationFor('Component'), config);
  }

  container(config) {
    return new Container(this.getImplementationFor('Container'), config);
  }

  button(config) {
    return new Button(this.getImplementationFor('Button'), config);
  }

  tab(config) {
    return new Tab(this.getImplementationFor('Tab'), config);
  }

  dialog(config) {
    return new Dialog(this.getImplementationFor('Dialog'), config);
  }

  drawer(config) {
    return new Drawer(this.getImplementationFor('Drawer'), config);
  }

  form(config) {
    return new Form(this.getImplementationFor('Form'), config);
  }

  textfield(config) {
    return new Textfield(this.getImplementationFor('Textfield'), config);
  }

  textarea(config) {
    return new Textarea(this.getImplementationFor('Textarea'), config);
  }

  selectfield(config) {
    return new Selectfield(this.getImplementationFor('Selectfield'), config);
  }

  searchfield(config) {
    return new Searchfield(this.getImplementationFor('Searchfield'), config);
  }

  datefield(config) {
    return new Datefield(this.getImplementationFor('Datefield'), config);
  }

  datepicker(config) {
    return new Datepicker(this.getImplementationFor('Datepicker'), config);
  }

  select(config) {
    return new Select(this.getImplementationFor('Select'), config);
  }

  checkbox(config) {
    return new Checkbox(this.getImplementationFor('Checkbox'), config);
  }

  menu(config) {
    return new Menu(this.getImplementationFor('Menu'), config);
  }

  menuButton(config) {
    return new MenuButton(this.getImplementationFor('MenuButton'), config);
  }

  table(config) {
    return new Table(this.getImplementationFor('Table'), config);
  }

  pagination(config) {
    return new Pagination(this.getImplementationFor('Pagination'), config);
  }
}

export default new Spectangular();
