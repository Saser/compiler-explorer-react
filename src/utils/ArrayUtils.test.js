import { range } from './ArrayUtils.js';

describe('range', () => {
    it('returns empty array on `start` === `end`', () => {
        expect(range(0, 0)).toEqual([]);
        expect(range(1, 1)).toEqual([]);
        expect(range(-1, -1)).toEqual([]);
    });

    it('returns empty array when `start` > `end`', () => {
        expect(range(1, 0)).toEqual([]);
        expect(range(1, -1)).toEqual([]);
        expect(range(0, -1)).toEqual([]);
        expect(range(-1, -2)).toEqual([]);
    });

    it('returns (`end` - `start`) elements', () => {
        expect(range(0, 0)).toHaveLength(0 - 0); // === 0
        expect(range(10, 10)).toHaveLength(10 - 10); // === 0
        expect(range(0, 1)).toHaveLength(1 - 0); // === 1
        expect(range(-1, 1)).toHaveLength(1 - (-1)); // === 2
        expect(range(0, 10)).toHaveLength(10 - 0); // === 10
        expect(range(-10, -5)).toHaveLength(-5 - (-10)) // === 5;
    });

    it('always includes `start` as element if non-empty', () => {
        expect(range(0, 1)).toContain(0);
        expect(range(0, 10)).toContain(0);
        expect(range(9, 10)).toContain(9);
        expect(range(-10, 0)).toContain(-10);
        expect(range(-10, -9)).toContain(-10);
    });

    it('never includes `end` as en element', () => {
        expect(range(0, 0)).not.toContain(0);
        expect(range(0, 1)).not.toContain(1);
        expect(range(1, 1)).not.toContain(1);
        expect(range(0, 10)).not.toContain(10);
        expect(range(-10, 10)).not.toContain(10);
        expect(range(-10, 0)).not.toContain(0);
        expect(range(-10, -10)).not.toContain(-10);
    });
});
