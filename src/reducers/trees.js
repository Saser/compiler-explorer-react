import {
    TREES_PARSING_STARTED,
    TREES_PARSING_FINISHED,
} from '../actions/types.js';

import { constructSimpleTrace } from '../utils/TraceUtils.js';

const initialTrees = {
    isParsing: false,
    trees: {
        "lang": "mod",
        "tree": {
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
        },
    },
};

const trees = (state = initialTrees, action) => {
    switch (action.type) {
        case TREES_PARSING_STARTED:
            return {
                ...state,
                isParsing: true,
            };
        case TREES_PARSING_FINISHED:
            return {
                ...state,
                isParsing: false,
                trees: action.trees,
            };
        default:
            return state;
    }
}

export default trees;
