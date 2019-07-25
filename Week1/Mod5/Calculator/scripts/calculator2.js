"use strict";


function add()
{   
    let num1 = document.getElementById("num1").value;
    num1 = parseFloat(num1);

    let num2 = document.getElementById("num2").value;
    num2 = parseFloat(num2);

    let sum = num1 + num2;

    const answerField = document.getElementById("answer");
    answerField.value = sum;
}

function subtract()
{
    let difference = num1 - num2;

    const answerField = document.getElementById("answer");
    answerField.value = difference;
}

function multiply()
{
    let product = num1 * num2;

    const answerField = document.getElementById("answer");
    answerField.value = product;
}

function divide()
{
    let quotient = num1 / num2;

    const answerField = document.getElementById("answer");
    answerField.value = quotient;
}

window.onload = function()
{
    
    let btn = document.getElementById("Add");
    btn.onclick = add;
    btn = document.getElementById("Subtract");
    btn.onclick = subtract;
    btn = document.getElementById("Multiply");
    btn.onclick = multiply;
    btn = document.getElementById("Divide");
    btn.onclick = divide;
}