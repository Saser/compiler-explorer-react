import {
    SOURCE_CODE_TEXT_UPDATED,
    SOURCE_CODE_COMPILE_STARTED,
    SOURCE_CODE_COMPILE_FINISHED,
} from '../actions/types.js';

const exampleJson = '[ { "lang": "modLang", "prog": { "cons": "Prog", "tops": [ { "cons": "Prompt", "modN": null, "decs": [ { "cons": "Dlet", "num": 1, "exp": { "cons": "Mat", "tra": null, "exp": { "cons": "App", "tra": { "cons": "Cons", "num": 27, "trace": { "cons": "Cons", "num": 1, "trace": { "cons": "Cons", "num": 23, "trace": { "cons": "Cons", "num": 1, "trace": null } } } }, "op": { "cons": "Opapp" }, "exps": [ { "cons": "App", "tra": { "cons": "Cons", "num": 27, "trace": { "cons": "Cons", "num": 1, "trace": { "cons": "Cons", "num": 23, "trace": { "cons": "Cons", "num": 1, "trace": null } } } }, "op": { "cons": "Opapp" }, "exps": [ { "cons": "Var_local", "tra": { "cons": "Cons", "num": 27, "trace": { "cons": "Cons", "num": 1, "trace": { "cons": "Cons", "num": 23, "trace": { "cons": "Cons", "num": 1, "trace": null } } } }, "varN": "" }, { "cons": "Lit", "tra": { "cons": "Cons", "num": 23, "trace": { "cons": "Cons", "num": 1, "trace": { "cons": "Cons", "num": 23, "trace": { "cons": "Cons", "num": 1, "trace": null } } } }, "lit": { "cons": "IntLit", "value": 3 } } ] }, { "cons": "Lit", "tra": { "cons": "Cons", "num": 27, "trace": { "cons": "Cons", "num": 1, "trace": { "cons": "Cons", "num": 27, "trace": { "cons": "Cons", "num": 1, "trace": null } } } }, "lit": { "cons": "IntLit", "value": 5 } } ] }, "exps": [ { "pat": { "cons": "Pvar", "varN": "x" }, "exp": { "cons": "Con-modLang", "tra": null, "modscon": null, "exps": [ { "cons": "Var_local", "tra": null, "varN": "x" } ] } } ] } } ] } ] } }, { "lang": "conLang", "prog": { "cons": "Prog", "tops": [ { "cons": "Prompt", "modN": null, "decs": [ { "cons": "Dlet", "num": 1, "exp": { "cons": "Mat", "tra": null, "exp": { "cons": "App", "tra": { "cons": "Cons", "num": 27, "trace": { "cons": "Cons", "num": 1, "trace": { "cons": "Cons", "num": 23, "trace": { "cons": "Cons", "num": 1, "trace": null } } } }, "op": { "cons": "Op", "op": { "cons": "Opapp" } }, "exps": [ { "cons": "App", "tra": { "cons": "Cons", "num": 27, "trace": { "cons": "Cons", "num": 1, "trace": { "cons": "Cons", "num": 23, "trace": { "cons": "Cons", "num": 1, "trace": null } } } }, "op": { "cons": "Op", "op": { "cons": "Opapp" } }, "exps": [ { "cons": "Var_local", "tra": { "cons": "Cons", "num": 27, "trace": { "cons": "Cons", "num": 1, "trace": { "cons": "Cons", "num": 23, "trace": { "cons": "Cons", "num": 1, "trace": null } } } }, "varN": "" }, { "cons": "Lit", "tra": { "cons": "Cons", "num": 23, "trace": { "cons": "Cons", "num": 1, "trace": { "cons": "Cons", "num": 23, "trace": { "cons": "Cons", "num": 1, "trace": null } } } }, "lit": { "cons": "IntLit", "value": 3 } } ] }, { "cons": "Lit", "tra": { "cons": "Cons", "num": 27, "trace": { "cons": "Cons", "num": 1, "trace": { "cons": "Cons", "num": 27, "trace": { "cons": "Cons", "num": 1, "trace": null } } } }, "lit": { "cons": "IntLit", "value": 5 } } ] }, "exps": [ { "pat": { "cons": "Pvar", "varN": "x" }, "exp": { "cons": "Con-conLang", "tra": null, "numtid": null, "pats": [ { "cons": "Var_local", "tra": null, "varN": "x" } ] } } ] } } ] } ] } }, { "lang": "decLang", "prog": { "cons": "Mat", "tra": null, "exp": { "cons": "Let", "tra": null, "varN": null, "exp1": { "cons": "Extend_global", "tra": null, "num": 1 }, "exp2": { "cons": "Handle", "tra": null, "exp": { "cons": "Let", "tra": null, "varN": null, "exp1": { "cons": "Let", "tra": { "cons": "Cons", "num": 1, "trace": null }, "varN": null, "exp1": { "cons": "Mat", "tra": { "cons": "Cons", "num": 2, "trace": null }, "exp": { "cons": "Mat", "tra": null, "exp": { "cons": "App", "tra": { "cons": "Cons", "num": 27, "trace": { "cons": "Cons", "num": 1, "trace": { "cons": "Cons", "num": 23, "trace": { "cons": "Cons", "num": 1, "trace": null } } } }, "op": { "cons": "Op", "op": { "cons": "Opapp" } }, "exps": [ { "cons": "App", "tra": { "cons": "Cons", "num": 27, "trace": { "cons": "Cons", "num": 1, "trace": { "cons": "Cons", "num": 23, "trace": { "cons": "Cons", "num": 1, "trace": null } } } }, "op": { "cons": "Op", "op": { "cons": "Opapp" } }, "exps": [ { "cons": "Var_local", "tra": { "cons": "Cons", "num": 27, "trace": { "cons": "Cons", "num": 1, "trace": { "cons": "Cons", "num": 23, "trace": { "cons": "Cons", "num": 1, "trace": null } } } }, "varN": "" }, { "cons": "Lit", "tra": { "cons": "Cons", "num": 23, "trace": { "cons": "Cons", "num": 1, "trace": { "cons": "Cons", "num": 23, "trace": { "cons": "Cons", "num": 1, "trace": null } } } }, "lit": { "cons": "IntLit", "value": 3 } } ] }, { "cons": "Lit", "tra": { "cons": "Cons", "num": 27, "trace": { "cons": "Cons", "num": 1, "trace": { "cons": "Cons", "num": 27, "trace": { "cons": "Cons", "num": 1, "trace": null } } } }, "lit": { "cons": "IntLit", "value": 5 } } ] }, "exps": [ { "pat": { "cons": "Pvar", "varN": "x" }, "exp": { "cons": "Con-conLang", "tra": null, "numtid": null, "pats": [ { "cons": "Var_local", "tra": null, "varN": "x" } ] } } ] }, "exps": [ { "pat": { "cons": "Pcon-conLang", "numtid": null, "pats": [ { "cons": "Pvar", "varN": "x0" } ] }, "exp": { "cons": "Let", "tra": { "cons": "Cons", "num": 3, "trace": null }, "varN": null, "exp1": { "cons": "App", "tra": { "cons": "Cons", "num": 4, "trace": null }, "op": { "cons": "Init_global_var", "num": 0 }, "exps": [ { "cons": "Var_local", "tra": { "cons": "Cons", "num": 5, "trace": null }, "varN": "x0" } ] }, "exp2": { "cons": "Con-conLang", "tra": { "cons": "Cons", "num": 6, "trace": null }, "numtid": null, "pats": [  ] } } } ] }, "exp2": { "cons": "Con-conLang", "tra": null, "numtid": null, "pats": [  ] } }, "exp2": { "cons": "Con-conLang", "tra": null, "numtid": [ 0, { "cons": "TypeId", "id": [ "option" ] } ], "pats": [  ] } }, "exps": [ { "pat": { "cons": "Pvar", "varN": "x" }, "exp": { "cons": "Con-conLang", "tra": null, "numtid": [ 0, { "cons": "TypeId", "id": [ "option" ] } ], "pats": [ { "cons": "Var_local", "tra": null, "varN": "x" } ] } } ] } }, "exps": [ { "pat": { "cons": "Pcon-conLang", "numtid": [ 0, { "cons": "TypeId", "id": [ "option" ] } ], "pats": [  ] }, "exp": { "cons": "Con-conLang", "tra": null, "numtid": [ 0, { "cons": "TypeId", "id": [ "option" ] } ], "pats": [  ] } }, { "pat": { "cons": "Pvar", "varN": "x" }, "exp": { "cons": "Var_local", "tra": null, "varN": "x" } } ] } } ]';

const initialSourceCode = {
    isCompiling: false,
    sourceText: exampleJson,
};

const sourceCode = (state = initialSourceCode, action) => {
    switch (action.type) {
        case SOURCE_CODE_TEXT_UPDATED:
            return {
                ...state,
                sourceText: action.sourceText,
            };
        case SOURCE_CODE_COMPILE_STARTED:
            return {
                ...state,
                isCompiling: true,
            };
        case SOURCE_CODE_COMPILE_FINISHED:
            return {
                ...state,
                isCompiling: false,
            };
        default:
            return state;
    }
}

export default sourceCode;
