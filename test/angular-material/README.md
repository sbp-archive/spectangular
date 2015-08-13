# Integration tests of spectangular

Integration tests are executed against the demo website of Angualar material:
 [https://material.angularjs.org/latest](https://material.angularjs.org/latest)

The source code is in ECMA6.

## Installation

`npm install`

## Transpile to ECMA5

Open a console and execute:

`grunt dev`

The source code is now transpiled (babel)in the dist folder as ECMA5 source code. 

**Important!** The transpiled code in the dist folder is also committed! Make sure you always transpile your changes
before committing changes.

# Chrome with direct connect

Configure conf.js 

`directConnect:true` 

Chrome is the default browser

# Firefox with webdriver

Configure conf.js

`
  capabilities: {'browserName' : 'firefox'},
  directConnect:false
`

Installation of the webdriver manager for protractor
`npm run-script up-driver`

Run in a separate console in order to start the webdriver manager
`npm run-script driver`

# Run the tests
`grunt test`

