"use strict";
// input
var total = 200;

// calculators
var disc1 = .9;
var disc2 = .8;
var tax = 1.08

if ( total < 100 ) {
    var subTotal = total * tax;
}
else {
    if ( total < 250 ) {
        var subTotal = total * disc1 * tax;
    }
    else {
        var subTotal = total * disc2 * tax;
    }
}

console.log("Your subtotal is $" + subTotal.toFixed(2))