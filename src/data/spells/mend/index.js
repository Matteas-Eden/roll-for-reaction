// Credit: https://kvsr.itch.io/pixelarteffectfx017
import MendSprite from './Mend.png';

const Mend = {
    name: 'Mend',
    type: 'spell',
    target: 'self::heal',
    range: 4,
    damage: '1d6',
    manaCost: 3,
    size: { width: '64px', height: '32px', total: '320px' },
    image: MendSprite,
    value: 5,
};

export default Mend;
