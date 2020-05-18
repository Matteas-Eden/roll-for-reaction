// Credit: https://shikashiassets.itch.io/shikashis-fantasy-icons-pack
import BowImg from './bow.png';
import { SIGHT_RADIUS } from '../../../../../config/constants';
import Arrow from '../../../../ammo/arrow';

const HellsPhoenix = {
    name: "Hell's Pheonix",
    type: 'weapon',
    kind: 'ranged',
    effect: {},
    range: SIGHT_RADIUS,
    damage: '2d8',
    image: BowImg,
    projectile: Arrow,
    value: 300,
};

export default HellsPhoenix;
