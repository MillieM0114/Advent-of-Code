import * as fs from 'fs';

const inputFile = fs.readFileSync('input.txt', 'utf8').split('\n');

const maxAllowed = {
    red: 12,
    green: 13,
    blue: 14
  };

for (let game = 0; game < 1; game++) {
    let currentGame = inputFile[game].split(': ')[0];
    let cubes = inputFile[game].split(': ')[1];

    let cubeSet = cubes.split('; ');
    
    for (let index = 0; index < cubeSet.length; index++) {
        const colorQuantities = cubeSet[index].split(',').map((item) => item.trim().split(' '));
        colorQuantities.forEach(([quantityStr, color]) => {
            const quantity = parseInt(quantityStr, 10);

            
            if (quantity > maxAllowed[color]) {
              
            }
          });
    }

}