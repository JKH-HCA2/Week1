"use strict";
var IR = 2;
var totalSavings = 1000;
var doubledSavings = totalSavings * 2
var timeToDouble = 72 / IR;
console.log("At a " + IR + "% interest rate, your savings account will be worth " + doubledSavings.toFixed(2) + " in " + timeToDouble.toFixed(1) + " years")