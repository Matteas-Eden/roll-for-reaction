import cloneDeep from 'lodash.clonedeep';

const initialState = {
    entries: [],
};

const correctGrammar = word => {
    switch (word.charAt(0)) {
        case 'a':
        case 'A':
        case 'e':
        case 'E':
        case 'i':
        case 'I':
        case 'o':
        case 'O':
        case 'u':
        case 'U':
            return 'an';
        default:
            return 'a';
    }
};

const journalReducer = (state = initialState, { type, payload }) => {
    let newState;

    switch (type) {
        case 'MONSTER_ABILITY_CHECK':
            newState = cloneDeep(state);
            newState.entries.push(
                'The ' +
                    payload.type +
                    ' attacked you with an attack value of ' +
                    payload.attack_value +
                    ' against your defense value of ' +
                    payload.check
            );
            return newState;

        case 'ABILITY_CHECK':
            newState = cloneDeep(state);
            newState.entries.push(
                'You rolled ' +
                    correctGrammar(payload.ability) +
                    ' ' +
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

        case 'DAMAGE_TO_PLAYER':
            newState = cloneDeep(state);
            newState.entries.push(
                payload.damage === 0
                    ? 'The ' + payload.type + ' missed you!'
                    : 'The ' +
                          payload.type +
                          ' dealt ' +
                          payload.damage +
                          ' damage to you!'
            );
            return newState;

        case 'DAMAGE_TO_MONSTER':
            newState = cloneDeep(state);
            newState.entries.push(
                payload.damage === 0
                    ? 'You missed the ' + payload.type + '!'
                    : 'You dealt ' +
                          payload.damage +
                          ' damage to the ' +
                          payload.type +
                          '!'
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
