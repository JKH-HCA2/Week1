"use strict";
// Tax Calculator
// Author: Jeremy Han

// Social Security Tax Calculator
function calculatePay()
{
    let hoursWorked = document.getElementById("hoursWorked").value;
    hoursWorked = parseFloat(hoursWorked);

    let payRate = document.getElementById("payRate").value;
    payRate = parseFloat(payRate);

    let grossPay = hoursWorked * payRate;

    const payField = document.getElementById("grossPay");
    payField.value = grossPay.toFixed(2);

    let socSecTax = grossPay * .062;

    const ssTax = document.getElementById("socSecTax");
    ssTax.value = socSecTax.toFixed(2);

    let medicareTax = grossPay * .0145;

    const medTax = document.getElementById("medTax");
    medTax.value = medicareTax.toFixed(2);

    let withholdingCode = document.getElementById("withholdingCode").value;
    withholdingCode = parseFloat(withholdingCode);

    var fedTaxRate;

    if (withholdingCode == 0)
    {
        fedTaxRate = .23;
    }
    else if (withholdingCode == 1)
    {
        fedTaxRate = .21;
    }
    else if (withholdingCode == 2)
    {
        fedTaxRate = .195;
    }
    else if (withholdingCode == 3)
    {
        fedTaxRate = .185;
    }
    else
    {
        fedTaxRate = (.18 - (.005 * (withholdingCode - 4)));
    }
    if (fedTaxRate < 0)
    {
        fedTaxRate = 0
    }

    let fedTax = grossPay * fedTaxRate

    const federalTax = document.getElementById("fedTax");
    federalTax.value = fedTax.toFixed(2);

    let netPay = grossPay - medicareTax - socSecTax - fedTax;

    const netIncome = document.getElementById("netPay");
    netIncome.value = netPay.toFixed(2);

}

window.onload = function()
{
    const btn = document.getElementById("payCalculator")
    btn.onclick = calculatePay;
}