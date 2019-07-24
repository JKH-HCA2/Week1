"use strict";
// User input
var departmentCode = 20;

// Output
var departmentName;

switch (departmentCode)
{
    case 1:
        departmentName = "Marketing";
        break;
    case 5:
        departmentName = "Human Resources";
        break;
    case 10:
        departmentName = "Accounting";
        break;
    case 12:
        departmentName = "Legal";
        break;
    case 18:
        departmentName = "IT";
        break;
    case 20:
        departmentName = "Customer Relations";
        break;
    default:
        departmentName = "<unknown>";
}

console.log("Your department is " + departmentName)
