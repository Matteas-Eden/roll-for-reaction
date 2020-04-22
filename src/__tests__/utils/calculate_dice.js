import { calculateDamageRange } from '../../utils/dice';

describe('when you roll a dice', () => {
    test('that has the notation 1d4', () => {
        const notation = '1d4';

        const range = calculateDamageRange(notation);

        expect(range.length).toBe(2);
        expect(range).toEqual([1, 4]);
    });

    test('that has the notation (2d10 + 3) * 3', () => {
        const notation = '(2d10 + 3) * 3';

        const range = calculateDamageRange(notation);

        expect(range.length).toBe(2);
        expect(range).toEqual([15, 69]);
    });
});
