import { main, calculateCheckSum } from './2a';

describe('Day 2 part a', () => {
    it('should work', () => {
        const result = main();
        expect(result).toEqual(5000)
    });

    it('should calculate the check sum', () => {
        const result = calculateCheckSum(['abcdef', 'bababc', 'abbcde', 'abcccd', 'aabcdd', 'abcdee', 'ababab']);
        expect(result).toEqual(12);
    });
})