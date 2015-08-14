/**
 * Created by mgijsbertihodenpijl on 14/08/15.
 */
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

describe('Demo of sidenav', function () {

    /**
     * Loads the page https://material.angularjs.org/latest/#/demo/material.components.tabs and waits for the element
     * with css selector .demo-toolbar.
     */
    beforeEach(function () {
        _node_modulesSpectangularDistSpectangularJs2['default'].loadPage('/#/demo/material.components.sidenav', '.demo-toolbar');
    });

    it('should open the sidenav right', function () {
        var rootEl = $('[demo-id=\"sidenavdemoBasicUsage\"]');
        expect(rootEl.isPresent()).toBe(true);
        _node_modulesSpectangularDistSpectangularJs2['default'].button({
            rootEl: rootEl,
            text: 'toggle right' }).click();
        var sideNavRoot = $('.md-sidenav-right');
        // Wait for the sidenav to be available with ExpectedConditions,
        // see https://angular.github.io/protractor/#/api?view=ExpectedConditions
        browser.wait(protractor.ExpectedConditions.presenceOf(sideNavRoot), 2000);
        expect(sideNavRoot.isPresent()).toBe(true);
        _node_modulesSpectangularDistSpectangularJs2['default'].form({
            rootEl: sideNavRoot,
            data: [{ model: 'data', value: 'Hello world!', type: 'textfield' }]
        });
        _node_modulesSpectangularDistSpectangularJs2['default'].button({
            rootEl: sideNavRoot,
            text: 'close sidenav right' }).click();
    });
});
