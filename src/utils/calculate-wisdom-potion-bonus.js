export default function calculateWisdomPotionBonus(baseAmount, wisdomBonus) {
    return baseAmount + (wisdomBonus > 0) ? wisdomBonus * wisdomBonus : 0;
}
