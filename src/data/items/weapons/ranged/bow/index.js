// Credit: https://shikashiassets.itch.io/shikashis-fantasy-icons-pack
import BowImg from './bow.png';
import { SIGHT_RADIUS } from '../../../../../config/constants';

const Bow = {
    name: 'Bow',
    type: 'weapon',
    kind: 'ranged',
    effect: {},
    range: SIGHT_RADIUS,
    damage: '2d10 + 2',
    image: BowImg,
    projectile: {
        name: 'arrow',
        target: 'enemy',
        size: { width: 40, height: 40, total: 560 },
        sprite: undefined,
    },
    value: 300,
};

export default Bow;
