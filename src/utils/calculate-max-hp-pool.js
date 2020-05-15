import { BASE_HEALTH, MIN_HEALTH_BONUS } from '../config/constants';

export default function calculateMaxHpPool(level, constitutionBonus) {
    let healthBonus;
    if (level === 1) {
        healthBonus = constitutionBonus >= 0 ? 5 + constitutionBonus : 0;
    } else {
        healthBonus =
            constitutionBonus >= 0
                ? level * (5 + constitutionBonus)
                : (level - 1) * MIN_HEALTH_BONUS;
    }
    return BASE_HEALTH + healthBonus;
}
