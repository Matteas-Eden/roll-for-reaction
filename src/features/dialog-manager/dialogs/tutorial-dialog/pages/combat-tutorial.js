import React from 'react';

import Spacebar from './assets/keyboard/space_key.png';
import CKey from './assets/keyboard/c_key.png';

import './styles.scss';

const CombatTutorial = () => {
    return (
        <div className="flex-column tutorial-combat__container">
            <div className="tutorial-page__title">{'COMBAT'}</div>
            <div className="tutorial-page__combat">
                {
                    "Attack your enemies with 'Spacebar' or throw spells at them with 'C'"
                }{' '}
                <br />
                <div className="tutorial-page__combat-buttons">
                    <img src={Spacebar} alt="spacebar" width={70} />
                    <img src={CKey} alt="c key" width={70} /> <br />
                </div>
                {
                    'To hit enemies, your attack must match or exceed their defence. Your attack is equal to a d20 + STR. Defence is a combination of your armour and DEX.'
                }
                <br />
                {'A high defence value means you are less likely to get hit.'}
            </div>
        </div>
    );
};

export default CombatTutorial;
