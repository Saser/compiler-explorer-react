// Takes any `sExp`, and adds a property with a name of `key` and a value of
// `f(sExp)` _if_ that `sExp` is an `Item`. In other words, this function does
// not decorate a `Tuple` or a `List`.
export const decorateSExp = (key, func, sExp) => {
    const mapDecorate = (element) => decorateSExp(key, func, element);
    if (Array.isArray(sExp)) { // List
        return sExp.map(mapDecorate);
    } else if (sExp.isTuple) { // Tuple
        return {
            ...sExp,
            elements: sExp.elements.map(mapDecorate),
        };
    } else { // Item
        return {
            ...sExp,
            args: sExp.args.map(mapDecorate),
            [key]: func(sExp),
        };
    }
}
