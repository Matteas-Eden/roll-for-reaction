export default function toggleTutorial() {
    return (dispatch, getState) => {
        dispatch({
            type: 'PAUSE',
            payload: {
                pause: true,
                tutorialDialog: true,
                tutorialPage: getState().dialog.tutorialPage,
            },
        });
    };
}
