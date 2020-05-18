import BatSprite from './bat.png';

const Bat = {
    hp: 10,
    maxHp: 10,
    attackValue: 6,
    defence: 0,
    dice: '1d4',
    exp: 16,
    type: 'bat',
    sprite: { WEST: BatSprite, EAST: BatSprite },
    ai: 'normal',
    originalAI: 'normal',
    direction: 'WEST',
    aiTurns: 0,
};

export default Bat;
