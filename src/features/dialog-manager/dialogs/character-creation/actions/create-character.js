export default function createCharacter() {
    return (dispatch, getState) => {
        const { charName, charRace, charClass } = getState().dialog.character;

        dispatch({
            type: 'CREATE_CHARACTER',
            payload: {
                charName: charName,
                charRace: charRace,
                charClass: charClass,
            },
        });

        dispatch({
            type: 'PAUSE',
            payload: {
                pause: true,
                abilityDialog: true,
            },
        });
    };
}
