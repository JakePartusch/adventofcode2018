import fs from 'fs';

export const main = () => {
    const lines = fs.readFileSync('src/1/input-a.txt').toString().split('\n')
    return calculateEndFrequency(lines.map(line => new Number(line)));
}

export const calculateEndFrequency = (integerValues) => {
    return integerValues.reduce((previous, current) => previous + current, 0);
}