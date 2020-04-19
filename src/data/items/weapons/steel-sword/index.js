import SteelSwordImg from './steel-sword.png';
import { d4 } from '../../../../utils/dice';

const SteelSword = {
    name: 'Steel Sword',
    type: 'weapon',
    range: 'melee',
    modifier: 2,
    dice: [d4, d4],
    image: SteelSwordImg,
    value: 35,
};

export default SteelSword;
