import React from 'react';
import { connect } from 'react-redux';

import Button from '../../../../components/button';
import Dialog from '../../../../components/dialog';

import ArrowKeys from './assets/arrow-keys.png';
import DoubleTap from './assets/double-tap.png';
import Enter from './assets/enter.png';
import Space from './assets/space.png';
import Swipe from './assets/swipe.png';
import WASDKeys from './assets/wasd-keys.png';

import AbilityTutorial from './pages/ability-tutorial';
import ShopTutorial from './pages/shop-tutorial';
import MovementTutorial from './pages/movement-tutorial';
import AttackTutorial from './pages/attack-tutorial';
import SpellTutorial from './pages/spell-tutorial';
import ItemTutorial from './pages/item-tutorial';

import getNextPage from './actions/get-next-page';
import getPreviousPage from './actions/get-previous-page';
import changeTutorialPage from './actions/change-tutorial-page';

import './styles.scss';

const TutorialDialog = ({ dialog }) => {
    function getTutorialPage(page) {
        switch (page) {
            case 'movement':
                return <MovementTutorial />;
            case 'attack':
                return <AttackTutorial />;
            case 'spell':
                return <SpellTutorial />;
            case 'ability':
                return <AbilityTutorial />;
            case 'item':
                return <ItemTutorial />;
            case 'shop':
                return <ShopTutorial />;
            default:
                return null;
        }
    }

    const prevPage = getPreviousPage(dialog.tutorialPage);
    const nextPage = getNextPage(dialog.tutorialPage);

    return (
        <Dialog>
            {getTutorialPage(dialog.tutorialPage)}

            {prevPage && (
                <div className="flex-column tutorial__button">
                    <Button
                        onClick={changeTutorialPage(prevPage)}
                        title={'Previous'}
                    />
                </div>
            )}

            {nextPage && (
                <div className="flex-column tutorial__button">
                    <Button
                        onClick={changeTutorialPage(nextPage)}
                        title={'Next'}
                    />
                </div>
            )}
        </Dialog>
    );
};

const mapStateToProps = ({ dialog }) => ({ dialog });
const actions = { changeTutorialPage };

export default connect(mapStateToProps, actions)(TutorialDialog);
