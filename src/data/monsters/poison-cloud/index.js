import PoisonCloudSprite from './poison-cloud.png';

const PoisonCloud = {
    hp: 30,
    maxHp: 30,
    attackValue: '2d20 + 10',
    defence: 2,
    dice: '3d4+2',
    exp: 230,
    type: 'poison cloud',
    sprite: { WEST: PoisonCloudSprite, EAST: PoisonCloudSprite },
    ai: 'normal',
    originalAI: 'normal',
    direction: 'WEST',
    aiTurns: 0,
};

export default PoisonCloud;
