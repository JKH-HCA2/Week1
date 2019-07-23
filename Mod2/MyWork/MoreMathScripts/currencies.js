"use strict";

// input
var numUsDollars = 100;
var targetCurrency = "Yen";


// calculators
var Yen = 107.90;
var Euro = .89;

if (targetCurrency == "Yen" ) {
    var total = Yen * numUsDollars;
    console.log("Your Yen total is " + total);
}   else {
    var total = Euro * numUsDollars;
    console.log("Your Euro total is " + total);
}