import { calculateDamage } from '../../../utils/dice';
import { SPRITE_SIZE } from '../../../config/constants';

export default function monsterCastSpell(monster) {
    return (dispatch, getState) => {
        const { stats, player, world } = getState();
        const { id, attackValue, dice, type, position } = monster;
        const { currentMap } = world;

        const target = monster.projectile.target.split('::');

        if (target[0] === 'self') {
            dispatch({
                type: 'MONSTER_CAST_SPELL',
                payload: {
                    position,
                    direction: 'NORTH',
                    entity: monster.type,
                    spell: monster.projectile,
                },
            });

            const healAmount = calculateDamage(monster.projectile.damage);

            if (target[1] === 'heal') {
                dispatch({
                    type: 'MONSTER_HEAL_HP',
                    payload: { healAmount, id, map: currentMap, entity: type },
                });
            }
        } else {
            const calculatedMonsterDamage =
                attackValue >= Math.max(stats.defence, 0)
                    ? calculateDamage(dice)
                    : 0;

            dispatch({
                type: 'MONSTER_ABILITY_CHECK',
                payload: {
                    attackValue: attackValue,
                    check: Math.max(stats.defence, 0),
                    against: 'defence',
                    entity: type,
                    defender: 'player',
                },
            });

            const targetPosition = [
                position[0] - player.position[0],
                position[1] - player.position[1],
            ];

            let direction = '';
            if (player.position[0] !== position[0]) {
                if (player.position[0] < position[0]) {
                    direction = 'WEST';
                    targetPosition[0] -= SPRITE_SIZE;
                } else {
                    direction = 'EAST';
                    targetPosition[0] += SPRITE_SIZE;
                }
            } else if (player.position[1] !== position[1]) {
                if (player.position[1] < position[1]) {
                    direction = 'NORTH';
                    targetPosition[1] -= SPRITE_SIZE;
                } else {
                    direction = 'SOUTH';
                    targetPosition[1] += SPRITE_SIZE;
                }
            }

            dispatch({
                type: 'MONSTER_CAST_SPELL',
                payload: {
                    position: targetPosition,
                    direction,
                    entity: monster.type,
                    spell: monster.projectile,
                },
            });

            if (calculatedMonsterDamage > 0) {
                // show the attack animation and play sound
                dispatch({
                    type: 'MONSTER_ATTACK',
                    payload: null,
                });
            }

            dispatch({
                type: 'DAMAGE_TO_PLAYER',
                payload: { damage: calculatedMonsterDamage, entity: type },
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
        }
    };
}
