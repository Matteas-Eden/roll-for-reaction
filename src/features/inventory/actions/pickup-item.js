export default function pickupItem() {
    return (dispatch, getState) => {
        const { inventory, dialog, world, player } = getState();

        // const { item } = dialog.chestOpen;
        const { chests } = world;
        console.log(chests);
        const chest = chests[player.position[0] + ', ' + player.position[1]];
        console.log(player.position);
        const item = chest.item;

        if (!item) return;

        const { items, maxItems } = inventory;

        if (items.length < maxItems) {
            dispatch({
                type: 'GET_ITEM',
                payload: item,
            });
        } else {
            dispatch({
                type: 'TOO_MANY_ITEMS',
                payload: item,
            });
        }
    };
}
