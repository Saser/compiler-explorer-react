import { constructSimpleTrace } from '../utils/TraceUtils.js';

const initialNodes = {
    "con": "Tdec",
    "trace": constructSimpleTrace([1, 1, 1, 16]),
    "dec": {
        "con": "Dlet",
        "trace": constructSimpleTrace([1, 1, 1, 15]),
        "pat": {
            "con": "Pvar",
            "trace": constructSimpleTrace([1, 5, 1, 5]),
            "varn": "\"y\"",
        },
        "expr": {
            "con": "Lit",
            "trace": constructSimpleTrace([1, 9, 1, 5]),
            "val": "\"hello\"",
        },
    },
}

const nodes = (state = initialNodes, action) => {
    return state;
}

export default nodes;
