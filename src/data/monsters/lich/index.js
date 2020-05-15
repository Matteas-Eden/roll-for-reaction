import LichSprite from './lich.png';

const Lich = {
    hp: 80,
    maxHp: 80,
    attackValue: 39,
    defence: 12,
    dice: '2d20',
    exp: 1000,
    type: 'lich',
    sprite: LichSprite,
    ai: 'boss',
    originalAI: 'boss',
    aiTurns: 0,
};

export default Lich;
