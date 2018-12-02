import fs from 'fs';

export const main = () => {
    const lines = fs.readFileSync('src/1/input-b.txt').toString().split('\n')
    return findFirstRepeatedFrequency(lines.map(line => new Number(line)));
}

export const findFirstRepeatedFrequency = (integerValues, currentFrequency = 0, frequencies = [0]) => {
    let repeatedFrequency;
    while(!repeatedFrequency) {
        for(let integer of integerValues) {
            currentFrequency +=  integer;
            if(frequencies.includes(currentFrequency)) {
                repeatedFrequency = currentFrequency;
                break;
            }
            frequencies.push(currentFrequency);
        };
    }
    return repeatedFrequency;
}