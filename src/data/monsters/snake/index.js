import SnakeSprite from './snake.png';

const Snake = {
    hp: 8,
    maxHp: 8,
    attackValue: '1d8 + 2',
    defence: 0,
    dice: '1d4',
    exp: 18,
    type: 'snake',
    sprite: { WEST: SnakeSprite, EAST: SnakeSprite },
    ai: 'normal',
    originalAI: 'normal',
    direction: 'WEST',
    aiTurns: 0,
};

export default Snake;
