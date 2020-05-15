import LichSprite from './lich.png';

const Lich = {
    hp: 100,
    maxHp: 100,
    attackValue: '3d20 + 20',
    defence: 12,
    dice: '2d20',
    exp: 1000,
    type: 'lich',
    sprite: LichSprite,
    ai: 'normal',
    aiTurns: 0,
};

export default Lich;
