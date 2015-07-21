# Spectangular

Simple Protractor e2e Component Testing for Angular

This library helps with writing e2e tests for Angular applications by supporting the navigation to 
and interaction with web elements.  The library uses Protactor [Protractor-jasmine](https://angular.github.io/protractor/#/). 

# Protractor version

The current supported Protractor version is 2.1.0.
 
# Demo application

The demo application uses [Angular material](https://material.angularjs.org/latest/#/)
 
[Demo spectangular](https://github.com/mgijsbertihodenpijl/spectangular-demo) 

# Installation

`npm install`

Declare the library as node module into the package.json of your application.


# Development (ECMAscript 6)

Because the components are written in ECMAscript 6, the code is transpiled with Babel. During development you can watch 
and transpile the code automatically into the dist folder.
 
`grunt dev`

# Example 1: login page

This example explains how to write an e2e test for a login page. The login page contains a form with two input fields, one
for the username and one for the password and a submit button. The page starts on http://localhost:8080/#/inloggen.

There are small differences between ECMAscript 5 and 6 in declaring the spectangular library 

## ECMAscript 6 
<pre><code class="language-javascript" >
import Spectangular from '../node_modules/spectangular/dist/spectangular.js';
import * as SpectangularMdLibrary from '../node_modules/spectangular/dist/libraries/md/md.js';
</code></pre>

## ECMAscript 5 
<pre><code class="language-javascript" >
var Spectangular = require('../node_modules/spectangular/dist/spectangular.js'');
var SpectangularMdLibrary = require('../node_modules/spectangular/dist/libraries/md/md.js');
</code></pre>


The example (ECMA6script) :  

<pre><code class="language-javascript" >
import Spectangular from '../node_modules/spectangular/dist/spectangular.js';
import * as SpectangularMdLibrary from '../node_modules/spectangular/dist/libraries/md/md.js';

Spectangular.baseUrl = 'http://localhost:8080';
Spectangular.library = SpectangularMdLibrary

//loads the startpage        
Spectangular.loadPage('/#/start/', 'input#username');

//selectors and data for the form       
var buttonText = 'Save';
var formData = [
  {"model": "user.username", "value": "admin", "type": "textfield"},
  {"model": "user.password", "value": "welcome", "type": "textfield"}
]

//execution
Spectangular.form({
  selector: '[name=\"userForm\"]',
  data: formData
})

//save the form
Spectangular.button({text: buttonText}).click();       
</code></pre>

## Spectangular

The Spectangular library is declared in the package.json in your application and as such installed with `npm install`. 
Make sure that the **dist** folder is used !

<pre><code class="language-javascript" >
import Spectangular from '../node_modules/spectangular/dist/spectangular.js';
import * as SpectangularMdLibrary from '../node_modules/spectangular/dist/libraries/md/md.js';

Spectangular.baseUrl = 'http://localhost:8080';
Spectangular.library = SpectangularMdLibrary;
</code></pre>

 
## Adapters

<pre><code class="language-javascript" >
import * as SpectangularMdLibrary from '../node_modules/spectangular/dist/libraries/md/md.js';
Spectangular.library = SpectangularMdLibrary;
</code></pre>

Spectangular is extensible with different adapters for the support different frontend libraries. 
At the start of the test you have to declare the library module. 

## Spectangular

`import * as SpectangularMdLibrary from '../node_modules/spectangular/dist/libraries/md/md.js'`
`Spectangular.library = SpectangularMdLibrary`

## Base Url

`Spectangular.baseUrl = 'http://localhost:8080';;`

The baseUrl is the start url of your application.

`Spectangular.loadPage('/#/start/', 'input#username');`

The loadPage function is used for the start page. The browser navigates to the baseUrl and waits on Angular to load 
the location ('/#/login/').The second argument ('input#username') is a css selector. The browser waits until the web 
element with this css selector is loaded into the start page.  For this example, the browser waits until an input field 
with id 'username' is loaded on the start page. 

## Form 

<pre><code class="language-javascript" >
var formData = [
  {"model": "user.username", "value": "admin", "type": "textfield"},
  {"model": "user.password", "value": "welcome", "type": "textfield"}
]

Spectangular.form({
  selector: '[name=\"userForm\"]',
  data: formData
})
</code></pre>
 
Spectangular.form is used for navigation and interaction with form input fields.
  
The formData variable is a JSON object with the configuration for the formHelper. Each row defines the field and the 
value is will have during the test.
 
## CSS selector

The library uses [css selectors](http://www.w3.org/TR/css3-selectors/) to find the web elements on the page. 

`selector: '[name=\"userForm\"]',`

The css selector defines an web element with attribute name and value 'userForm'. This element is the container element
of the form, which contains all the input fields. 

## type attribute

The type defines the type of input field. The supported type of fields are:

 - textfield
 - textarea
 - selectfield 
 - datefield
 - checkbox
 - searchfield
  
## model attribute

The model attribute is the unique ng-model attribute of the field. For example:
  
```
<material-input-group ng-model="user.username">   
    <label>Gebruikersnaam</label>   
    <input></input>
</material-input-group>
```

The userName field has an unique ng-model attribute with value user.username. The e2e test will navigate to the field
with the attribute ng-model 'user.username' as css selector.

**Important** Make sure that each field contains an unique ng-model. If the ng-model is not unique, 
Selenium will give a warning. For example:

`....WARNING - more than one element found for locator By.cssSelector(".checkboxDemo1") - the first result will be used`

You cannot use the form but need to use unique css selectors for each field. 

For example:

`Spectangular.input({selector: '[ng-click=\"showListBottomSheet($event)\"]'}).sendKeys('Hi!');`

## value attribute

The value attribute is the value the field will have when the test is executed. In this example, the username field will
have the value 'admin' and the password field will have the value 'welcome'.
  
# Example 2: table with menu

Open the menu in a table row.

<pre><code class="language-javascript" >
Spectangular
  .table({selector: 'material-gridlist.overview'})
  .getRowMenuButton(0)
  .openAndClickItem({text: 'Update'});
</code></pre>

## table

`Spectangular
  .table({selector: 'material-gridlist.overview'})
`

Finds the table with css selector 'material-gridlist.overview'.

## getRowMenuButton(0)

`.getRowMenuButton(0)`

Gets the first row (0) of the table

## openAndClickItem({text: 'Update'})

Opens the menu item 'Update' and clicks on the menu item.
    

# Example 3: drawer and tabs

This example opens a drawer, waits until the drawer is visible and switches to a tab 'Out'

<pre><code class="language-javascript" >
Spectangular.drawer({selector: '[drawer-id=\"drawer-messages-add\"]'})
  .whenVisible()
  .switchTab({label: 'Out'});
</code></pre>

## whenVisible

WhenVisible uses the [Protractor Expected Conditions] (https://angular.github.io/protractor/#/api?view=ExpectedConditions) 


 