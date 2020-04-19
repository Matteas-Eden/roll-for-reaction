import LichBaneImg from './lich-bane.png';
import { d4 } from '../../../../utils/dice';

const LichBane = {
    name: 'Lich Bane',
    type: 'weapon',
    range: 'melee',
    modifier: 2,
    dice: [d4, d4],
    bonus: 'lich::2',
    image: LichBaneImg,
    value: 666,
};

export default LichBane;
