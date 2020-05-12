import Fireball from './fireball';
import Mend from './mend';
import IceShard from './ice-shard';
import PoisonDart from './poison-dart';
import LightningBolt from './lightning-bolt';

const spells = [Mend, Fireball, IceShard, PoisonDart, LightningBolt].sort(
    (left, right) => left.unlockLevel - right.unlockLevel
);

export default spells;
