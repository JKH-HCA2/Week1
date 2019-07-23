"use strict";
// input
var hoursWorked = 45;
var payRate = 10;

if ( hoursWorked < 40 )
{
    var totalPay = hoursWorked * payRate;
}
else {
    var totalPay = (40 * payRate) + (hoursWorked - 40) * (1.5 * payRate);
}

console.log("Your pay is " + totalPay)

