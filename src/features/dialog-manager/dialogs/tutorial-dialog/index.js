import React from 'react';
import { connect } from 'react-redux';

import Button from '../../../../components/button';
import MicroDialog from '../../../../components/micro-dialog';

import AbilityTutorial from './pages/ability-tutorial';
import ShopTutorial from './pages/shop-tutorial';
import MovementTutorial from './pages/movement-tutorial';
import CombatTutorial from './pages/combat-tutorial';
import SpellTutorial from './pages/spell-tutorial';
import ItemTutorial from './pages/item-tutorial';

import getNextPage from './actions/get-next-page';
import getPreviousPage from './actions/get-previous-page';
import changeTutorialPage from './actions/change-tutorial-page';
import toggleTutorial from '../../actions/toggle-tutorial';

import './styles.scss';

const TutorialDialog = ({ dialog, toggleTutorial, changeTutorialPage }) => {
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
        <MicroDialog
            onClose={() => toggleTutorial()}
            fullsize
            className="centered"
        >
            {getTutorialPage(dialog.tutorialPage)}
            <div className="flex-row tutorial__navigation">
                {prevPage && (
                    <div className="centered tutorial__button__prev">
                        <Button
                            onClick={() => changeTutorialPage(prevPage)}
                            title={'Previous'}
                            icon={'arrow-left'}
                        />
                    </div>
                )}

                {nextPage && (
                    <div className="centered tutorial__button__next">
                        <Button
                            onClick={() => changeTutorialPage(nextPage)}
                            title={'Next'}
                            icon={'arrow-right'}
                        />
                    </div>
                )}
            </div>
        </MicroDialog>
    );
};

const mapStateToProps = ({ dialog }) => ({ dialog });
const actions = { toggleTutorial, changeTutorialPage };

export default connect(mapStateToProps, actions)(TutorialDialog);
