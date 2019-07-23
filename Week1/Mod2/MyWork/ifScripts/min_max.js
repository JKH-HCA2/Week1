"use strict";
// User Inputs
var a = 6;
var b = 42;
var c = 22;

// Output
var min;
var max;

if (a < b && a < c && b < c) 
{
    min = a; max = c;
}
else if (a < b && a < c && c < b) 
{
    min = a; max = b;
}
else if (b < a && b < c && a < c) 
{
    min = b; max = c;
}
else if (b < a && b < c && c < a) 
{
    min = b; max = c;
}
else if (c < a && c < b && a < b) 
{
    min = c; max = b;
}
else if (c < a && c < b && b < a) 
{
    min = c; max = a;
}

console.log("Min is " + min + " and the max is " + max)