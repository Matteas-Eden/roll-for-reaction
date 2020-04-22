export default function toggleJournal() {
    return (dispatch, getState) => {
        if (getState().dialog.journal) {
            dispatch({
                type: 'PAUSE',
                payload: { pause: false },
            });
        } else {
            dispatch({
                type: 'PAUSE',
                payload: {
                    pause: true,
                    journal: true,
                },
            });
        }
    };
}
