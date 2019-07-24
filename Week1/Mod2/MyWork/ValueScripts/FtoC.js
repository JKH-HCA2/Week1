"use strict";

function convertFtoC(currentTemp)
{
    var celsiusTemp = (currentTemp - 32) * (5 / 9);
    return celsiusTemp;
}

var a = -40, celsiusTemp;
celsiusTemp = convertFtoC(a);

console.log("The current temperature in celsius is " + celsiusTemp.toFixed(2) + " degrees.")