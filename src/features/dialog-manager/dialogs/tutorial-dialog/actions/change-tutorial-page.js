export default function changeTutorialPage(page) {
    return (dispatch, getState) => {
        dispatch({
            type: 'PAUSE',
            payload: {
                pause: true,
                tutorial: true,
                tutorialPage: page,
            },
        });
    };
}
