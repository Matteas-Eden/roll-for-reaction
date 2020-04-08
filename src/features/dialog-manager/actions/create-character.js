export default function createCharacter() {
    return (dispatch, getState) => {
        const {
            characterName,
            characterRace,
            characterClass,
        } = getState().dialog;

        dispatch({
            type: 'CREATE_CHARACTER',
            payload: {
                characterName: characterName,
                characterRace: characterRace,
                characterClass: characterClass,
            },
        });
        // return dispatch => {
        dispatch({
            type: 'PAUSE',
            payload: {
                pause: true,
                abilityDialog: true,
                // gameInstructions: true,
            },
        });
    };
}
