# 2. Guidelines

This is about naming conventions, architecture, …

## WP example

```bash
∟ src/
    ∟ mytheme/
        ∟ fonts/
        ∟ images/
        ∟ scripts/
            ∟ …
        ∟ styles/
            ∟ …
∟ dist/
    ∟ wp-admin/
    ∟ wp-content/
        ∟ themes/
            ∟ mytheme/
                ∟ fonts/
                ∟ images/
                ∟ scripts/
                    ∟ main.min.js
                ∟ styles/
                    ∟ main.min.css
    ∟ wp-includes/
    ∟ …
```

## SASS

### Naming

dash-case

```scss
$my-variable: 'foo';
@function my-function () {};
@mixin my-mixin() {};
```

### Folder structure: `src/…/styles/`

```bash
∟ styles/
    ∟ helpers/
        ∟ _variables.scss
        ∟ _functions.scss
        ∟ _mixins.scss
        ∟ _extends.scss
        ∟ _utils.scss
    ∟ vendor/
        ∟ _foundation.scss
        ∟ _jquery-ui.scss
        ∟ _susy.scss
        ∟ …
    ∟ base/
        ∟ _normalize.scss
        ∟ _reset.scss
        ∟ _typography.scss
        ∟ …
    ∟ layout/
        ∟ _grid.scss
        ∟ _global.scss
        ∟ _header.scss
        ∟ …
    ∟ components/
        ∟ _buttons.scss
        ∟ _nav.scss
        ∟ _slider.scss
        ∟ …
    ∟ _dev.scss
    ∟ _shame.scss
    ∟ main.scss
```

### File structure: `src/…/styles/main.scss`

```scss
/* Data */ // shared data between Sass and JS, created by gulp task
@import 'helpers/breakpoints';

/* helpers */ // -> $var, @function, @mixin, @extend, .utility-classes
@import 'helpers/variables';
@import 'helpers/functions';
@import 'helpers/mixins';
@import 'helpers/extends';
@import 'helpers/utils';

/* vendor */ // -> 3rd party partials
@import 'vendor/sass-mq/mq';
@import 'vendor/foundation';
@import 'vendor/jquery-ui';
@import 'vendor/normalize';

/* base */  // -> reset(s) and basic rules
@import 'base/reset';
@import 'base/typography';

/* layout */ // -> structure and design
@import 'layout/grid';
@import 'layout/global';
@import 'layout/header';

/* components */ // -> pieces of code that are more reusable or common
@import 'components/buttons';
@import 'components/navigation';
@import 'components/slider';

/* to fix and delete */
@import 'dev';
@import 'shame';
```

### Readings

+ [MindBEMding](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) [M]
+ [BEM](https://en.bem.info/) [S]
+ [SMACSS](https://www.dropbox.com/sh/tnyykngjw8y9ps1/AAB1cCkpvcgTuoFhsB7tRNuga?dl=0) [C]
+ [OOCSS](http://oocss.org/) [W]
+ [BEM et OOCSS](http://www.alsacreations.com/article/lire/1641-bonnes-pratiques-en-css-bem-et-oocss.html) [W]


## JavaScript

### Naming

camelCase

```js
var myVariable;

function myFunction() {}
var myFunction : function () {};

var MyClass = function () {};
MyClass.prototype.myMethod = function () {};

var MY_CONSTANT; // (const MY_CONSTANT -> ES2015/6)
```

### Folder structure: `src/scripts/`

```
∟ scripts/
    ∟ lib/
        ∟ moment
            ∟ moment.js
        ∟ gsap
            ∟ …
                ∟ TweenLite.js
        ∟ …
    ∟ parts/
        ∟ Menu.js
        ∟ Slider.js
        ∟ Map.js
        ∟ …
    ∟ vendor/
        ∟ custom.modernizr.min.js
        ∟ jquery-2.1.4.min.js
        ∟ …
    ∟ main.js
```

+ `scripts/lib`: 3rd-party scripts for `require()` (or concat, see gulpfile scriptsConcat)
+ `scripts/parts`: feature modules (`require()`)
+ `scripts/vendor`: 3rd-party scripts loaded from CDN (vendor = local fallback) or outside the main file (modernizr)
+ `main.js`: also called sometimes io.js… ^_^

### File structure: `src/scripts/main.js` (eg, must be completed)

```js
'use strict';
/*jslint indent: 2, nomen: true, node: true, devel: true, browser: true, vars: true*/

/*
 * Global, used with browserify-shim (see package.json)
 */
var $ = require('jquery');

// NPM modules (directly from node_modules)
var  _ = require('underscore');
// Other modules (see package.json, browser property)
require('TweenMax');
// Other modules (via relative path)
var Mq = require('./lib/Mq.js');

/*
 * MyProject Class
 */
var MyApp = function () {
  return this;
};


/*
 * Method
 */
MyApp.prototype.myMethod = function () {

  // Dependencies
  /*jslint vars: true*/
  var Mq = require('./lib/Mq.js');
  var Nav = require('./parts/Nav.js');
  require('./parts/News.js');
  /*jslint vars: false*/

  require('./parts/Form.js');

  Mq.register('large', {
    match : function () {
      Nav.hide();
    }
  });
};

document.addEventListener('DOMContentLoaded', function () {
  (new MyApp()).init();
});

```

### Browserify config: `package.json`

```json
{
  …,
  "devDependencies": {
    …,
    "underscore": "^1.8.3",
    …
  },
  "browser": {
    "jquery": "./src/scripts/vendor/jquery-2.1.4.min.js",
    "TweenMax": "./src/scripts/lib/greensock-js/src/uncompressed/TweenMax.js",
  },
  "browserify": {
    "transform": [
      "browserify-shim"
    ]
  },
  "browserify-shim": {
    "jquery": "global:$"
  }
}
```
