/**
 * Created by mgijsbertihodenpijl on 14/08/15.
 */
/* globals browser, describe, it, element, by, expect, beforeEach */
import Spectangular from '../node_modules/spectangular/dist/spectangular.js';
import * as SpectangularMdLibrary from '../node_modules/spectangular/dist/libraries/md/md.js';

Spectangular.baseUrl = 'https://material.angularjs.org/latest';
Spectangular.library = SpectangularMdLibrary;

describe('Demo of sidenav', function () {

    /**
     * Loads the page https://material.angularjs.org/latest/#/demo/material.components.tabs and waits for the element
     * with css selector .demo-toolbar.
     */
    beforeEach(function () {
        Spectangular.loadPage('/#/demo/material.components.sidenav', '.demo-toolbar');
    });

    it('should open the sidenav right', function () {
        var rootEl = $('[demo-id=\"sidenavdemoBasicUsage\"]');
        expect(rootEl.isPresent()).toBe(true);
        Spectangular
            .button({
                rootEl: rootEl,
                text: 'toggle right'
            })
            .click();
        var sideNavRoot = $('.md-sidenav-right');
        // Wait for the sidenav to be available with ExpectedConditions,
        // see https://angular.github.io/protractor/#/api?view=ExpectedConditions
        browser.wait(protractor.ExpectedConditions.presenceOf(sideNavRoot), 2000);
        expect(sideNavRoot.isPresent()).toBe(true);
        Spectangular.form({
            rootEl: sideNavRoot,
            data: [
                {model: 'data', value: 'Hello world!', type: 'textfield'}
            ]
        });
        Spectangular
            .button({
                rootEl: sideNavRoot,
                text: 'close sidenav right'
            })
            .click();
    });
});