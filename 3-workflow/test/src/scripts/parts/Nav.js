'use strict';
/*jslint indent: 2, nomen: true, devel: true, browser: true, vars: true*/
/*global $, _ */

var _ = require('underscore');

var Nav = function () {
  this.$body = $('body');
  this.$trigger = $('.nav__trigger');

  this.$trigger.on('click', $.proxy(this.onClick, this));
  console.log(_.uniqueId('Nav_'));
};

Nav.prototype.onClick = function () {
  this.$body
    .toggleClass('nav-is-open')
    .toggleClass('overlay-is-visible');
};

Nav.prototype.hide = function () {
  this.$body
    .removeClass('nav-is-open')
    .removeClass('overlay-is-visible');
};

module.exports = new Nav();
