import fs from 'fs';

export const readInput = () => {
    const lines = fs.readFileSync('src/5/input.txt').toString().split('\n')
    const input = lines[0];
    return input;
}

export const keepTrackOfChangedString = string => {
    let oldString;
    let newString = string;
    while(oldString !== newString) {
        oldString = newString;
        newString = removeReversePolaritiesInString(oldString);
    }
    return newString;
}

export const removeReversePolaritiesInString = string => {
    const characters = string.split('');
    for(let i = 0; i < characters.length; i++) {
        const current = characters[i];
        const next = characters[i + 1];
        if(current && next && current.toUpperCase() == next.toUpperCase() && current !== next) {
            characters.splice(i, 2);
        }
    }
    return characters.join('');
}

