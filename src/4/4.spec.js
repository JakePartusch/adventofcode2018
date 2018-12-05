import { parseInput } from './4';
import { parseInputAgain } from './4b';

describe('Day 4 part a', () => {
    it('should work', () => {
        const result = parseInput();
        expect(result).toEqual(3212)
    });
});

describe('Day 4 part b', () => {
    it('should work', () => {
        const result = parseInputAgain();
        expect(result).toEqual(4966)
    });
})