"use strict";
// Tax Calculator
// Author: Jeremy Han

// Social Security Tax Calculator
function getSocSecTax(gross)
{
    var socSecTax = gross * .062;
    return socSecTax;
}

// Medicare Tax Calculator
function getMedicareTax(gross)
{
    var medicareTax = gross * .0145;
    return medicareTax;
}

// Federal Tax Calculator
function getFederalTax(gross, withholdingCode)
{
    var fedTax;
    
    if (withholdingCode == 0)
    {
        fedTax = gross * .23;
    }
    else if (withholdingCode == 1)
    {
        fedTax = gross * .21;
    }
    else if (withholdingCode == 2)
    {
        fedTax = gross * .195;
    }
    else if (withholdingCode == 3)
    {
        fedTax = gross * .185;
    }
    else
    {
        fedTax = gross * (.18 - (.005 * (withholdingCode - 4)));
    }
    if (fedTax < 0)
    {
        fedTax = gross * 0
    }
    return fedTax;
}

// Tax Inputs
var gross = 1550;
var code = 2;

var socSecTaxBurden = getSocSecTax(gross);
var medTaxBurden = getMedicareTax(gross);
var fedTaxBurden = getFederalTax(gross, code);

console.log("My social security tax burden is $" + socSecTaxBurden.toFixed(2))
console.log("My medicare tax burden is $" + medTaxBurden.toFixed(2))
console.log("My federal tax burden is $" + fedTaxBurden.toFixed(2))