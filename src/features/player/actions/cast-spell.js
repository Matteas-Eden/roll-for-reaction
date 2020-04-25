import { checkForMonster, getNewPosition } from './move-player';
import { calculateDamage, d20 } from '../../../utils/dice';
import calculateModifier from '../../../utils/calculate-modifier';
import { SPRITE_SIZE } from '../../../config/constants';

export default function castSpell() {
    return (dispatch, getState) => {
        const { stats, player, monsters, world } = getState();
        const { position, direction, spell } = player;

        if (spell === null) {
            // TODO: perhaps notify the player that they need to 'equip' a spell?
            return;
        } else if (spell.manaCost > stats.mana) {
            dispatch({
                type: 'NOTIFY_PLAYER',
                payload: 'Error: Not enough mana',
            });
            return;
        }

        var spellPosition = null;

        const range = 4 * SPRITE_SIZE;

        switch (direction) {
            case 'NORTH':
                for (
                    let y = position[1];
                    y > position[1] - range;
                    y -= SPRITE_SIZE
                ) {
                    const pos = getNewPosition([position[0], y], direction);
                    spellPosition = pos;
                    if (dispatch(checkForMonster(pos))) {
                        break;
                    }
                }
                break;
            case 'SOUTH':
                for (
                    let y = position[1];
                    y < position[1] + range;
                    y += SPRITE_SIZE
                ) {
                    const pos = getNewPosition([position[0], y], direction);
                    spellPosition = pos;
                    if (dispatch(checkForMonster(pos))) {
                        break;
                    }
                }
                break;
            case 'EAST':
                for (
                    let x = position[0];
                    x < position[0] + range;
                    x += SPRITE_SIZE
                ) {
                    const pos = getNewPosition([x, position[1]], direction);
                    spellPosition = pos;
                    if (dispatch(checkForMonster(pos))) {
                        break;
                    }
                }
                break;
            case 'WEST':
                for (
                    let x = position[0];
                    x > position[0] - range;
                    x -= SPRITE_SIZE
                ) {
                    const pos = getNewPosition([x, position[1]], direction);
                    spellPosition = pos;
                    if (dispatch(checkForMonster(pos))) {
                        break;
                    }
                }
                break;
            default:
        }

        const { currentMap } = world;
        const { components } = monsters;

        const monsterId = dispatch(checkForMonster(spellPosition));
        if (monsterId) {
            // If we're targetting a monster
            const currMonster = components[currentMap][monsterId];
            const monsterPos = currMonster.position;

            const modifier = calculateModifier(stats.abilities.intelligence);
            const attack_value = d20() + modifier;

            dispatch({
                type: 'ABILITY_CHECK',
                payload: {
                    notation: 'd20 + ' + modifier,
                    roll: attack_value,
                    ability: 'intelligence',
                    check: currMonster.defence,
                },
            });

            const damage =
                attack_value >= currMonster.defence
                    ? calculateDamage(spell.damage)
                    : 0;

            dispatch({
                type: 'CAST_SPELL',
                payload: { position: spellPosition, spell: spell },
            });

            // deal damage to monster
            dispatch({
                type: 'DAMAGE_TO_MONSTER',
                payload: {
                    damage,
                    id: currMonster.id,
                    map: currentMap,
                    type: currMonster.type,
                },
            });

            // check if monster died
            if (currMonster.hp - damage <= 0) {
                // and get some exp
                dispatch({
                    type: 'GET_EXP',
                    payload: currMonster.exp,
                });
                if (stats.exp + currMonster.exp >= stats.expToLevel) {
                    dispatch({
                        type: 'PAUSE',
                        payload: {
                            pause: true,
                            levelUp: true,
                        },
                    });
                }
                // play death sound
                dispatch({
                    type: 'MONSTER_DIED',
                    payload: null,
                });
                // replace monster will blood spill
                // need to pass relative tile index
                dispatch({
                    type: 'ADD_BLOOD_SPILL',
                    payload: {
                        x: monsterPos[0] / SPRITE_SIZE,
                        y: monsterPos[1] / SPRITE_SIZE,
                    },
                });
            }

            // take a turn if the player attacked something
            dispatch({
                type: 'TAKE_TURN',
                payload: null,
            });
        } else {
            // Hit a wall or something else
            dispatch({
                type: 'CAST_SPELL',
                payload: { position: spellPosition, spell: spell },
            });
        }
    };
}
