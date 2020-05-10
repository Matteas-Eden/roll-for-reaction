import Fireball from './fireball';
import Mend from './mend';
import IceShard from './ice-shard';
import PoisonDart from './poison-dart';

const spells = [Mend, Fireball, IceShard, PoisonDart].sort(
    (left, right) => left.unlockLevel - right.unlockLevel
);

export default spells;
