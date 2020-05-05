// Credit: https://shikashiassets.itch.io/shikashis-fantasy-icons-pack
import BoomerangImg from './boomerang.png';
import BoomerangAnimated from './boomerang-animated.png';

const Boomerang = {
    name: 'Boomerang',
    type: 'weapon',
    effect: {},
    range: 'ranged',
    damage: '1d8 + 2',
    image: BoomerangImg,
    projectile: {
        target: 'enemy',
        size: { width: 40, height: 40, total: 280 },
        sprite: BoomerangAnimated,
    },
    value: 35,
};

export default Boomerang;
