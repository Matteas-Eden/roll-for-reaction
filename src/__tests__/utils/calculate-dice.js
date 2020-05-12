import { calculateDamageRange } from '../../utils/dice';

describe('when you roll a dice', () => {
    test('the range should have two elements', () => {
        const notation = '';
        const range = calculateDamageRange(notation);
        expect(range.length).toBe(2);
    });

    test('that has the notation 1d4', () => {
        const notation = '1d4';
        const range = calculateDamageRange(notation);
        expect(range).toEqual([1, 4]);
    });

    test('that has the notation (2d10 + 3) * 3', () => {
        const notation = '(2d10 + 3) * 3';
        const range = calculateDamageRange(notation);
        expect(range).toEqual([15, 69]);
    });

    test('that has the notation 2d10l1 + 3', () => {
        const notation = '2d10l1 + 3';
        const range = calculateDamageRange(notation);
        expect(range).toEqual([4, 13]);
    });

    test('that has the notation 2d1 + 5', () => {
        const notation = '2d1 + 5';
        const range = calculateDamageRange(notation);
        expect(range).toEqual([7, 7]);
    });

    test('that has the notation 5', () => {
        const notation = '5';
        const range = calculateDamageRange(notation);
        expect(range).toEqual([5, 5]);
    });

    test('that has the notation 2d', () => {
        const notation = '2d';
        const range = calculateDamageRange(notation);
        expect(range).toEqual([0, 0]);
    });

    test('that has no notation', () => {
        const notation = '';
        const range = calculateDamageRange(notation);
        expect(range).toEqual([0, 0]);
    });
});
