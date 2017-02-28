const initialNodes = {
    "con": "Tdec",
    "trace": [1, 1, 1, 16],
    "dec": {
        "con": "Dlet",
        "trace": [1, 1, 1, 15],
        "pat": {
            "con": "Pvar",
            "trace": [1, 5, 1, 5],
            "varn": "\"y\"",
        },
        "expr": {
            "con": "Lit",
            "trace": [1, 9, 1, 5],
            "val": "\"hello\"",
        },
    },
}

const nodes = (state = initialNodes, action) {
    return state;
}

export default nodes;
