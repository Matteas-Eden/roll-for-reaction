import React from 'react';
import { connect } from 'react-redux';

import Button from '../../../../components/button';
import Dialog from '../../../../components/dialog';

import AbilityTutorial from './pages/ability-tutorial';
import ShopTutorial from './pages/shop-tutorial';
import MovementTutorial from './pages/movement-tutorial';
import CombatTutorial from './pages/combat-tutorial';
import SpellTutorial from './pages/spell-tutorial';
import ItemTutorial from './pages/item-tutorial';

import getNextPage from './actions/get-next-page';
import getPreviousPage from './actions/get-previous-page';
import changeTutorialPage from './actions/change-tutorial-page';

import './styles.scss';

const TutorialDialog = ({ dialog, changeTutorialPage }) => {
    function getTutorialPage(page) {
        switch (page) {
            case 'movement':
                return <MovementTutorial />;
            case 'combat':
                return <CombatTutorial />;
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
