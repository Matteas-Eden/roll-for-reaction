import { BASE_MANA, MIN_MANA_BONUS } from '../config/constants';

export default function calculateMaxManaPool(level, intelligenceBonus) {
    let manaBonus;
    if (level === 1) {
        manaBonus =
            intelligenceBonus >= 0
                ? (intelligenceBonus + 2) * MIN_MANA_BONUS
                : 0;
    } else {
        manaBonus =
            intelligenceBonus >= 0
                ? level * (intelligenceBonus + 2) * MIN_MANA_BONUS
                : (level - 1) * MIN_MANA_BONUS;
    }
    return BASE_MANA + manaBonus;
}
