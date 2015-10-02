'use strict';
/*jslint indent: 2, nomen: true, devel: true, browser: true*/
/*global $ */


/*
 * Dependencies (are concatened by gulpfile…)
 */

var Form = function () {
  $('select').dropdown();
  return this;
};

module.exports = new Form();
