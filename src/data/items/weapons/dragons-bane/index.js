import DragonsBaneImg from './dragons-bane.png';
import { d4 } from '../../../../utils/dice';

const DragonsBane = {
    name: 'Dragons Bane',
    type: 'weapon',
    range: 'melee',
    modifier: 2,
    dice: [d4, d4],
    bonus: 'dragon::2.5',
    image: DragonsBaneImg,
    value: 300,
};

export default DragonsBane;
