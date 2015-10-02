'use strict';
/*jslint indent: 2, nomen: true, devel: true, browser: true*/
/*global concatenify */

/*
 * Dependencies
 */
// var enquire = concatenify('./enquire/enquire.js');
var enquire = require('enquire');
var breakpoints = JSON.parse(require('./breakpoints.json'));

/*
 * Mq Class
 */
var Mq = function () {
  // Convert pixel values to em values (based on 1em = 16px)
  this._px2em = function (px) {
    var value = parseInt(px.replace('px', ''), 10);
    return Math.round(value / 16) + 'em';
  };
  // Concvert pixel values to em values - 0.01em (for max-width breakpoints, mobile first)
  this._px2emMax = function (px) {
    var em = this._px2em(px),
      value = em.replace('em', '');
    return parseInt(value, 10) - 0.01 + 'em';
  };
};

/**
 * Register breakpoints for media queries detection
 * @param  {string} minWidth  breakpoint label
 * @param  {string} maxWidth  breakpoint label for max-width (min AND max)
 * @param  {object} actions   map with enquire.js "actions" (match|unmatch|setup|deferSetup|destroy) and associated values (function|boolean[deferSetup])
 * @return {void}
 */
Mq.prototype.register = function (minWidth) {
  var maxWidth,
    actions,
    mq,
    i = 1,
    j = 2;

  mq = 'screen and (min-width:' + breakpoints[minWidth] + ')';

  if (typeof arguments[i] === "string") {
    maxWidth = arguments[i];
    actions = arguments[j];
    mq += ' and (max-width:' + this._px2emMax(breakpoints[maxWidth]) + ')';
  } else {
    maxWidth = false;
    actions = arguments[i];
  }

  enquire.register(mq, actions);
};

module.exports = new Mq();
