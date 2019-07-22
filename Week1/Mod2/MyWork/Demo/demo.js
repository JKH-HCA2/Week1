"use strict";
var foodCost = 79.25;
var tax = 6.54;
var tip = 12.00;
var totalDue = foodCost + tax + tip;

// simple output
console.log("the total due is " + totalDue);

// or more descriptive output 
console.log (
    "Food cost is " + foodCost + " and tax is " + tax);
console.log("tip is " + tip.toFixed(2));
console.log("total Due is " + totalDue);