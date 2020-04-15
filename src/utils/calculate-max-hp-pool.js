import { BASE_HEALTH } from '../config/constants';
// src\utils\calculate-max-hp-pool.js
// src\config\constants.js

export default function calculateMaxHpPool(level, constitutionBonus) {
    console.log(level, constitutionBonus);
    return (
        BASE_HEALTH +
        (level - 1) * (constitutionBonus > 0 ? constitutionBonus : 0)
    );
}
