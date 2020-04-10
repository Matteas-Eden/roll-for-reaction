export default function confirmAbilityScoreDialog() {
    return (dispatch, getState) => {
        const { abilities } = getState().dialog;

        if (getState().dialog.fromLevelUp) {
            dispatch({
                type: 'SET_ABILITY_SCORES',
                payload: {
                    abilities: {
                        ...abilities,
                    },
                },
            });

            dispatch({
                type: 'PAUSE',
                payload: {
                    pause: false,
                    fromLevelUp: false,
                },
            });
        } else {
            dispatch({
                type: 'SET_ABILITY_SCORES',
                payload: {
                    abilities: {
                        ...abilities,
                        points: 0,
                    },
                },
            });

            dispatch({
                type: 'PAUSE',
                payload: {
                    pause: true,
                    gameInstructions: true,
                },
            });
        }
    };
}
