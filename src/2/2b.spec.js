import { main, findSimilarBarCode } from './2b';

describe('Day 2 part b', () => {
    it('should work', () => {
        const result = main();
        expect(result).toEqual('ymdrchgpvwfloluktajxijsqb')
    });

    it('should find the similar barcode', () => {
        const result = findSimilarBarCode(['abcde', 'fghij', 'klmno', 'pqrst', 'fguij', 'axcye', 'wvxyz']);
        expect(result).toEqual('fgij');
    });
})