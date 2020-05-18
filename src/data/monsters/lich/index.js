import LichSprite from './lich.png';
import LichFloppedSprite from './lich-flopped.png';

const Lich = {
    hp: 80,
    maxHp: 80,
    attackValue: 39,
    defence: 12,
    dice: '2d20',
    exp: 1000,
    type: 'lich',
    sprite: { WEST: LichSprite, EAST: LichFloppedSprite },
    ai: 'boss',
    originalAI: 'boss',
    direction: 'WEST',
    aiTurns: 0,
};

export default Lich;
