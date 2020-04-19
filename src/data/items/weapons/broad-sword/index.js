import BroadSwordImg from './broad-sword.png';
import { d4 } from '../../../../utils/dice';

const BroadSword = {
    name: 'Broad Sword',
    type: 'weapon',
    range: 'melee',
    modifier: 2,
    dice: [d4, d4],
    image: BroadSwordImg,
    value: 110,
};

export default BroadSword;
