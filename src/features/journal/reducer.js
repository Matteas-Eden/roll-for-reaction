import cloneDeep from 'lodash.clonedeep';

const initialState = {
    entries: [],
    open: false,
};

const journalReducer = (state = initialState, { type, payload }) => {
    let newState;

    switch (type) {
        case 'ABILITY_CHECK':
            newState = cloneDeep(state);
            newState.entries.push(
                'You rolled a ' +
                    payload.ability +
                    ' check  and got ' +
                    payload.roll
            );

            if (payload.roll >= payload.check) {
                newState.entries.push('The ability check succeeded!');
            } else {
                newState.push('The ability check failed');
            }

            return newState;

        case 'DAMAGE_TO_MONSTER':
            newState = cloneDeep(state);
            newState.entries.push(
                payload.damage === 0
                    ? 'You missed the monster!'
                    : 'You dealt ' + payload.damage + ' damage!'
            );
            return newState;

        case 'TOGGLE_JOURNAL':
            return { ...state, open: payload.open };

        case 'LOAD_DATA':
            return { ...initialState, ...payload.journal };

        case 'RESET':
            return { ...initialState };

        default:
            return state;
    }
};

export default journalReducer;
