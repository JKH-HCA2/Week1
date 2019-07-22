"use strict";
var sideLength = 20;
var width = 15;
var tilesPerBox = 12;
var boxesToBuy = Math.ceil(((sideLength * width) * 1.1) / tilesPerBox);
console.log("for a " + sideLength + "' x " + width + "' room, you would need to buy " + boxesToBuy + " boxes of " + tilesPerBox + " tiles")