import RustySwordImg from './rusty-sword.png';
import { d4 } from '../../../../utils/dice';

const RustySword = {
    name: 'Rusty Sword',
    type: 'weapon',
    range: 'melee',
    modifier: 2,
    dice: [d4, d4],
    image: RustySwordImg,
    value: 10,
};

export default RustySword;
