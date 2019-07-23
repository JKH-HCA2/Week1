"use strict";
// User Inputs
var filingStatus = "Single";
var incomeRange = 60000;

// Calculators
var taxRate;

if (filingStatus == "Single" && incomeRange < 12000) 
{
    taxRate = .05;
}
else if (filingStatus == "Joint" && incomeRange < 12000) 
{
    taxRate = 0;
}
else if (filingStatus == "Single" && incomeRange < 25000) 
{
    taxRate = .1;
}
else if (filingStatus == "Joint" && incomeRange < 25000) 
{
    taxRate = .06;
}
else if (filingStatus == "Single" && incomeRange < 75000) 
{
    taxRate = .15;
}
else if (filingStatus == "Joint" && incomeRange < 75000) 
{
    taxRate = .11;
}
else 
{
    taxRate = .2;
}

console.log("My federal tax burden is $" + ( taxRate * incomeRange))
console.log("My social security tax burden is $" + (incomeRange * .062))
console.log("My medicare tax burdern is $" + (incomeRange * .0145))