'use strict';
/*jslint indent: 2, nomen: true, node: true, devel: true, browser: true, vars: true*/
/*global jQuery */

/*
 * Global, used with browserify-shim (more info: see package.json)
 */
var concatenify = require('concatenify');
var $ = require('jquery');
var _ = require('underscore');

require('TweenMax');

/*
 * MyApp Class
 */
var MyApp = function () {
  return this;
};


/*
 * Init
 */
MyApp.prototype.init = function () {

  // Dependencies
  var Mq = require('./parts/Mq.js');
  var Nav = require('./parts/Nav.js');
  require('./parts/Form.js');

  Mq.register('large', {
    match : function () {
      Nav.hide();
    }
  });
  console.log('MyApp.init');
  console.log(_.uniqueId('MyApp_'));
};

document.addEventListener('DOMContentLoaded', function () {
  (new MyApp()).init();
});
