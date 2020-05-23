import React from 'react';

import Broadsword from '../../../../../data/items/weapons/swords/broad-sword/broad-sword.png';
import HealthPotion from '../../../../../data/items/potions/hp-potion/hp-potion.png';
import SteelArmour from '../../../../../data/items/clothes/armor/steel-armor/steel-armor.png';
import Crossbow from '../../../../../data/items/weapons/ranged/crossbow/crossbow.png';
import ManaPotion from '../../../../../data/items/potions/mp-potion/mp-potion.png';
import AmethystRing from '../../../../../data/items/rings/amethyst-ring/amethyst-ring.png';

import './styles.scss';

const DicePage = () => {
    return (
        <div className="flex-column tutorial-dice__container">
            <div className="tutorial-page__title">{'DICE NOTATION'}</div>
            <div className="tutorial-page__dice">
                {
                    'This game uses dice notation for representing various values, such as damage dealt in combat.'
                }
                <br />
                <br />
                <span style={{ textDecoration: 'underline' }}>
                    {'Examples'}
                </span>
                <br />
                {
                    "'1d4 + 2' means roll a 4-sided die once, then add 2 to the result."
                }
                <br />
                {"'2d8' means roll an 8-sided die twice, and sum the results."}
                <div className="tutorial-page__dice-types">
                    <img src={Broadsword} alt="broadsword" width={50} />
                    <img src={HealthPotion} alt="health potion" width={50} />
                    <img src={SteelArmour} alt="steel armour" width={50} />
                    <img src={Crossbow} alt="crossbow" width={50} />
                    <img src={ManaPotion} alt="mana potion" width={50} />
                    <img src={AmethystRing} alt="amethyst ring" width={50} />
                </div>
            </div>
        </div>
    );
};

export default DicePage;
