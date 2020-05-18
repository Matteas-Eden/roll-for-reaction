import PlanteraSprite from './plantera.png';

const Plantera = {
    hp: 40,
    maxHp: 40,
    attackValue: '3d20 + 21',
    defence: 4,
    dice: '3d8+2',
    exp: 330,
    type: 'Plantera',
    sprite: { WEST: PlanteraSprite, EAST: PlanteraSprite },
    ai: 'ranged',
    originalAI: 'ranged',
    direction: 'WEST',
    aiTurns: 0,
};

export default Plantera;
