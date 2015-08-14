/**
 * Created by mgijsbertihodenpijl on 13/08/15.
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

describe('Demo of menu buttons', function () {

    /**
     * Loads the page https://material.angularjs.org/latest/#/demo/material.components.menu and waits for the element
     * with css selector .demo-toolbar.
     */
    beforeEach(function () {
        _node_modulesSpectangularDistSpectangularJs2['default'].loadPage('/#/demo/material.components.menu', '.demo-toolbar');
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
        _node_modulesSpectangularDistSpectangularJs2['default'].menuButton({ rootEl: rootEl }).openAndClickItem({ text: 'redial' });
        _node_modulesSpectangularDistSpectangularJs2['default'].dialog({}).clickButton({ text: 'That was easy' });
    });
});
