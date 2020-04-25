// Credit: https://kvsr.itch.io/pixelarteffectfx017
import FireballSprite from './Fireball.png';

const Fireball = {
    name: 'Fireball',
    type: 'spell',
    target: 'enemy',
    range: 4,
    damage: '2d8',
    manaCost: 5,
    size: { width: '64px', height: '32px', total: '320px' },
    image: FireballSprite,
    value: 10,
};

export default Fireball;
