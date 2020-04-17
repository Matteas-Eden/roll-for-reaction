import { RACE_ABILITY_BONUS } from '../config/constants';
export default function addRaceAbilityBonus(ability1, ability2) {
    ability1 += RACE_ABILITY_BONUS;
    ability2 += RACE_ABILITY_BONUS;
}
