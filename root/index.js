/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

'use strict';

// libs
var util = require('util');
var Stream = require('stream');

// main
function {%= cls %}() {
  Stream.call(this);
  this.readable = true;
  this.writable = true;
}
util.inherits({%= cls %}, Stream);

// exports
module.exports = function() {
  return new {%= cls %}();
};
module.exports.{%= cls %} = {%= cls %};

// write
{%= cls %}.prototype.write = function(buf) {
  var self = this;
  self.emit('data', buf);
  self.emit('drain');
  return false;
};

// end
{%= cls %}.prototype.end = function(buf) {
  if (buf) this.write(buf);
  self.emit('end');
};

// destroy
{%= cls %}.prototype.destroy = function() {
  this.emit('close');
};
