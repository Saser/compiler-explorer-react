import { objectEquals } from './ObjectUtils.js';

export const simpleArrayEquals = (arr1, arr2) => {
    // If both arrays are empty, then they are equal.
    if (arr1.length === 0 && arr2.length === 0) {
        return true;
    }

    // Since we know that at least one of the arrays is non-empty, of the other
    // is empty, they are not equal.
    if (arr1.length === 0 || arr2.length === 0) {
        return false;
    }

    const val1 = arr1[0];
    const val2 = arr2[0];

    let equal;
    if (typeof val1 === 'object' && typeof val2 === 'object') {
        equal = objectEquals(val1, val2);
    } else {
        equal = Object.is(val1, val2);
    }
    return equal && simpleArrayEquals(arr1.slice(1), arr2.slice(1));
}

export const isArrayPrefix = (prefix, arr) => {
    if (prefix.length === 0) {
        return true;
    } else if (arr.length === 0) {
        return false;
    } else {
        const slicedArr = arr.slice(0, prefix.length);
        return simpleArrayEquals(prefix, slicedArr);
    }
}
