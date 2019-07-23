"use strict";
// User Inputs
var studentName = "Betty";
var studentMajor = "ENG";

// Calculators
var departmentOffice;

if (studentMajor == "BIOL") 
{
    studentMajor = "Biology"; departmentOffice = "Science Bldg, Room 310";
}
else if (studentMajor == "CSCI") 
{
    studentMajor = "Computer Science"; departmentOffice = "Sheppard Hall, Room 314";
}
else if (studentMajor == "ENG") 
{
    studentMajor = "English"; departmentOffice = "Kerr Hall, Room 201";
}
else if (studentMajor == "HIST") 
{
    studentMajor = "History"; departmentOffice = "Kerr Hall, Room 114";
}
else if (studentMajor == "MKT") 
{
    studentMajor = "Marketing"; departmentOffice = "Westly Hall, Room 310";
}

console.log("Student: " + studentName)
console.log("Major: " + studentMajor)
console.log("Advising Location: " + departmentOffice)