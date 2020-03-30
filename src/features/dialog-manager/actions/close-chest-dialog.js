export default function closeChestDialog() {
    return (dispatch, getState) => {
        const { dialog } = getState();
        const { chestOpen } = dialog;

        dispatch({
            type: 'SET_CHEST_DATA',
            payload: chestOpen.item ? chestOpen : false,
        });
        dispatch({
            type: 'PAUSE',
            payload: { pause: false },
        });
    };
}
