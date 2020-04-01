export default function createCharacter() {
    return dispatch => {
        dispatch({
            type: 'PAUSE',
            payload: {
                pause: true,
                gameInstructions: true,
            },
        });
    };
}
