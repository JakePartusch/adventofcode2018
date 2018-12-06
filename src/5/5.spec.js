import { keepTrackOfChangedString, readInput } from './5';
import { findShortestLengthWithRemovingSingleCharacter } from './5b';

describe('Day 5', () => {
    it('should remove stuff from string', () => {
        const result = keepTrackOfChangedString('dabAcCaCBAcCcaDA')
        expect(result).toEqual('dabCBAcaDA')
    });

    it('should find the answer', () => {
        const input = readInput();
        const result = keepTrackOfChangedString(input);
        expect(result.length).toEqual(11636);
    });

    it('should find the smallest length removing one character', () => {
        const result = findShortestLengthWithRemovingSingleCharacter('dabAcCaCBAcCcaDA');
        expect(result).toEqual(4);
    });

    it('should find the answer to part b', () => {
        const input = readInput();
        const result = findShortestLengthWithRemovingSingleCharacter(input);
        expect(result).toEqual(0);
    });
})