import DragonSprite from './dragon.png';
import Mend from '../../spells/mend';

const Dragon = {
    hp: 60,
    maxHp: 60,
    attackValue: 36,
    defence: 8,
    dice: '2d20',
    exp: 400,
    type: 'dragon',
    sprite: DragonSprite,
    ai: 'healer',
    originalAI: 'healer',
    projectile: Mend,
    aiTurns: 0,
};

export default Dragon;
