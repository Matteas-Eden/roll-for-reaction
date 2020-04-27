import React from 'react';
import cloneDeep from 'lodash.clonedeep';

import uuidv4 from '../../utils/uuid-v4';
import isAbilityAllocationLevel from '../../utils/is-ability-allocation-level';
import { LEVEL_UP_ABILITY_POINTS } from '../../config/constants';

const initialState = {
    entries: [],
    scroll: true,
};

const aOrAn = nextWord =>
    'aeiou'.includes(nextWord.toLowerCase().charAt(0)) ? 'an' : 'a';

const colourise = (value, type) => (
    <span key={uuidv4()} className={type}>
        {value}
    </span>
);

const journalReducer = (state = initialState, { type, payload }) => {
    let newState;

    switch (type) {
        case 'MONSTER_ABILITY_CHECK': {
            const { entity, attackValue, check, against } = payload;

            newState = cloneDeep(state);
            newState.entries.push({
                key: uuidv4(),
                entry: (
                    <p key={uuidv4()}>
                        The {colourise(entity, 'type')} attacked you with an
                        attack value of {colourise(attackValue, 'score')}{' '}
                        against your {colourise(against, 'ability')} value of{' '}
                        {colourise(check, 'score')}
                    </p>
                ),
            });
            return newState;
        }

        case 'ABILITY_CHECK': {
            const { ability, entity, roll, check, against } = payload;

            newState = cloneDeep(state);
            newState.entries.push({
                key: uuidv4(),
                entry: (
                    <p key={uuidv4()}>
                        You performed {aOrAn(ability)}{' '}
                        {colourise(ability, 'ability')} check and rolled a{' '}
                        {colourise(roll, 'score')}, which{' '}
                        {roll >= check ? 'succeeded' : 'failed'} against the{' '}
                        {colourise(against, 'ability')} value of{' '}
                        {colourise(check, 'score')} for the{' '}
                        {colourise(entity, 'type')}
                    </p>
                ),
            });

            return newState;
        }

        case 'HEAL_HP': {
            newState = cloneDeep(state);
            newState.entries.push({
                key: uuidv4(),
                entry: (
                    <p key={uuidv4()}>
                        You restored {colourise(payload, 'restore')} health!
                    </p>
                ),
            });
            return newState;
        }

        case 'DAMAGE_TO_PLAYER': {
            const { entity, damage } = payload;

            newState = cloneDeep(state);
            newState.entries.push({
                key: uuidv4(),
                entry:
                    payload.damage === 0 ? (
                        <p key={uuidv4()}>
                            The {colourise(entity, 'type')} missed you!
                        </p>
                    ) : (
                        <p key={uuidv4()}>
                            The {colourise(entity, 'type')} dealt{' '}
                            {colourise(damage, 'damage-to-player')} damage to
                            you!
                        </p>
                    ),
            });
            return newState;
        }

        case 'DAMAGE_TO_MONSTER': {
            const { entity, damage } = payload;

            newState = cloneDeep(state);
            newState.entries.push({
                key: uuidv4(),
                entry:
                    damage === 0 ? (
                        <p key={uuidv4()}>
                            You missed the {colourise(entity, 'type')}!
                        </p>
                    ) : (
                        <p key={uuidv4()}>
                            You dealt {colourise(damage, 'damage-to-monster')}{' '}
                            damage to the {colourise(entity, 'type')}!
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
                    <p key={uuidv4()}>You cast {colourise(name, 'spell')}</p>
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
                    <p key={uuidv4()}>
                        You gained an item: {colourise(name, 'get-item')}
                    </p>
                ),
            });
            return newState;
        }

        case 'LEVEL_UP': {
            const { level, hp, mana } = payload;

            newState = cloneDeep(state);
            newState.entries.push({
                key: uuidv4(),
                entry: (
                    <p key={uuidv4()}>
                        You reached level {colourise(level, 'level')}, and
                        gained {colourise(hp, 'restore')} hp and{' '}
                        {colourise(mana, 'restore')} mana!
                    </p>
                ),
            });

            if (isAbilityAllocationLevel(level)) {
                newState.entries.push({
                    key: uuidv4(),
                    entry: (
                        <p key={uuidv4()}>
                            You gained{' '}
                            {colourise(LEVEL_UP_ABILITY_POINTS, 'level')}{' '}
                            ability points!
                        </p>
                    ),
                });
            }

            return newState;
        }

        case 'SET_JOURNAL_SCROLLING':
            newState = cloneDeep(state);
            newState.scroll = payload;
            return newState;

        case 'CAST_SPELL':
            newState = cloneDeep(state);
            newState.entries.push('You cast ' + payload.spell.name);
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
