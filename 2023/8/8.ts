import * as fs from 'fs';

interface Node {
    current: string;
    left: string;
    right: string;
}
let nodeNetwork: Node[] = [];
let steps = 0;

const inputFile = fs.readFileSync('input.txt', 'utf8').split(/\r?\n/);
const instructions = inputFile[0];

// set Node Network
for (let index = 2; index < inputFile.length; index++) {
    let line = inputFile[index];
    nodeNetwork.push({ current: line.substring(0, 3), left: line.substring(7, 10), right: line.substring(12, 15) })
}

let counter = 0;
let currentNode = nodeNetwork.findIndex((thisNode) => thisNode.current === 'AAA');

// Find goal
while (nodeNetwork[currentNode].current !== 'ZZZ') {
    if (counter === instructions.length) {
        counter = 0;
    }
    currentNode = nodeNetwork.findIndex(thisNode => thisNode.current === (instructions[counter] === 'L' ? nodeNetwork[currentNode].left : nodeNetwork[currentNode].right));
    steps++;
    counter++;
}

console.log(steps)