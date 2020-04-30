import BackpackUpgrade from './other/backpack-upgrade';
import LeatherArmor from './clothes/armor/leather-armor';
import LeatherBoots from './clothes/armor/leather-boots';
import LeatherCap from './clothes/armor/leather-cap';
import LeatherGloves from './clothes/armor/leather-gloves';
import LeatherPants from './clothes/armor/leather-pants';
import SteelArmor from './clothes/armor/steel-armor';
import SteelBoots from './clothes/armor/steel-boots';
import SteelHelm from './clothes/armor/steel-helm';
import SteelGloves from './clothes/armor/steel-gloves';
import SteelPants from './clothes/armor/steel-pants';
import BlackRobes from './clothes/robes/black-robes';
import BrownRobes from './clothes/robes/brown-robes';
import RedRobes from './clothes/robes/red-robes';
import TealRobes from './clothes/robes/teal-robes';
import SkullRobes from './clothes/robes/skull-robes';
import DiamondRing from './rings/diamond-ring';
import AmethystRing from './rings/amethyst-ring';
import OldRing from './rings/old-ring';
import BroadSword from './weapons/swords/broad-sword';
import RustySword from './weapons/swords/rusty-sword';
import SteelSword from './weapons/swords/steel-sword';
import DragonsBane from './weapons/swords/dragons-bane';
import LichBane from './weapons/swords/lich-bane';
import BlackStave from './weapons/staves/black-stave';
import BrownStave from './weapons/staves/brown-stave';
import RedStave from './weapons/staves/red-stave';
import TealStave from './weapons/staves/teal-stave';
import SkullStave from './weapons/staves/skull-stave';
import Boomerang from './weapons/ranged/boomerang';
import Slingshot from './weapons/ranged/slingshot';
import Bow from './weapons/ranged/bow';
import Crossbow from './weapons/ranged/crossbow';
import HpPotion from './potions/hp-potion';
import GreatHpPotion from './potions/great-hp-potion';
import MightyHpPotion from './potions/mighty-hp-potion';
import DivineHpPotion from './potions/divine-hp-potion';
import MightyManaPotion from './potions/mighty-mana-potion';
import DivineManaPotion from './potions/divine-mana-potion';

const items = {
    weapons: {
        swords: {
            BroadSword,
            RustySword,
            SteelSword,
            DragonsBane,
            LichBane,
        },
        ranged: {
            Boomerang,
            Slingshot,
            Bow,
            Crossbow,
        },
        staves: {
            BlackStave,
            BrownStave,
            RedStave,
            TealStave,
            SkullStave,
        },
    },
    clothes: {
        armor: {
            LeatherArmor,
            LeatherBoots,
            LeatherCap,
            LeatherGloves,
            LeatherPants,
            SteelArmor,
            SteelBoots,
            SteelHelm,
            SteelGloves,
            SteelPants,
        },
        robes: {
            BlackRobes,
            BrownRobes,
            RedRobes,
            TealRobes,
            SkullRobes,
        },
    },
    rings: {
        AmethystRing,
        DiamondRing,
        OldRing,
    },
    potions: {
        HpPotion,
        GreatHpPotion,
        MightyHpPotion,
        DivineHpPotion,
        MightyManaPotion,
        DivineManaPotion,
    },
    other: {
        BackpackUpgrade,
    },
};

export const randomItemsT1 = [
    SteelSword,
    LeatherArmor,
    LeatherBoots,
    LeatherCap,
    LeatherGloves,
    LeatherPants,
    OldRing,
    BlackRobes,
    BrownRobes,
    BlackStave,
    BrownStave,
    Boomerang,
    Slingshot,
];

export const randomItemsT2 = [
    ...randomItemsT1,
    BroadSword,
    SteelArmor,
    SteelBoots,
    SteelHelm,
    SteelGloves,
    SteelPants,
    AmethystRing,
    DiamondRing,
    RedRobes,
    TealRobes,
    SkullRobes,
    RedStave,
    TealStave,
    SkullStave,
    Bow,
    Crossbow,
];

export default items;
