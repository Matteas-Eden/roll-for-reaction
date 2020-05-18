// Credit: https://shikashiassets.itch.io/shikashis-fantasy-icons-pack
import BowImg from './bow.png';
import { SIGHT_RADIUS } from '../../../../../config/constants';
import Arrow from '../../../../ammo/arrow';

const MidnightsFury = {
    name: "Midnight's Fury",
    type: 'weapon',
    kind: 'ranged',
    effect: {},
    range: SIGHT_RADIUS,
    damage: '3d10 + 4',
    image: BowImg,
    projectile: Arrow,
    value: 666,
};

export default MidnightsFury;
