"use strict";
exports.__esModule = true;
var fs = require("fs");
var inputFile = fs.readFileSync('input.txt', 'utf8').split('\n');
var maxAllowed = {
    red: 12,
    green: 13,
    blue: 14
};

var result = 0;
var bigResult = 0;
for (var game = 1; game < inputFile.length+1; game++) {
    var red = 0;
    var green = 0;
    var blue = 0;

    var cubes = inputFile[game - 1].split(': ')[1];
    var cubeSet = cubes.split('; ');
    var illegal = false;
    for (var index = 0; index < cubeSet.length; index++) {
        var colorQuantities = cubeSet[index].split(',').map(function (item) { return item.trim().split(' '); });
        colorQuantities.forEach(function (_a) {
            var quantityStr = _a[0], color = _a[1];
            var quantity = parseInt(quantityStr, 10);



            if (color === 'red' && quantity > red) {
                red = quantity
            } else if (color === 'blue' && quantity > blue) {
                blue = quantity
            } else if (color === 'green' && quantity > green) {
                green = quantity
            }

            if (quantity > maxAllowed[color]) {
                illegal = true;
                return;
            }
        });
    }
    bigResult += (red * green * blue);
    if (!illegal) {
        console.log(`Game: ${game - 1} red: ${red} green: ${green} blue: ${blue}`)
        
        result += game;
    }
    illegal = false;
}

console.log(result)
console.log(bigResult)