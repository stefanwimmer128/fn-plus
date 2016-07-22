/**
 * fn+ is a very useful library for functional programming
 * @author Stefan Wimmer <stefanwimmer128@gmail.com>
 * @licence
 * Copyright (c) 2016, Stefan Wimmer
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "name": "fn-plus",
  "version": "0.1.0",
  "description": "fn+ is a very useful library for functional programming",
  "main": "src/fn-plus.js",
  "scripts": {
    "build": "bin/build"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/stefanwimmer128/fn-plus.git"
  },
  "keywords": [
    "fn-plus",
    "fn",
    "function",
    "functional",
    "programming"
  ],
  "author": "Stefan Wimmer <stefanwimmer128@gmail.com>",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/stefanwimmer128/fn-plus/issues"
  },
  "homepage": "https://github.com/stefanwimmer128/fn-plus#readme",
  "devDependencies": {
    "browserify": "^13.0.1",
    "jsdoc-to-markdown": "^1.3.6"
  }
}

},{}],2:[function(require,module,exports){
/**
 * fn+ is a very useful library for functional programming
 * @author Stefan Wimmer <stefanwimmer128@gmail.com>
 * @licence
 * Copyright (c) 2016, Stefan Wimmer
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

/**
 * fn+ namespace
 * @type {{}}
 * @since 0.1.0
 */
const fn = {};

/**
 * Get fn+ version
 * @return {String} fn+ version
 * @since 0.1.0
 */
fn.version = () =>
    require("../package.json").version;

module.exports = fn;

},{"../package.json":1}]},{},[2]);