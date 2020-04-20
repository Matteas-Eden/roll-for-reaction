export default function attackPlayer(attackValue) {
    return (dispatch, getState) => {
        const { stats } = getState();

        const calculatedMonsterDamage =
            attackValue >= Math.max(stats.defence, 0) ? attackValue : 0;

        dispatch({
            type: 'DAMAGE_TO_PLAYER',
            payload: calculatedMonsterDamage,
        });
        // show the attack animation and play sound
        dispatch({
            type: 'MONSTER_ATTACK',
            payload: null,
        });
        // check if player died
        if (stats.hp - calculatedMonsterDamage <= 0) {
            // play death sound
            dispatch({
                type: 'PLAYER_DIED',
                payload: null,
            });
            // if it did, game over
            dispatch({
                type: 'PAUSE',
                payload: {
                    gameOver: true,
                    pause: true,
                },
            });
        }
    };
}
