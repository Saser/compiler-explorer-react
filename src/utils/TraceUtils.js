const constructSimpleTraceRec = (traceArray) => {
    const len = traceArray.length;
    if (len === 0) {
        return null;
    }

    const el = traceArray[len - 1];
    const rest = traceArray.slice(0, -1);
    return {
        cons: 'Cons',
        num: el.toString(),
        trace: constructSimpleTraceRec(rest),
    };
}

// Constructs a 'simple' trace object, i.e. one consisting of only Cons's,
// and that can be expressed as an array (e.g. [1, 9, 1, 13]). Takes such an
// array as parameter.
export const constructSimpleTrace = (traceArray) => {
    if (traceArray === null) {
        throw new Error('array is null');
    }

    if (traceArray === undefined) {
        throw new Error('array is undefined');
    }

    if (traceArray.includes(null)) {
        throw new Error('array contains null values');
    }

    if (traceArray.includes(undefined)) {
        throw new Error('array contains undefined values');
    }

    if (traceArray.length === 0) {
        throw new Error('array is empty');
    }

    return constructSimpleTraceRec(traceArray);
}

// Construct a `Union` trace, that has the two given trace arrays as first and
// second child, respectively. The conditions for the arrays are equal to those
// for `constructSimpleTrace`.
export const constructUnionTrace = (traceArray1, traceArray2) => {
    if (traceArray1 === null) {
        throw new Error('first array is null');
    }

    if (traceArray2 === null) {
        throw new Error('second array is null');
    }

    if (traceArray1 === undefined) {
        throw new Error('first array is undefined');
    }

    if (traceArray2 === undefined) {
        throw new Error('second array is undefined');
    }

    if (traceArray1.includes(null)) {
        throw new Error('first array contains null values');
    }

    if (traceArray2.includes(null)) {
        throw new Error('second array contains null values');
    }

    if (traceArray1.includes(undefined)) {
        throw new Error('first array contains undefined values');
    }

    if (traceArray2.includes(undefined)) {
        throw new Error('second array contains undefined values');
    }

    return {
        cons: 'Union',
        trace1: constructSimpleTrace(traceArray1),
        trace2: constructSimpleTrace(traceArray2),
    };
}

// Determines whether two trace trees (that are assumed to be valid) are equal,
// by doing a recursive comparison.
export const traceEquals = (trace1, trace2) => {
    if (trace1 === undefined || trace2 === undefined) {
        return false;
    }

    // We have two empty traces.
    if (trace1 === null && trace2 === null) {
        return true;
    }

    // We have one empty trace and one non-empty trace.
    if (trace1 === null || trace2 === null) {
        return false;
    }

    // We have two non-empty traces of valid, but different, types.
    if (trace1.cons !== trace2.cons) {
        return false;
    }

    // We have two non-empty traces of same, valid type.
    switch (trace1.cons) {
        case 'Cons':
            return trace1.num === trace2.num && traceEquals(trace1.trace, trace2.trace);
        case 'Union':
        default:
            return traceEquals(trace1.trace1, trace2.trace1) && traceEquals(trace1.trace2, trace2.trace2);
    }
}

const containsSubtraceAux = (sub, trace) => {
    if (traceEquals(sub, trace)) {
        return true;
    }

    if (trace === null) {
        return false;
    }

    if (trace.cons === 'Cons') {
        return containsSubtraceAux(sub, trace.trace);
    } else {
        return containsSubtraceAux(sub, trace.trace1) || containsSubtraceAux(sub, trace.trace2);
    }
}

// Determines whether the `trace` tree contains the `sub` tree as a subtree.
export const containsSubtrace = (sub, trace) => {
    if (sub === undefined || trace === undefined) {
        return false;
    }

    if (sub === null) {
        return true;
    }

    return containsSubtraceAux(sub, trace);
}

// Takes a tree, a key and a function, and adds that key to every node in the
// tree (excluding traces), assigning the value of the function applied to the
// tree.
// TODO: Rewrite for API change.
export const treeDecorate = (key, f, tree) => {
    // Return if tree is a simple object, and thus a leaf.
    if (!tree) return tree;
    if (typeof tree !== 'object') return tree;

    let newTree; 
    if (Array.isArray(tree)) {
        newTree = Object.assign([], tree);
        for (let i = 0; i < newTree.length; i++) {
            newTree[i] = treeDecorate(key, f, newTree[i]);
        }
    } else {
        newTree = Object.assign({}, tree);
        for (const prop of Object.keys(newTree)) {
            if (prop !== 'tra') {
                newTree[prop] = treeDecorate(key, f, newTree[prop]);
            }
        }
    }
    newTree[key] = f(tree);
    return newTree;
}

export const highlightProperty = 'isHighlighted';

// Takes a tree and attaches the property 'isHighlighted' to every node in the
// tree. All those nodes whose trace has the given trace as prefix will get
// 'isHiglighted' = true, and the rest false.
export const forwardMatching = (trace, tree) => {
    let f;
    if (trace === null) {
        // Completely null traces do not match anything.
        f = (t) => (false);
    } else {
        // If the given trace is a subtrace of the trace of a node, it should get
        // highlighted.
        f = (t) => (containsSubtrace(trace, t.tra))
    }
    return treeDecorate(highlightProperty, f, tree);
}

const anythingHighlighted = (t) => {
    if (typeof t !== 'object') return false;
    if (t[highlightProperty]) return true;
    for (const key of Object.keys(t)) {
        if (key !== 'tra' && anythingHighlighted(t[key])) return true;
    }
    return false;
};

// Merge two trees that are identical, except for whether their nodes are
// highlighted.
const merge = (t1, t2) => {
    const t = {...t1};
    t[highlightProperty] = (t1[highlightProperty] || t2[highlightProperty])
    for (const prop of Object.keys(t1)) {
        t[prop] = merge(t1[prop], t2[prop]);
    }
    return t;
}

const backwardMatchingRec = (trace, tree) => {
    // See if we can get an exact match.
    let f = (t) => (traceEquals(trace, t.tra));
    const newTree = treeDecorate(highlightProperty, f, tree);
    if (anythingHighlighted(newTree)) {
        return newTree;
    }

    // No exact match. Recursively check.
    switch (trace.cons) {
        case 'Cons':
            return backwardMatchingRec(trace.trace, tree);
        case 'Union':
            let tree1 = backwardMatchingRec(trace.trace1, tree);
            let tree2 = backwardMatchingRec(trace.trace2, tree);
            return merge(tree1, tree2);
        case 'Empty':
        default:
            f = (t) => (false);
            return treeDecorate(highlightProperty, f, tree);
    }
}

export const backwardMatching = (trace, tree) => {
    if (!trace) {
        // Highlight nothing.
        const f = (t) => (false);
        return treeDecorate(highlightProperty, f, tree);
    }
    return backwardMatchingRec(trace, tree);
}
