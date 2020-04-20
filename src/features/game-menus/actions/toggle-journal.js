export default function toggleJournal() {
    return (dispatch, getState) => {
        dispatch({
            type: 'TOGGLE_JOURNAL',
            payload: { open: !getState().journal.open },
        });
    };
}
