"use strict";
var x1 = 5;
var x2 = 7;
var y1 = 10;
var y2 = 20;
var distance = Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2));
console.log("The distance between points (" + x1 + ", " + y1 + ") and (" + x2 + ", " + y2 + ") is " + distance.toFixed(3));