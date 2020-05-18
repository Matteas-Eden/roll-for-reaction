import WarlockSprite from './warlock.png';
import Fireball from '../../spells/fireball';

const Warlock = {
    hp: 32,
    maxHp: 32,
    attackValue: 34,
    defence: 3,
    dice: '3d6+4',
    exp: 320,
    type: 'warlock',
    sprite: { WEST: WarlockSprite, EAST: WarlockSprite },
    ai: 'magical',
    originalAI: 'magical',
    projectile: Fireball,
    direction: 'WEST',
    aiTurns: 0,
};

export default Warlock;
