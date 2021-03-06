import randomItem from '../dialogs/chest-loot/random-item';
import { spriteToCoordinates } from '../../../utils/sprite-to-coordinates';

export default function openChest() {
    return (dispatch, getState) => {
        const { stats, dialog, player } = getState();
        const { level } = stats;

        const { chestOpen } = dialog;
        const { item } = chestOpen;

        const { x, y } = spriteToCoordinates(player.position);

        let itemDrop = null;
        if (
            (x !== chestOpen.x || y !== chestOpen.y) &&
            (item === undefined || item === null)
        ) {
            // Give the player a 25% chance to get a random item, only if there isn't an item already in it
            const chance = Math.floor(Math.random() * 100) + 1;
            if (chance <= 25) {
                itemDrop = randomItem(level);
            }
        } else {
            // An item is already in the chest, so let's use it
            itemDrop = item;
        }

        // get a random amount of gold between 1 and 8 PLUS player level x3
        const gold = Math.floor(Math.random() * 8) + 1 + level * 3;
        // get some level based exp
        const exp = level * 5 + 5;

        dispatch({
            type: 'SET_CHEST_DATA',
            payload: {
                exp,
                gold,
                item: itemDrop,
                x: x,
                y: y,
            },
        });
    };
}
