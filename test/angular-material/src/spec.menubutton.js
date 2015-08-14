/**
 * Created by mgijsbertihodenpijl on 13/08/15.
 */
/* globals browser, describe, it, element, by, expect, beforeEach */
import Spectangular from '../node_modules/spectangular/dist/spectangular.js';
import * as SpectangularMdLibrary from '../node_modules/spectangular/dist/libraries/md/md.js';

Spectangular.baseUrl = 'https://material.angularjs.org/latest';
Spectangular.library = SpectangularMdLibrary;

describe('Demo of menu buttons', function () {

    /**
     * Loads the page https://material.angularjs.org/latest/#/demo/material.components.menu and waits for the element
     * with css selector .demo-toolbar.
     */
    beforeEach(function () {
        Spectangular.loadPage('/#/demo/material.components.menu', '.demo-toolbar');
    });

    /**
     *  Opens the menu button in the Basic Usage section and clicks on the 'redial' option.
     *  Note that a rootEl specifies the Basic Usage section . This is used as container or parent element
     *  for the 'redial' menu button.
     *
     *  The dialog is opened and the confirm button 'That was easy' is selected.
     */
    it('should open menu in Basic Usage and click on redial', function () {
        var rootEl = $('[demo-id=\"menudemoBasicUsage\"]');
        expect(rootEl.isPresent()).toBe(true);
        Spectangular
            .menuButton({rootEl: rootEl})
            .openAndClickItem({text: 'redial'});
        Spectangular
            .dialog({})
            .clickButton({text: 'That was easy'});
    });
});