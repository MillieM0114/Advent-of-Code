import * as fs from 'fs';

export function part1() {
    const input = fs.readFileSync('input.txt', 'utf8').split(/\r?\n/);
    let result = 0;

    for (let index = 0; index < input.length; index++) {
        let current = input[index].replace(/\D/g, '')

        result += +`${current.charAt(0)}${current.charAt(current.length - 1)}`
    }


    console.log(result);
}
const spelledOutNumbers: { [key: string]: string } = {
    one: 'o1e',
    two: 't2o',
    three: 't3e',
    four: 'f4r',
    five: 'f5e',
    six: 's6x',
    seven: 's7n',
    eight: 'e8t',
    nine: 'n9e'
};
    
export function part2() {
    

    const input = fs.readFileSync('sampleInput2.txt', 'utf8').split(/\r?\n/);
    let result = 0;
    for (let index = 0; index < input.length; index++) {

    }


    console.log(result);
}

part2();