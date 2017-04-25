import { decorateSExp } from './StructuredExpUtils.js';

describe('decorateSExp', () => {
    const key = 'nameCaps';
    const func = (item) => item.name.toUpperCase();

    const simple1 = {
        name: 'simple1',
        args: [],
    };
    const expected1 = {
        name: 'simple1',
        args: [],
        [key]: 'SIMPLE1',
    };

    const simple2 = {
        name: 'simple2',
        args: [],
    };
    const expected2 = {
        name: 'simple2',
        args: [],
        [key]: 'SIMPLE2',
    };

    const tuple = {
        isTuple: true,
        elements: [simple1, simple2],
    };
    const expectedTuple = {
        isTuple: true,
        elements: [expected1, expected2],
    };

    const list = [simple1, simple2];
    const expectedList = [expected1, expected2];

    const itemOuter = {
        name: 'itemOuter',
        args: [simple1, simple2],
    };
    const expectedItemOuter = {
        name: 'itemOuter',
        args: [expected1, expected2],
        [key]: 'ITEMOUTER',
    };

    const tupleOuter = {
        name: 'tupleOuter',
        args: [tuple],
    };
    const expectedTupleOuter = {
        name: 'tupleOuter',
        args: [expectedTuple],
        [key]: 'TUPLEOUTER',
    };

    const listOuter = {
        name: 'listOuter',
        args: [list],
    };
    const expectedListOuter = {
        name: 'listOuter',
        args: [expectedList],
        [key]: 'LISTOUTER',
    };

    it('calculates the property for "simple" items', () => {
        expect(decorateSExp(key, func, simple1)).toEqual(expected1);
        expect(simple1).not.toEqual(expected1);

        expect(decorateSExp(key, func, simple2)).toEqual(expected2);
        expect(simple2).not.toEqual(expected2);
    });

    it('calculates the property for the elements of a tuple, and returns a new tuple', () => {
        expect(decorateSExp(key, func, tuple)).toEqual(expectedTuple);

        expect(simple1).not.toEqual(expected1);
        expect(simple2).not.toEqual(expected2);
        expect(tuple).not.toEqual(expectedTuple);
    });

    it('calculates the property for the elements in a list, and returns a new list', () => {
        expect(decorateSExp(key, func, list)).toEqual(expectedList);

        expect(simple1).not.toEqual(expected1);
        expect(simple2).not.toEqual(expected2);
        expect(list).not.toEqual(expectedList);
    });

    it('calculates the property for outer and inner items, and returns a new outer item', () => {
        expect(decorateSExp(key, func, itemOuter)).toEqual(expectedItemOuter);

        expect(simple1).not.toEqual(expected1);
        expect(simple2).not.toEqual(expected2);
        expect(itemOuter).not.toEqual(expectedItemOuter);
    });

    it('calculates the property for outer and tuple, and returns a new outer item', () => {
        expect(decorateSExp(key, func, tupleOuter)).toEqual(expectedTupleOuter);

        expect(simple1).not.toEqual(expected1);
        expect(simple2).not.toEqual(expected2);
        expect(tupleOuter).not.toEqual(expectedTupleOuter);
    });

    it('calculates the property for outer and list, and returns a new outer item', () => {
        expect(decorateSExp(key, func, listOuter)).toEqual(expectedListOuter);

        expect(simple1).not.toEqual(expected1);
        expect(simple2).not.toEqual(expected2);
        expect(listOuter).not.toEqual(expectedListOuter);
    });
});
