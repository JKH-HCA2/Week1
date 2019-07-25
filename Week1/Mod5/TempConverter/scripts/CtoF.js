"use strict";

function ctof()
{
    let celsius = document.getElementById("ctemp").value;
    celsius = parseFloat(celsius);

    let fahrenheit = (celsius * 1.8) + 32;

    const answerField = document.getElementById("answer");
    answerField.value = fahrenheit;
}

window.onload = function()
{
    const btn = document.getElementById("cConvert")
    btn.onclick = ctof;
}