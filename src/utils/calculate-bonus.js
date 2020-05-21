/**
 * Calculate bonus damage to deal based on attacker's bonus and enemy's type
 *
 * @deprecated
 * @param {*} playerDamage The damage the player was about to deal
 * @param {*} monsterType The type of the monster the player is attacking
 * @param {*} weaponBonus The bonus the weapon has
 */
export default function calculateBonus(playerDamage, monsterType, weaponBonus) {
    if (!weaponBonus) {
        // The weapon the player is using has no bonus
        return playerDamage;
    }

    // Determine the type of bonus
    const [bonusType, multiplier] = weaponBonus.split('::');
    // As well as the bonus multiplier
    const bonusMult = parseFloat(multiplier, 10);

    // If the bonus is for this monsters type
    if (bonusType === monsterType) {
        // Apply the bonus
        return playerDamage * bonusMult;
    } else {
        // No bonus
        return playerDamage;
    }
}
