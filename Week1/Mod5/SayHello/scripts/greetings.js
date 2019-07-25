"use strict";

function greetUser()
{
    const userName = document.getElementById("name");
    let name = userName.value;
    alert("Hello " + name)
}

window.onload = function()
{
    const btn = document.getElementById("helloBtn");
    btn.onclick = greetUser;
}

