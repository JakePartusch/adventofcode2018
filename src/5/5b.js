import { keepTrackOfChangedString } from './5';

export const findShortestLengthWithRemovingSingleCharacter = string => {
    const lengths = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'].map(character => {
        const replacedString = string.split(character).join('').split(character.toUpperCase()).join('')
        const result = keepTrackOfChangedString(replacedString);
        return result.length;
    });
    return Math.min(...lengths);
}