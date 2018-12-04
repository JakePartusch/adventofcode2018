import { main, findOverlapAmount } from './3a';

describe('Day 3 part a', () => {
    it('should work', () => {
        const result = main();
        expect(result).toEqual(103482)
    });

    it('should find the amount of overlap', () => {
        const result = findOverlapAmount(['#1 @ 1,3: 4x4', '#200 @ 3,1: 4x4', '#300 @ 5,5: 2x2']);
        expect(result).toEqual(4);
    });
})