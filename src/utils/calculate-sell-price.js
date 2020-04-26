import calculateBuyPrice from './calculate-buy-price';
import { MIN_SELL_PRICE_RATIO } from '../config/constants';

// Calculates sell price of an item based on the base price and the charisma
// modifier of the player
// Sell price is constrained to the buy price (cannot exceed it)
export default function calculateSellPrice(basePrice, charismaModifier) {
    const value = Math.ceil(basePrice * (0.5 + charismaModifier / 10));
    const sellPrice =
        value > 0 ? value : Math.ceil(basePrice * MIN_SELL_PRICE_RATIO);
    const buyPrice = calculateBuyPrice(basePrice, charismaModifier);
    return sellPrice > buyPrice ? buyPrice : sellPrice;
}
