"use strict";

function ftoc()
{
    let fahrenheit = document.getElementById("ftemp").value;
    fahrenheit = parseFloat(fahrenheit);

    let celsius = (fahrenheit - 32) * (5 / 9);

    const answerField = document.getElementById("answer");
    answerField.value = celsius;
}

window.onload = function()
{
    const btn = document.getElementById("fConvert")
    btn.onclick = ftoc;
}