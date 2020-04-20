import cloneDeep from 'lodash.clonedeep';

const initialState = {
    entries: [],
    open: false,
};

const journalReducer = (state = initialState, { type, payload }) => {
    let newState;

    switch (type) {
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
