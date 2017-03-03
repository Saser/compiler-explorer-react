import { simpleArrayEquals } from './ArrayUtils.js';

export const objectEquals = (obj1, obj2) => {
    // If both objects are null, they are considered equal.
    if (obj1 === null && obj2 === null) {
        return true;
    }

    // At most one of them can be null -- if that is the case, they are not
    // equal.
    if (obj1 === null || obj2 === null) {
        return false;
    }

    // If both objects are undefined, they are considered equal.
    if (obj1 === undefined && obj2 === undefined) {
        return true;
    }

    // At most one of them can be undefined -- if that is the case, they are not
    // equal.
    if (obj1 === undefined || obj2 === undefined) {
        return false;
    }

    const keys1 = Object.keys(obj1).sort();
    const keys2 = Object.keys(obj2).sort();

    // If they have differing numbers of keys, they are not equal.
    if (keys1.length !== keys2.length) {
        return false;
    }

    // If they have the same number of keys, but the keys differ, they are not
    // equal.
    if (!simpleArrayEquals(keys1, keys2)) {
        return false;
    }

    let equal = true;
    for (const key of keys1) {
        const val1 = obj1[key];
        const val2 = obj2[key];

        if (typeof val1 === 'object' &&
            typeof val2 === 'object' &&
            val1 !== null &&
            val2 !== null) {
            if (Array.isArray(val1) && Array.isArray(val2)) {
                equal = equal && simpleArrayEquals(val1, val2);
            } else {
                equal = equal && objectEquals(val1, val2);
            }
        } else {
            equal = equal && Object.is(val1, val2);
        }
    }

    return equal;
}
