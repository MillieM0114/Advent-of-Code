"use strict";
exports.__esModule = true;
var fs = require("fs");
var nodeNetwork = [];
var steps = 0;
var inputFile = fs.readFileSync('input.txt', 'utf8').split(/\r?\n/);
var instructions = inputFile[0];
// set Node Network
for (var index = 2; index < inputFile.length; index++) {
    var line = inputFile[index];
    nodeNetwork.push({ current: line.substring(0, 3), left: line.substring(7, 10), right: line.substring(12, 15) });
}
var counter = 0;
var currentNode = nodeNetwork.findIndex(function (thisNode) { return thisNode.current === 'AAA'; });
// Find goal
while (nodeNetwork[currentNode].current !== 'ZZZ') {
    if (counter === instructions.length) {
        counter = 0;
    }
    currentNode = nodeNetwork.findIndex(function (thisNode) { return thisNode.current === (instructions[counter] === 'L' ? nodeNetwork[currentNode].left : nodeNetwork[currentNode].right); });
    steps++;
    counter++;
}
console.log(steps);
