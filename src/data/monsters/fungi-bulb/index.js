import FungiBulbSprite from './fungi-bulb.png';

const FungiBulb = {
    hp: 16,
    maxHp: 16,
    attackValue: '2d10 + 7',
    defence: 2,
    dice: '1d6',
    exp: 38,
    type: 'fungi bulb',
    sprite: { WEST: FungiBulbSprite, EAST: FungiBulbSprite },
    ai: 'normal',
    originalAI: 'normal',
    direction: 'WEST',
    aiTurns: 0,
};

export default FungiBulb;
