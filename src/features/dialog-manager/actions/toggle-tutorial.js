export default function toggleTutorial() {
    return (dispatch, getState) => {
        dispatch({
            type: 'PAUSE',
            payload: {
                pause: true,
                tutorial: true,
                tutorialPage: getState().dialog.tutorialPage,
            },
        });
    };
}
