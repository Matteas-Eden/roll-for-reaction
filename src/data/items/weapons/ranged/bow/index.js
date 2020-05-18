// Credit: https://shikashiassets.itch.io/shikashis-fantasy-icons-pack
import BowImg from './bow.png';
import { SIGHT_RADIUS } from '../../../../../config/constants';
import Arrow from '../../../../ammo/arrow';

const Bow = {
    name: 'Bow',
    type: 'weapon',
    kind: 'ranged',
    effect: {},
    range: SIGHT_RADIUS,
    damage: '2d10 + 2',
    image: BowImg,
    projectile: Arrow,
    value: 300,
};

export default Bow;
