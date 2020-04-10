export default function setClass(charClass) {
    return dispatch => {
        dispatch({
            type: 'SET_CLASS',
            payload: { charClass: charClass },
        });
    };
}
