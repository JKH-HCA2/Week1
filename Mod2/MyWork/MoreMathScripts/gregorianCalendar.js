"use strict";
// Input
var year = 2012;

// Criteria
var cri1 = year % 4;
var cri2 = year % 100;
var cri3 = year % 400;

if (cri3 == 0) {
    var leapYear = "Yes";
}
else {
    if (cri2 == 0) {
        var leapYear = "No";
    }
    else {
        if (cri1 == 0) {
            var leapYear = "Yes";
        }
        else {
            var leapYear = "No";
        }
    }
}

console.log("Is " + year + " a leap year? " + leapYear)