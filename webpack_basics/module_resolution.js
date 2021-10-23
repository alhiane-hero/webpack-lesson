// Absolute paths:
const other = require("/Users/alhiane/Documents/Programming/javascript development/client-side/javascript with elzero/webpack/other.js");
other.log("Welcome Webpack By Absolute Paths");

// Relative paths:
const relativeOther = require('./other.js');
relativeOther.log("Welcome Webpack By Relative Paths");

// Module paths:
const mod = require("mod");
mod.log("Welcome Webpack By Module Paths");