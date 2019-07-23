"use strict";
// User input
var time = 14;
// Calculator
var greeting;

if (time < 10) 
{
    greeting = "Good morning!";
}
else if (time < 17 ) 
{
    greeting = "Good day!"
}
else 
{
    greeting = "Good evening!"
}

console.log(greeting)