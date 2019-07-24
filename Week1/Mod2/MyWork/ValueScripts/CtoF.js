"use strict";

function convertCtoF(currentTemp)
{
    var fahrenheitTemp = (currentTemp * 1.8) + 32;
    return fahrenheitTemp;
}

var a = -7, fahrenheitTemp;
fahrenheitTemp = convertCtoF(a);

console.log("The current temperature in fahrenheit is " + fahrenheitTemp.toFixed(2) + " degrees.")