import fs from 'fs';

export const main = () => {
    const lines = fs.readFileSync('src/3/input-a.txt').toString().split('\n')
    return findOverlapAmount(lines);
}

export const findOverlapAmount = (patchCodes) => {
    //#1 @ 1,3: 4x4
    let grid = fillGrid();
    for(let patchCode of patchCodes) {
        const values = patchCode.split(' ');
        const coordinates = values[2].split(',');
        coordinates[1]= coordinates[1].slice(0, coordinates[1].length-1)
        const size = values[3].split('x');
        const startx = Number(coordinates[0]);
        const starty = Number(coordinates[1]);
        const endx = startx + Number(size[0]);
        const endy = starty + Number(size[1]);
        for(let x = startx; x < endx; x++) {
            for(let y = starty; y < endy; y++) {
                if(grid[x][y] >= 1) {
                    grid[x][y] = 2
                } else {
                    grid[x][y] = 1;
                }
            }
        }
    }
    return countOverlaps(grid);
}

export const countOverlaps = grid => {
    let count = 0;
    for(let x = 0; x < 1000; x++) {
        for(let y = 0; y < 1000; y++) {
            if(grid[x][y] === 2) {
                count++
            }
        }
    }
    return count;
}

export const fillGrid = () => {
    let grid = [];
    for(let x = 0; x < 1000; x++) {
        let row = [];
        for(let y = 0; y < 1000; y++) {
            row.push(0);
        }
        grid.push(row);
    }
    return grid;
}