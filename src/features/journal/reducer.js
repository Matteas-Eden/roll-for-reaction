import React from 'react';
import cloneDeep from 'lodash.clonedeep';

import uuidv4 from '../../utils/uuid-v4';

const initialState = {
    entries: [],
    scroll: true,
};

const aOrAn = nextWord =>
    'aeiou'.includes(nextWord.toLowerCase().charAt(0)) ? 'an' : 'a';

const journalReducer = (state = initialState, { type, payload }) => {
    let newState;

    switch (type) {
        case 'MONSTER_ABILITY_CHECK': {
            const { type, attackValue, check, against } = payload;
            newState = cloneDeep(state);
            newState.entries.push({
                key: uuidv4(),
                entry: (
                    <p>
                        The <span className="type">{type}</span> attacked you
                        with an attack value of{' '}
                        <span className="score">{attackValue}</span> against
                        your <span className="ability">{against}</span> value of{' '}
                        <span className="score">{check}</span>
                    </p>
                ),
            });
            return newState;
        }

        case 'ABILITY_CHECK': {
            const { ability, roll, check, type, against } = payload;
            newState = cloneDeep(state);
            newState.entries.push({
                key: uuidv4(),
                entry: (
                    <p>
                        You performed {aOrAn(ability)}{' '}
                        <span className="ability">{ability}</span> check and
                        rolled a <span className="score">{roll}</span>, which{' '}
                        {roll >= check ? 'succeeded' : 'failed'} against the{' '}
                        <span className="type">{type}'s</span>{' '}
                        <span className="ability">{against}</span> value of{' '}
                        <span className="score">{check}</span>
                    </p>
                ),
            });

            return newState;
        }

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

        case 'DAMAGE_TO_PLAYER': {
            const { type, damage } = payload;

            newState = cloneDeep(state);
            newState.entries.push({
                key: uuidv4(),
                entry:
                    payload.damage === 0 ? (
                        <p>
                            The <span className="type">{type}</span> missed you!
                        </p>
                    ) : (
                        <p>
                            The <span className="type">{type}</span> dealt{' '}
                            <span className="damage-to-player">{damage}</span>{' '}
                            damage to you!
                        </p>
                    ),
            });
            return newState;
        }

        case 'DAMAGE_TO_MONSTER': {
            const { type, damage } = payload;
            newState = cloneDeep(state);
            newState.entries.push({
                key: uuidv4(),
                entry:
                    damage === 0 ? (
                        <p>
                            You missed the <span className="type">{type}</span>!
                        </p>
                    ) : (
                        <p>
                            You dealt{' '}
                            <span className="damage-to-monster">{damage}</span>{' '}
                            damage to the <span className="type">{type}</span>!
                        </p>
                    ),
            });
            return newState;
        }

        case 'CAST_SPELL': {
            const { name } = payload.spell;
            newState = cloneDeep(state);
            newState.entries.push({
                key: uuidv4(),
                entry: (
                    <p>
                        You cast <span className="spell">{name}</span>
                    </p>
                ),
            });
            return newState;
        }

        case 'GET_ITEM': {
            const { name } = payload;
            newState = cloneDeep(state);
            newState.entries.push({
                key: uuidv4(),
                entry: (
                    <p>
                        You gained an item:{' '}
                        <span className="get-item">{name}</span>
                    </p>
                ),
            });
            return newState;
        }

        case 'SET_JOURNAL_SCROLLING':
            newState = cloneDeep(state);
            newState.scroll = payload;
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
