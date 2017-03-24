// Returns an array of integers from `start` (inclusive) to `end` (exclusive).
export const range = (start, end) => {
    if (start >= end) {
        return [];
    }

    return [start].concat(range(start + 1, end));
}
