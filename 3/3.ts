import * as fs from 'fs';

const inputFile = fs.readFileSync('input.txt', 'utf8').split(/\r?\n/);
const rows = inputFile.length;
const cols = inputFile[0].length;

interface Part {
    row: number;
    startPos: number;
    endPos: number;
    partNbr: number;
}

interface SchemaSymbol {
    row: number;
    col: number;
    adjacentParts: number[];
}

let parts: Part[] = [];
let schemasymbols: SchemaSymbol[] = [];

function findSymbols() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {

            if (inputFile[i].charAt(j) !== "." && isNaN(parseFloat(inputFile[i].charAt(j)))) {

                schemasymbols.push({ row: i, col: j, adjacentParts: [] })
            }

        }
    }
}

function findParts(input: string[]) {
    for (let row = 0; row < input.length; row++) {
        const line = input[row];

        let currentNumber = '';
        let startPos = -1;

        for (let col = 0; col < line.length; col++) {
            const char = line[col];

            if (!isNaN(parseInt(char))) {
                // If the character is a digit, append it to the currentNumber
                if (startPos === -1) {
                    startPos = col; // Set the start position if it's the beginning of a number
                }
                currentNumber += char;
            } else if (currentNumber !== '') {
                // If the character is not a digit and currentNumber is not empty, record the position
                const endPos = col - 1; // Set the end position

                parts.push({
                    row,
                    startPos,
                    endPos,
                    partNbr: parseInt(currentNumber),
                });

                currentNumber = ''; // Reset currentNumber
                startPos = -1; // Reset startPos
            }
        }

        // Check for the last number in the row
        if (currentNumber !== '') {
            const endPos = line.length - 1;

            parts.push({
                row,
                startPos,
                endPos,
                partNbr: parseInt(currentNumber),
            });

            currentNumber = ''; // Reset currentNumber
        }
    }
}

function findAdjacentParts(schema: SchemaSymbol[], parts: Part[]) {
    // Find adjacent parts
    for (const part of parts) {
        for (const point of schema) {
            if (Math.abs(part.row - point.row) <= 1 && (Math.abs(part.startPos - point.col) <= 1 || Math.abs(part.endPos - point.col) <= 1)) {
                point.adjacentParts.push(part.partNbr);
            }
        }
    }

    let sum = 0;
    let gearRatio = 0;
    // Calculate sum and gearRatio sum of all adjacent parts
    for (const point of schema) {
        if (point.adjacentParts.length > 1) {
            gearRatio += point.adjacentParts.reduce((acc, part) => acc * part, 1);
        }
        sum += point.adjacentParts.reduce((acc, part) => acc + part, 0);
    }
    console.log("Sum: " + sum)
    console.log("Gear Ration: " + gearRatio)
}

function doWork() {
    findSymbols();
    findParts(inputFile);
    findAdjacentParts(schemasymbols, parts);
}

doWork();