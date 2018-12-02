import { main, calculateEndFrequency } from './1a';

describe('Day 1 part a', () => {
    it('should work', () => {
        const result = main();
        expect(result).toEqual(510)
    });

    it('should calculate the end frequency', () => {
        const result = calculateEndFrequency([-1, -1, -1, 4]);
        expect(result).toEqual(1);
    });
})