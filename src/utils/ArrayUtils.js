import _ from 'lodash';

// Returns an array of integers from `start` (inclusive) to `end` (exclusive).
export const range = (start, end) => {
    if (start >= end) {
        return [];
    }

    return [start].concat(range(start + 1, end));
}

// Like `range`, except that it includes the `end`.
export const rangeInc = (start, end) => {
    return range(start, end + 1);
}

// Intersperses a `separator` between each element in `array`.
export const intersperse = (separator, array) => {
    if (array.length <= 1) {
        return array;
    }

    const head = _.head(array);
    const tail = _.tail(array);
    return [head, separator].concat(intersperse(separator, tail));
}
