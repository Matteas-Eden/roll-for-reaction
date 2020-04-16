// Reset all ability scores to default
import { STARTING_ABILITY_SCORE_VALUE } from '../config/constants';
export default function resetAbilityScoreValues(abilities) {
    abilities.strength = STARTING_ABILITY_SCORE_VALUE;
    abilities.constitution = STARTING_ABILITY_SCORE_VALUE;
    abilities.dexterity = STARTING_ABILITY_SCORE_VALUE;
    abilities.charisma = STARTING_ABILITY_SCORE_VALUE;
    abilities.intelligence = STARTING_ABILITY_SCORE_VALUE;
    abilities.wisdom = STARTING_ABILITY_SCORE_VALUE;
    return abilities;
}
