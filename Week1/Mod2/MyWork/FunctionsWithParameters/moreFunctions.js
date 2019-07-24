"use strict";

// Mailing Label Generation
function displayMailingLabel(name, address, city, state, zip)
{
    var displayMailingLabel = name + "\n" + address + "\n" + city + "\n" + state + "\n" + zip
    console.log(displayMailingLabel)
}

// Add Number Function
function addNumbers(num1, num2)
{
    var addNumbers = num1 + " + " + num2 + " = " + (num1 + num2)
    console.log(addNumbers)
}

// Subtract Number Function
function subtractNumbers(num1, num2)
{
    var subtractNumbers = num1 + " - " + num2 + " = " + (num1 - num2)
    console.log(subtractNumbers)
}

// Multiply Number Function
function multiplyNumbers(num1, num2)
{
    var multiplyNumbers = num1 + " x " + num2 + " = " + (num1 * num2)
    console.log(multiplyNumbers)
}

// Divide Number Function
function divideNumbers(num1, num2)
{
    var divideNumbers = num1 + " / " + num2 + " = " + (num1 / num2)
    console.log(divideNumbers)
}


// Display Receipt Function
function displayReceipt(totalDue, amountPaid)
{
    var displayReceipt = "Total Due: $" + totalDue + "\n" + "Amount Paid: $" + amountPaid + "\n" + "Change Due: $" + (amountPaid - totalDue)
    console.log(displayReceipt)
}


// All Functions
displayMailingLabel("Jeremy Han", "86 School Street", "Manchester", "Connecticut", "06010"); 
addNumbers(30,60); 
subtractNumbers(30,60); 
multiplyNumbers(30,60); 
divideNumbers(30,60); 
displayReceipt(22.50,25);