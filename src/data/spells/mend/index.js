// Credit: https://ppeldo.itch.io/2d-pixel-art-game-spellmagic-fx
import MendSprite from './Mend.png';

const Mend = {
    name: 'Mend',
    type: 'spell',
    target: 'self::heal',
    range: 0,
    damage: '1d6',
    manaCost: 3,
    size: { width: 40, height: 40, total: 2480 },
    image: MendSprite,
    value: 5,
};

export default Mend;
