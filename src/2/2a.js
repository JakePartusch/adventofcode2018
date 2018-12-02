import fs from 'fs';

export const main = () => {
    const lines = fs.readFileSync('src/2/input-a.txt').toString().split('\n')
    return calculateCheckSum(lines);
}

export const calculateCheckSum = (barCodes) => {
    const arrayOfMultipleOccurances = [];
    barCodes.forEach( barCode => {
        const multipleOccurancesStore = {};
        const characters = barCode.split('');
        characters.forEach(currentCharacter => {
            const total = characters.filter(character => currentCharacter === character).length;
            if(total > 1 && !Object.values(multipleOccurancesStore).includes(total)) {
                multipleOccurancesStore[currentCharacter] = total;
            }
        });
        Object.values(multipleOccurancesStore).forEach(value => arrayOfMultipleOccurances.push(value));
    });
    const checkSumStore = {};
    arrayOfMultipleOccurances.forEach(currentMaxOccurance => {
        if(currentMaxOccurance > 1) {
            const sumOfSimilarMaxOccurances = arrayOfMultipleOccurances.filter(maxOccurrance => maxOccurrance === currentMaxOccurance).length;
            checkSumStore[currentMaxOccurance] = sumOfSimilarMaxOccurances;
        }
    })
    return Object.values(checkSumStore).reduce((previous, current) => previous * current);
}