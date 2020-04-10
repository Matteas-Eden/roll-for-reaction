export default function setRace(charRace) {
    return dispatch => {
        dispatch({
            type: 'SET_RACE',
            payload: { charRace: charRace },
        });
    };
}
