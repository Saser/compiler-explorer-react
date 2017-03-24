import _ from 'lodash';

import { range } from './ArrayUtils.js';

// Returns a new array of new objects, each having a `key` property with its
// value set to the index of that object. Does not mutate the original array or
// the objects in that array.
export const addIntegerKeys = (objs) => {
    return addPrefixedIntegerKeys('', objs);
}

export const addPrefixedIntegerKeys = (prefix, objs) => {
    const values = range(0, objs.length).map((idx) => `${prefix}${idx}`);
    return _.zip(objs, values)
            .map(([obj, value]) => ({ ...obj, key: value }));
}
