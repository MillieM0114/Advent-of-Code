"use strict";
exports.__esModule = true;
var fs = require("fs");
var inputFile = fs.readFileSync('input.txt', 'utf8').split(/\r?\n/);
var rows = inputFile.length;
var cols = inputFile[0].length;
var parts = [];
var schemasymbols = [];
function findSymbols() {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (inputFile[i].charAt(j) !== "." && isNaN(parseFloat(inputFile[i].charAt(j)))) {
                schemasymbols.push({ row: i, col: j, adjacentParts: [] });
            }
        }
    }
}
function findParts(input) {
    for (var row = 0; row < input.length; row++) {
        var line = input[row];
        var currentNumber = '';
        var startPos = -1;
        for (var col = 0; col < line.length; col++) {
            var char = line[col];
            if (!isNaN(parseInt(char))) {
                // If the character is a digit, append it to the currentNumber
                if (startPos === -1) {
                    startPos = col; // Set the start position if it's the beginning of a number
                }
                currentNumber += char;
            }
            else if (currentNumber !== '') {
                // If the character is not a digit and currentNumber is not empty, record the position
                var endPos = col - 1; // Set the end position
                parts.push({
                    row: row,
                    startPos: startPos,
                    endPos: endPos,
                    partNbr: parseInt(currentNumber)
                });
                currentNumber = ''; // Reset currentNumber
                startPos = -1; // Reset startPos
            }
        }
        // Check for the last number in the row
        if (currentNumber !== '') {
            var endPos = line.length - 1;
            parts.push({
                row: row,
                startPos: startPos,
                endPos: endPos,
                partNbr: parseInt(currentNumber)
            });
            currentNumber = ''; // Reset currentNumber
        }
    }
}
function findAdjacentParts(schema, parts) {
    // Find adjacent parts
    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
        var part = parts_1[_i];
        for (var _a = 0, schema_1 = schema; _a < schema_1.length; _a++) {
            var point = schema_1[_a];
            if (Math.abs(part.row - point.row) <= 1 && (Math.abs(part.startPos - point.col) <= 1 || Math.abs(part.endPos - point.col) <= 1)) {
                point.adjacentParts.push(part.partNbr);
            }
        }
    }
    var sum = 0;
    var gearRatio = 0;
    // Calculate sum and gearRatio sum of all adjacent parts
    for (var _b = 0, schema_2 = schema; _b < schema_2.length; _b++) {
        var point = schema_2[_b];
        if (point.adjacentParts.length > 1) {
            gearRatio += point.adjacentParts.reduce(function (acc, part) { return acc * part; }, 1);
        }
        sum += point.adjacentParts.reduce(function (acc, part) { return acc + part; }, 0);
    }
    console.log("Sum: " + sum);
    console.log("Gear Ration: " + gearRatio);
}
function doWork() {
    findSymbols();
    findParts(inputFile);
    findAdjacentParts(schemasymbols, parts);
}
doWork();
