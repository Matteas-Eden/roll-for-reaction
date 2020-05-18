import ImpSprite from './imp.png';

const Imp = {
    hp: 40,
    maxHp: 40,
    attackValue: 24,
    defence: 2,
    dice: '3d4 + 4',
    exp: 150,
    type: 'imp',
    sprite: { WEST: ImpSprite, EAST: ImpSprite },
    ai: 'normal',
    originalAI: 'normal',
    direction: 'WEST',
    aiTurns: 0,
};

export default Imp;
