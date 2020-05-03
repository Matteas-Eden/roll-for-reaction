import items, { randomItemsT1, randomItemsT2 } from '../../data/items';
import { TIER_2 } from '../../config/constants';
// returns the correct tier of items depending on player level
export default function shopItems(level) {
    if (level < TIER_2) {
        return [
            ...randomItemsT1,
            items.other.BackpackUpgrade,
            items.potions.HpPotion,
            items.potions.GreatHpPotion,
        ];
    } else {
        return [
            ...randomItemsT2,
            items.other.BackpackUpgrade,
            items.potions.HpPotion,
            items.potions.GreatHpPotion,
            // items.potions.MightyHpPotion,
            // items.potions.DivineHpPotion,
            items.potions.MightyManaPotion,
            items.potions.DivineManaPotion,
        ];
    }
}
