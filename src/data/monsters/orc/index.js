import OrcSprite from './orc.png';

const Orc = {
    hp: 20,
    maxHp: 20,
    attackValue: 15,
    defence: 4,
    dice: '1d6 + 2',
    exp: 40,
    type: 'orc',
    sprite: { WEST: OrcSprite, EAST: OrcSprite },
    ai: 'normal',
    originalAI: 'normal',
    direction: 'WEST',
    aiTurns: 0,
};

export default Orc;
