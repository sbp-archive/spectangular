//using ng-model form ng-model data.cb1 ... data.cb5 checkboxes
//using sync check syncing
/* globals browser, describe, it, element, by, expect, beforeEach */
import Spectangular from '../node_modules/spectangular/dist/spectangular.js';
import * as SpectangularMdLibrary from '../node_modules/spectangular/dist/libraries/md/md.js';


Spectangular.baseUrl = 'https://material.angularjs.org/latest';
Spectangular.library = SpectangularMdLibrary;

describe('Demo of checkboxes', function () {

  /**
   * Loads the page https://material.angularjs.org/latest/#/demo/material.components.checkbox and waits for the element
   * with css selector h2.md-toolbar-item.
   */
  beforeEach(function () {
    Spectangular.loadPage('/#/demo/material.components.checkbox', 'h2.md-toolbar-item');
  });

  /**
   * The first checkbox is selected. The selector is an unique css selector based on the ng-model attribute.
   * The checkbox.setValue() clicks the checkbox and it validates if the checkbox is
   * checked. Because checkbox.setValue() does also validation, no expectation is needed.
   */
  it('should use selector to select and click on checkbox', function () {
    Spectangular.checkbox({selector: '[ng-model="\data.cb1"\]'}).setValue(true);
  });

  /**
   * The second checkbox is selected. The selector is an unique css selector based on the ng-model attribute.
   * The checkbox.setValue() clicks the checkbox and it validates if the checkbox is
   * checked. Because checkbox.setValue() does also validation, no expectation is needed.
   */
  it('should use selector to select and click on checkbox #2', function () {
    Spectangular.checkbox({selector: '[ng-model="\data.cb2"\]'}).setValue(true);
  });

  /**
   * For a group of fields in a container, a JSON object is used as configuration. See the spectangular README for
   * the details. Spectangular.form calls setValue for each checkbox, so also the validation is done.
   */
  it('should use form data to select and click on checkboxes', function () {
    //The form selector should be unique. If not, the first form is used. Selenium gives a warning.
    Spectangular.form({
      selector: '.checkboxDemo1',
      data: [
        {model: 'data.cb1', value: true, type: 'checkbox'},
        {model: 'data.cb2', value: true, type: 'checkbox'},
        {model: 'data.cb5', value: true, type: 'checkbox'}
      ]
    })
  });

});