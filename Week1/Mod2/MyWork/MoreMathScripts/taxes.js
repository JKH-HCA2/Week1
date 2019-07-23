"use strict";
var gross = 1000;
var tax = .23;
var taxWithheld = gross * tax;
console.log("With a gross salary of " + gross + " and a federal tax rate of " + tax + " your total tax withheld is " + taxWithheld.toFixed(2));