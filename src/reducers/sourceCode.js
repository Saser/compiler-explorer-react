import {
    SOURCE_CODE_TEXT_UPDATED,
    SOURCE_CODE_COMPILE_STARTED,
    SOURCE_CODE_COMPILE_FINISHED,
} from '../actions/types.js';

const exampleJson = '[ { "cons": "Prog", "tops": [ { "cons": "Prompt", "modN": null, "decs": [ { "cons": "Dlet", "num": 2, "exp": { "cons": "Mat", "tra": null, "exp": { "cons": "Con", "tra": null, "modscon": null, "exps": [ { "cons": "App", "tra": null, "op": "Opapp", "exps": [ { "cons": "App", "tra": null, "op": "Opapp", "exps": [ { "cons": "Var_local", "tra": null, "var": "" }, { "cons": "Lit", "tra": null, "IntLit": 3 } ] }, { "cons": "Lit", "tra": null, "IntLit": 5 } ] }, { "cons": "Lit", "tra": null, "IntLit": 1 } ] }, "exps": [ { "pat": { "cons": "Pcon", "modscon": null, "pat": [ { "cons": "Pvar", "pat": { "var": "x" } }, { "cons": "Pvar", "pat": { "var": "y" } } ] }, "exp": { "cons": "Con", "tra": null, "modscon": null, "exps": [ { "cons": "Var_local", "tra": null, "var": "x" }, { "cons": "Var_local", "tra": null, "var": "y" } ] } } ] } } ] }, { "cons": "Prompt", "modN": null, "decs": [ { "cons": "Dlet", "num": 1, "exp": { "cons": "Mat", "tra": null, "exp": { "cons": "Lit", "tra": null, "StrLit": "hello" }, "exps": [ { "pat": { "cons": "Pvar", "pat": { "var": "y" } }, "exp": { "cons": "Con", "tra": null, "modscon": null, "exps": [ { "cons": "Var_local", "tra": null, "var": "y" } ] } } ] } } ] } ] } ]';

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
