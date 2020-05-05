// Credit: https://shikashiassets.itch.io/shikashis-fantasy-icons-pack
import CrossbowImg from './crossbow.png';
import { SIGHT_RADIUS } from '../../../../../config/constants';

const Crossbow = {
    name: 'Crossbow',
    type: 'weapon',
    kind: 'ranged',
    effect: {},
    range: SIGHT_RADIUS,
    damage: '4d8 + 4',
    image: CrossbowImg,
    projectile: {
        name: 'bolt',
        target: 'enemy',
        size: { width: 40, height: 40, total: 560 },
        sprite: undefined,
    },
    value: 666,
};

export default Crossbow;
