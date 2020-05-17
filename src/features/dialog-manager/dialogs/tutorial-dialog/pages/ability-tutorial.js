import React from 'react';

import './styles.scss';

const AbilityTutorial = () => {
    return (
        <div className="flex-column tutorial-ability__container">
            <div className="tutorial-page__title">{'ABILITIES'}</div>
            <div className="tutorial-page__ability">
                <span className="tutorial-page__ability-name">
                    {'STRENGTH'}
                </span>
                <br />
                <span className="tutorial-page__ability-description">
                    Increases attack
                </span>
            </div>
            <div className="tutorial-page__ability">
                <span className="tutorial-page__ability-name">
                    {'CONSTITUTION'}
                </span>
                <br />
                <span className="tutorial-page__ability-description">
                    Increases health
                </span>
            </div>
            <div className="tutorial-page__ability">
                <span className="tutorial-page__ability-name">
                    {'DEXTERITY'}
                </span>
                <br />
                <span className="tutorial-page__ability-description">
                    Increases defence
                </span>
            </div>
            <div className="tutorial-page__ability">
                <span className="tutorial-page__ability-name">
                    {'INTELLIGENCE'}
                </span>
                <br />
                <span className="tutorial-page__ability-description">
                    Increases mana and spell attack
                </span>
            </div>
            <div className="tutorial-page__ability">
                <span className="tutorial-page__ability-name">{'WISDOM'}</span>
                <br />
                <span className="tutorial-page__ability-description">
                    Increases restoration from potions
                </span>
            </div>
        </div>
    );
};

export default AbilityTutorial;
