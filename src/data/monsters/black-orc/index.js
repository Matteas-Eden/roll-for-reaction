import BlackOrcSprite from './black-orc.png';

const BlackOrc = {
    hp: 55,
    maxHp: 55,
    attackValue: 33,
    defence: 5,
    dice: '3d8',
    exp: 280,
    type: 'blackOrc',
    sprite: { WEST: BlackOrcSprite, EAST: BlackOrcSprite },
    ai: 'normal',
    originalAI: 'normal',
    direction: 'WEST',
    aiTurns: 0,
};

export default BlackOrc;
