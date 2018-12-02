import { main, findFirstRepeatedFrequency } from './1b';

describe('Day 1 part b', () => {
    xit('should work', () => {
        const result = main();
        expect(result).toEqual(69074)
    });

    it('should find the first repeated frequency', () => {
        const result = findFirstRepeatedFrequency([7, 7, -2, -7, -4]);
        expect(result).toEqual(14);
    });
});