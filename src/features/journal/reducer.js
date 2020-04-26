import React from 'react';
import cloneDeep from 'lodash.clonedeep';

import uuidv4 from '../../utils/uuid-v4';

const initialState = {
    entries: [],
};

const aOrAn = nextWord =>
    'aeiou'.includes(nextWord.toLowerCase().charAt(0)) ? 'an' : 'a';

const journalReducer = (state = initialState, { type, payload }) => {
    let newState;

    switch (type) {
        case 'MONSTER_ABILITY_CHECK':
            newState = cloneDeep(state);
            newState.entries.push({
                key: uuidv4(),
                entry: (
                    <p>
                        The <span className="type">{payload.type}</span>{' '}
                        attacked you with an attack value of{' '}
                        <span className="score">{payload.attack_value}</span>{' '}
                        against your defense value of{' '}
                        <span className="score">{payload.check}</span>
                    </p>
                ),
            });
            return newState;

        case 'ABILITY_CHECK':
            newState = cloneDeep(state);
            newState.entries.push({
                key: uuidv4(),
                entry: (
                    <p>
                        You performed {aOrAn(payload.ability)}{' '}
                        <span className="ability">{payload.ability}</span> check{' '}
                        and rolled a{' '}
                        <span className="score">{payload.roll}</span>, which{' '}
                        {payload.roll >= payload.check ? 'succeeded' : 'failed'}{' '}
                        against the{' '}
                        <span className="type">{payload.type}'s</span>{' '}
                        <span className="score">{payload.check}</span>
                    </p>
                ),
            });

            return newState;

        case 'HEAL_HP':
            newState = cloneDeep(state);
            newState.entries.push({
                key: uuidv4(),
                entry: (
                    <p>
                        You restored <span className="restore">{payload}</span>{' '}
                        health!
                    </p>
                ),
            });
            return newState;

        case 'DAMAGE_TO_PLAYER':
            newState = cloneDeep(state);
            newState.entries.push({
                key: uuidv4(),
                entry:
                    payload.damage === 0 ? (
                        <p>
                            The <span className="type">{payload.type}</span>{' '}
                            missed you!
                        </p>
                    ) : (
                        <p>
                            The <span className="type">{payload.type}</span>{' '}
                            dealt{' '}
                            <span className="damage-to-player">
                                {payload.damage}
                            </span>{' '}
                            damage to you!
                        </p>
                    ),
            });
            return newState;

        case 'DAMAGE_TO_MONSTER':
            newState = cloneDeep(state);
            newState.entries.push({
                key: uuidv4(),
                entry:
                    payload.damage === 0 ? (
                        <p>
                            You missed the{' '}
                            <span className="type">{payload.type}</span>!
                        </p>
                    ) : (
                        <p>
                            You dealt{' '}
                            <span className="damage-to-monster">
                                {payload.damage}
                            </span>{' '}
                            damage to the{' '}
                            <span className="type">{payload.type}</span>!
                        </p>
                    ),
            });
            return newState;

        case 'CAST_SPELL':
            newState = cloneDeep(state);
            newState.entries.push({
                key: uuidv4(),
                entry: (
                    <p>
                        You cast{' '}
                        <span className="spell">{payload.spell.name}</span>
                    </p>
                ),
            });
            return newState;

        case 'GET_ITEM':
            newState = cloneDeep(state);
            newState.entries.push({
                key: uuidv4(),
                entry: (
                    <p>
                        You gained an item:{' '}
                        <span className="get-item">{payload.name}</span>
                    </p>
                ),
            });
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
