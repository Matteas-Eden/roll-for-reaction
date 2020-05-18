import GhostSprite from './ghost.png';
import LightningBolt from '../../spells/lightning-bolt';

const Ghost = {
    hp: 16,
    maxHp: 16,
    attackValue: 22,
    defence: 4,
    dice: '1d8',
    exp: 80,
    type: 'ghost',
    sprite: { WEST: GhostSprite, EAST: GhostSprite },
    ai: 'magical',
    originalAI: 'magical',
    projectile: LightningBolt,
    direction: 'WEST',
    aiTurns: 0,
};

export default Ghost;
