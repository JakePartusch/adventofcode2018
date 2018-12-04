import fs from 'fs';

export const main = () => {
    const lines = fs.readFileSync('src/3/input-a.txt').toString().split('\n')
    return findNonOverlappingClaim(lines);
}

export const findNonOverlappingClaim = (patchCodes) => {
    //#1 @ 1,3: 4x4
    let grid = fillGrid();
    const parsedPatchCodes = []; 
    for(let patchCode of patchCodes) {
        const values = patchCode.split(' ');
        const coordinates = values[2].split(',');
        coordinates[1]= coordinates[1].slice(0, coordinates[1].length-1)
        const size = values[3].split('x');
        const claim = {
            id: values[0],
            startx: Number(coordinates[0]),
            starty: Number(coordinates[1]),
            endx: Number(coordinates[0]) + Number(size[0]),
            endy: Number(coordinates[1]) + Number(size[1])
        }
        parsedPatchCodes.push(claim);
        for(let x = claim.startx; x < claim.endx; x++) {
            for(let y = claim.starty; y < claim.endy; y++) {
                if(grid[x][y] >= 1) {
                    grid[x][y] = 2
                } else {
                    grid[x][y] = 1;
                }
            }
        }
    }

    return searchForNonOverlappingClaim(grid, parsedPatchCodes);
}

export const searchForNonOverlappingClaim = (grid, parsedPatchCodes) => {
    for(let patchCode of parsedPatchCodes) {
        let hasOverlap = false;
        for(let x = patchCode.startx; x < patchCode.endx; x++) {
            for(let y = patchCode.starty; y < patchCode.endy; y++) {
                if(grid[x][y] > 1) {
                    hasOverlap = true;
                }
            }
        }
        if(!hasOverlap) {
            return patchCode.id;
        }
    }
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