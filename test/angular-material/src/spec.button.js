/* globals browser, describe, it, element, by, expect, beforeEach */
import Spectangular from '../node_modules/spectangular/dist/spectangular.js';
import * as SpectangularMdLibrary from '../node_modules/spectangular/dist/libraries/md/md.js';

Spectangular.baseUrl = 'https://material.angularjs.org/latest';
Spectangular.library = SpectangularMdLibrary;

describe('Demo of buttons', function () {

  /**
   * Loads the page https://material.angularjs.org/latest/#/demo/material.components.button and waits for the element
   * with css selector .demo-toolbar.
   */
  beforeEach(function () {
    Spectangular.loadPage('/#/demo/material.components.bottomSheet', '.demo-toolbar');
  });

  /**
   * The commentsAction variable is a protractor ElementFinder ($) which is opened after the click.
   * See https://angular.github.io/protractor/#/api?view=ElementFinder.prototype.$
   */
  var commentsAction = $('.bottomSheetDemo1 h2.md-subheader .ng-scope');

  /**
   * A button element can be selected in two ways:
   *
   * 1) by css selector - Spectangular.button({selector: '[ng-click=\"showListBottomSheet($event)\"]'}).click();
   * 2) by text  - Spectangular.button({text: 'Show as list'}).click();
   *
   * The by selector uses the css selector, and is faster. The function returns the first element. Therefore
   * the css selector should be specific for a single web element.
   *
   * The by text retrieves all buttons on the page and returns the first one with the text. Use this function if
   * only one button on the page has unique text.
   *
   */
  it('should find with selector', function () {
    Spectangular.button({selector: '[ng-click=\"showListBottomSheet($event)\"]'}).click();
    expect(commentsAction.isPresent()).toBe(true);
  });

  it('should find with text', function () {
    Spectangular.button({text: 'Show as list'}).click();
    expect(commentsAction.isPresent()).toBe(true);
  });

});