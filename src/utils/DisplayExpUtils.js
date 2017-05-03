// Takes any `exp`, and adds a property with a name of `key` and a value of
// `f(exp)` _if_ that `exp` is an `Item`. In other words, this function does
// not decorate a `Tuple` or a `List`.
export const decorateExp = (key, func, exp) => {
    const mapDecorate = (element) => decorateExp(key, func, element);
    if (Array.isArray(exp)) { // List
        return exp.map(mapDecorate);
    } else if (exp.isTuple) { // Tuple
        return {
            ...exp,
            elements: exp.elements.map(mapDecorate),
        };
    } else { // Item
        return {
            ...exp,
            args: exp.args.map(mapDecorate),
            [key]: func(exp),
        };
    }
}
