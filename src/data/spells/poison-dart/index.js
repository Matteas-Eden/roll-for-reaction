// Credit: https://kvsr.itch.io/pixelarteffectfx017
import PoisonDartSprite from './Fireball.png';
import PoisonDartImage from './Fireball-image.png';
import {
    SIGHT_RADIUS,
    AI_CHANGE_TURNS,
    TURNS_FOR_POISON,
    POISON_DAMAGE,
} from '../../../config/constants';

const PoisonDart = {
    name: 'Poison Dart',
    type: 'spell',
    target: 'enemy',
    kind: 'combat',
    range: SIGHT_RADIUS,
    damage: '1d4',
    manaCost: 5,
    size: { width: 40, height: 40, total: 200 },
    image: PoisonDartImage,
    sprite: PoisonDartSprite,
    description: 'Life is easier when noone else is around.',
    unlockLevel: 0,
    effects: {
        changeAI: {
            to: 'poisoned',
            turns: AI_CHANGE_TURNS * TURNS_FOR_POISON,
            effect: POISON_DAMAGE + ' poison',
            extraDamage: { damage: POISON_DAMAGE, times: TURNS_FOR_POISON },
        },
    },
};

export default PoisonDart;
