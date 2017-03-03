export const isArrayPrefix = (prefix, arr) => {
    return false;
}

export const arrayEquals = (arr1, arr2) => {
    // If both arrays are empty, then they are equal.
    if (arr1.length === 0 && arr2.length === 0) {
        return true;
    }

    // Since we know that at least one of the arrays is non-empty, of the other
    // is empty, they are not equal.
    if (arr1.length === 0 || arr2.length === 0) {
        return false;
    }

    return Object.is(arr1[0], arr2[0]) && arrayEquals(arr1.slice(1), arr2.slice(1));
}
