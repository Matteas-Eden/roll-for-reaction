// Credit: https://shikashiassets.itch.io/shikashis-fantasy-icons-pack
import CrossbowImg from './crossbow.png';
import { SIGHT_RADIUS } from '../../../../../config/constants';
import Bolt from '../../../../ammo/bolt';

const Crossbow = {
    name: 'Crossbow',
    type: 'weapon',
    kind: 'ranged',
    effect: {},
    range: SIGHT_RADIUS,
    damage: '4d8 + 4',
    image: CrossbowImg,
    projectile: Bolt,
    value: 666,
};

export default Crossbow;
