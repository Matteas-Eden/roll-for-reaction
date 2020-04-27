export default function consumePotion(item) {
    return dispatch => {
        if (item.kind === 'health') {
            dispatch({
                type: 'HEAL_HP',
                payload: item.amount,
            });
        } else if (item.kind === 'mana') {
            dispatch({
                type: 'REGENERATE_MANA',
                payload: { kind: 'potion', amount: item.amount },
            });
        }

        dispatch({
            type: 'USE_ITEM',
            payload: item,
        });
    };
}
