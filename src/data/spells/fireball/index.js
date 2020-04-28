// Credit: https://kvsr.itch.io/pixelarteffectfx017
import FireballSprite from './Fireball.png';

const Fireball = {
    name: 'Fireball',
    type: 'spell',
    target: 'enemy',
    range: 4,
    damage: '2d8',
    manaCost: 5,
    size: { width: 40, height: 40, total: 200 },
    image: FireballSprite,
    value: 10,
};

export default Fireball;
