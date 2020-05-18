import SalamanderSprite from './salamander.png';

const Salamander = {
    hp: 12,
    maxHp: 12,
    attackValue: '1d10 + 5',
    defence: 1,
    dice: '1d4 + 1',
    exp: 25,
    type: 'salamander',
    sprite: { WEST: SalamanderSprite, EAST: SalamanderSprite },
    ai: 'ranged',
    originalAI: 'ranged',
    direction: 'WEST',
    aiTurns: 0,
};

export default Salamander;
