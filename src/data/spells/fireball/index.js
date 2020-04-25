// Credit: https://kvsr.itch.io/pixelarteffectfx017
import FireballSprite from './Fireball.png';

const Fireball = {
    name: 'Fireball',
    type: 'spell',
    range: 'melee',
    damage: '2d8',
    size: { width: '64px', height: '32px', total: '320px' },
    image: FireballSprite,
    value: 110,
};

export default Fireball;
