import DragonSprite from './dragon.png';

const Dragon = {
    hp: 60,
    maxHp: 60,
    attackValue: 36,
    defence: 8,
    dice: '2d20',
    exp: 400,
    type: 'dragon',
    sprite: DragonSprite,
    ai: 'normal',
    originalAI: 'normal',
    aiTurns: 0,
};

export default Dragon;
