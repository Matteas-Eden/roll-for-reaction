export default function changeTutorialPage(page) {
    return dispatch => {
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
