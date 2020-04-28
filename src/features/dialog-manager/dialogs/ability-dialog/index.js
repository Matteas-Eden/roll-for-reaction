import React from 'react';
import { connect } from 'react-redux';

import Ability from '../../../../components/ability';
import Button from '../../../../components/button';

import decrementIntelligence from './actions/decrement-intelligence';
import incrementIntelligence from './actions/increment-intelligence';
import decrementWisdom from './actions/decrement-wisdom';
import incrementWisdom from './actions/increment-wisdom';
import decrementStrength from './actions/decrement-strength';
import incrementStrength from './actions/increment-strength';
import decrementConstitution from './actions/decrement-constitution';
import incrementConstitution from './actions/increment-constitution';
import decrementDexterity from './actions/decrement-dexterity';
import incrementDexterity from './actions/increment-dexterity';
import decrementCharisma from './actions/decrement-charisma';
import incrementCharisma from './actions/increment-charisma';

import backToCharacterCustomisation from '../../actions/back-to-character-customisation';
import confirmAbilityScoreDialog from '../../actions/confirm-ability-score-dialog';
import closeDialog from '../../actions/close-dialog';
import Dialog from '../../../../components/dialog';

import { U_KEY, ENTER_KEY, ESC_KEY } from '../../../../config/constants';

import './styles.scss';

const AbilityDialog = ({
    dialog,
    confirmAbilityScoreDialog,
    decrementIntelligence,
    incrementIntelligence,
    decrementWisdom,
    incrementWisdom,
    decrementStrength,
    incrementStrength,
    decrementConstitution,
    incrementConstitution,
    decrementDexterity,
    incrementDexterity,
    decrementCharisma,
    incrementCharisma,
    backToCharacterCustomisation,
    closeDialog,
}) => {
    const {
        constitution,
        dexterity,
        intelligence,
        strength,
        wisdom,
        charisma,
        points,
    } = dialog.abilities;
    const {
        min_constitution,
        min_intelligence,
        min_strength,
        min_dexterity,
        min_wisdom,
        min_charisma,
    } = dialog.abilities_minimum;

    if (dialog.playerOpenedAbilityDialog || dialog.fromLevelUp) {
        return (
            <Dialog
                onKeyPress={key => {
                    if (key === ENTER_KEY) {
                        confirmAbilityScoreDialog();
                    } else {
                        closeDialog();
                    }
                }}
                keys={[U_KEY, ENTER_KEY, ESC_KEY]}
            >
                <span
                    className="ability-score__title"
                    style={{ marginLeft: '0px' }}
                >
                    Modify your Abilities
                </span>
                <div className="flex-column ability-score-dialog__container">
                    <Ability
                        name="Strength"
                        value={strength}
                        minValue={min_strength}
                        increment={incrementStrength}
                        decrement={decrementStrength}
                    />
                    <Ability
                        name="Constitution"
                        value={constitution}
                        minValue={min_constitution}
                        increment={incrementConstitution}
                        decrement={decrementConstitution}
                    />
                    <Ability
                        name="Dexterity"
                        value={dexterity}
                        minValue={min_dexterity}
                        increment={incrementDexterity}
                        decrement={decrementDexterity}
                    />
                    <Ability
                        name="Charisma"
                        value={charisma}
                        minValue={min_charisma}
                        increment={incrementCharisma}
                        decrement={decrementCharisma}
                    />
                    <Ability
                        name="Intelligence"
                        value={intelligence}
                        minValue={min_intelligence}
                        increment={incrementIntelligence}
                        decrement={decrementIntelligence}
                    />
                    <Ability
                        name="Wisdom"
                        value={wisdom}
                        minValue={min_wisdom}
                        increment={incrementWisdom}
                        decrement={decrementWisdom}
                    />
                    <span className="ability-score-dialog__text">
                        Ability Points remaining:
                        <span className="ability-score-dialog__points">
                            {points}
                        </span>
                    </span>
                    <Button
                        title="Confirm"
                        onClick={confirmAbilityScoreDialog}
                        small={true}
                    />
                </div>
            </Dialog>
        );
    } else {
        return (
            <Dialog
                keys={[ENTER_KEY, ESC_KEY]}
                onKeyPress={key => {
                    if (key === ENTER_KEY) {
                        confirmAbilityScoreDialog();
                    } else {
                        backToCharacterCustomisation();
                    }
                }}
                goBack={backToCharacterCustomisation}
            >
                <span className="ability-score__title">
                    Modify your Abilities
                </span>
                <div className="flex-column ability-score-dialog__container">
                    <Ability
                        name="Strength"
                        value={strength}
                        minValue={min_strength}
                        increment={incrementStrength}
                        decrement={decrementStrength}
                        points={points}
                    />
                    <Ability
                        name="Constitution"
                        value={constitution}
                        minValue={min_constitution}
                        increment={incrementConstitution}
                        decrement={decrementConstitution}
                        points={points}
                    />
                    <Ability
                        name="Dexterity"
                        value={dexterity}
                        minValue={min_dexterity}
                        increment={incrementDexterity}
                        decrement={decrementDexterity}
                        points={points}
                    />
                    <Ability
                        name="Charisma"
                        value={charisma}
                        minValue={min_charisma}
                        increment={incrementCharisma}
                        decrement={decrementCharisma}
                        points={points}
                    />
                    <Ability
                        name="Intelligence"
                        value={intelligence}
                        minValue={min_intelligence}
                        increment={incrementIntelligence}
                        decrement={decrementIntelligence}
                        points={points}
                    />
                    <Ability
                        name="Wisdom"
                        value={wisdom}
                        minValue={min_wisdom}
                        increment={incrementWisdom}
                        decrement={decrementWisdom}
                        points={points}
                    />
                    <span className="ability-score-dialog__text">
                        Ability Points remaining:
                        <span className="ability-score-dialog__points">
                            {points}
                        </span>
                    </span>
                    <Button
                        title="Confirm"
                        onClick={confirmAbilityScoreDialog}
                        small={true}
                    />
                </div>
            </Dialog>
        );
    }
};

const mapStateToProps = ({ dialog }) => ({ dialog });
const actions = {
    confirmAbilityScoreDialog,
    decrementIntelligence,
    incrementIntelligence,
    decrementWisdom,
    incrementWisdom,
    decrementStrength,
    incrementStrength,
    decrementConstitution,
    incrementConstitution,
    decrementDexterity,
    incrementDexterity,
    decrementCharisma,
    incrementCharisma,
    backToCharacterCustomisation,
    closeDialog,
};
export default connect(mapStateToProps, actions)(AbilityDialog);
