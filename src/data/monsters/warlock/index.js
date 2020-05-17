import WarlockSprite from './warlock.png';
import Fireball from '../../spells/fireball';

const Warlock = {
    hp: 30,
    maxHp: 30,
    attackValue: 27,
    defence: 2,
    dice: '3d6+4',
    exp: 320,
    type: 'warlock',
    sprite: WarlockSprite,
    ai: 'magical',
    originalAI: 'magical',
    projectile: Fireball,
    aiTurns: 0,
};

export default Warlock;
