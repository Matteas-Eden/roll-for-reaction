import GhostSprite from './ghost.png';
import LightningBolt from '../../spells/lightning-bolt';

const Ghost = {
    hp: 20,
    maxHp: 20,
    attackValue: 18,
    defence: 4,
    dice: '1d8',
    exp: 200,
    type: 'ghost',
    sprite: GhostSprite,
    ai: 'magical',
    originalAI: 'magical',
    projectile: LightningBolt,
    aiTurns: 0,
};

export default Ghost;
