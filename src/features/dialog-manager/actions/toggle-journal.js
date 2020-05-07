export default function toggleJournal() {
    return (dispatch, getState) => {
        let JournalSideMenu = getState().appState.JournalSideMenu;

        if (getState().dialog.journalDialog) {
            dispatch({
                type: 'PAUSE',
                payload: { pause: false },
            });
        } else {
            dispatch({
                type: 'PAUSE',
                payload: {
                    pause: true && !JournalSideMenu,
                    journalDialog: true,
                },
            });
        }
    };
}
