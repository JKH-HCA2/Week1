"use strict";
// User Inputs
var studentName = "Betty"
var majorCode = "MKTG";

// Outputs
var majorName;
var departmentOffice;

switch (majorCode) 
{
    case "BIOL":
        majorName = "Biology";
        departmentOffice = "Science Bldg, Room 310";
        break;
    case "CSCI":
        majorName = "Computer Science";
        departmentOffice = "Sheppard Hall, Room 314";
        break;
    case "ENG":
        majorName = "English";
        departmentOffice = "Kerr Hall, Room 201";
        break;
    case "HIST":
        majorName = "History";
        departmentOffice = "Kerr Hall, Room 114";
        break;
    case "MKT":
        majorName = "Marketing";
        departmentOffice = "Westly Hall, Room 310";
        break;
    default:
        majorName = "<unknown>";
        departmentOffice = "<unknown>";

}


console.log("Student: " + studentName)
console.log("Major: " + majorName)
console.log("Advising Location: " + departmentOffice)