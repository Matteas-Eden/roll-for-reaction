import cloneDeep from 'lodash.clonedeep';

const initialState = {
    entries: [],
};

const journalReducer = (state = initialState, { type, payload }) => {
    let newState;

    switch (type) {
        case 'ABILITY_CHECK':
            newState = cloneDeep(state);
            newState.entries.push(
                'You rolled a ' +
                    payload.ability +
                    ' check and got ' +
                    payload.roll
            );

            newState.entries.push(
                'The ' +
                    payload.ability +
                    ' check ' +
                    (payload.roll >= payload.check ? 'succeeded' : 'failed') +
                    ' against ' +
                    payload.check
            );

            return newState;

        case 'DAMAGE_TO_MONSTER':
            newState = cloneDeep(state);
            newState.entries.push(
                payload.damage === 0
                    ? 'You missed the monster!'
                    : 'You dealt ' + payload.damage + ' damage!'
            );
            return newState;

        case 'LOAD_DATA':
            return { ...initialState, ...payload.journal };

        case 'RESET':
            return { ...initialState };

        default:
            return state;
    }
};

export default journalReducer;
