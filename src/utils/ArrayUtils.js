import _ from 'lodash';

// Intersperses a `separator` between each element in `array`.
export const intersperse = (separator, array) => {
    if (array.length <= 1) {
        return array;
    }

    const head = _.head(array);
    const tail = _.tail(array);
    return [head, separator].concat(intersperse(separator, tail));
}
