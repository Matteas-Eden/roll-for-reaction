import Bat from './bat';
import Cerberus from './cerberus';
import Dragon from './dragon';
import Goblin from './goblin';
import Ghost from './ghost';
import Imp from './imp';
import Lich from './lich';
import Medusa from './medusa';
import Orc from './orc';
import OrcArmor from './orc-armor';
import Rat from './rat';
import StoneGolem from './stone-golem';
import Warlock from './warlock';
import Wolf from './wolf';

const monsters = {
    bat: Bat,
    cerberus: Cerberus,
    dragon: Dragon,
    goblin: Goblin,
    ghost: Ghost,
    imp: Imp,
    lich: Lich,
    medusa: Medusa,
    orc: Orc,
    'orc-armor': OrcArmor,
    rat: Rat,
    'stone-golem': StoneGolem,
    warlock: Warlock,
    wolf: Wolf,
};

export default monsters;
