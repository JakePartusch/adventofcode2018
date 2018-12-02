import fs from 'fs';

export const main = () => {
    const lines = fs.readFileSync('src/2/input-a.txt').toString().split('\n')
    return findSimilarBarCode(lines);
}

export const findSimilarBarCode = (barCodes) => {
    let similarBarCodes;
    let disimilarIndex;
    barCodes.forEach(currentBarCode => {
        barCodes.forEach(testBarCode => {
            let mismatchCount = 0;
            for(let i = 0; i < currentBarCode.length; i++) {
                if(currentBarCode[i] !== testBarCode[i]) {
                    mismatchCount++;
                }
            }
            if(mismatchCount === 1) {
                similarBarCodes = [currentBarCode, testBarCode];
            }
        })
    });
    for(let i = 0; i < similarBarCodes[0].length; i++) {
        if(similarBarCodes[0][i] !== similarBarCodes[1][i]) {
            disimilarIndex = i;
        }
    }
    return similarBarCodes[0].slice(0, disimilarIndex) + similarBarCodes[0].slice(disimilarIndex + 1, similarBarCodes[0].length)
}