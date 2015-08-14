/* globals browser, describe, it, element, by, expect, beforeEach */
'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _node_modulesSpectangularDistSpectangularJs = require('../node_modules/spectangular/dist/spectangular.js');

var _node_modulesSpectangularDistSpectangularJs2 = _interopRequireDefault(_node_modulesSpectangularDistSpectangularJs);

var _node_modulesSpectangularDistLibrariesMdMdJs = require('../node_modules/spectangular/dist/libraries/md/md.js');

var SpectangularMdLibrary = _interopRequireWildcard(_node_modulesSpectangularDistLibrariesMdMdJs);

_node_modulesSpectangularDistSpectangularJs2['default'].baseUrl = 'https://material.angularjs.org/latest';
_node_modulesSpectangularDistSpectangularJs2['default'].library = SpectangularMdLibrary;

describe('Demo of buttons', function () {

  /**
   * Loads the page https://material.angularjs.org/latest/#/demo/material.components.button and waits for the element
   * with css selector .demo-toolbar.
   */
  beforeEach(function () {
    _node_modulesSpectangularDistSpectangularJs2['default'].loadPage('/#/demo/material.components.bottomSheet', '.demo-toolbar');
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
    _node_modulesSpectangularDistSpectangularJs2['default'].button({ selector: '[ng-click=\"showListBottomSheet($event)\"]' }).click();
    expect(commentsAction.isPresent()).toBe(true);
  });

  it('should find with text', function () {
    _node_modulesSpectangularDistSpectangularJs2['default'].button({ text: 'Show as list' }).click();
    expect(commentsAction.isPresent()).toBe(true);
  });
});
