import React from 'react';
import { connect } from 'react-redux';

import Button from '../../../../components/button';
import Dialog from '../../../../components/dialog';
import Character from './character';
import finishCustomisation from './actions/finish-customisation';

import setHairColour from './actions/set-hair-colour';
import setEyeColour from './actions/set-eye-colour';
import setSkinColour from './actions/set-skin-colour';
import setArmourColour from './actions/set-armour-colour';
import setClothesColour from './actions/set-clothes-colour';

import ColourPicker from '../../../../components/colour-picker';

import './styles.scss';

const CharacterCustomisation = ({
    dialog,
    finishCustomisation,
    setHairColour,
    setEyeColour,
    setSkinColour,
    setArmourColour,
    setClothesColour,
}) => {
    const {
        hairColour,
        eyeColour,
        skinColour,
        armourColour,
        clothesColour,
    } = dialog.appearance;

    return (
        <>
            <Dialog onKeyPress={finishCustomisation}>
                <div className="flex-column character-customisation__container">
                    <div className="flex-column character-customisation__title">
                        Customise Character
                    </div>
                    <Character
                        hairColour={hairColour}
                        eyeColour={eyeColour}
                        skinColour={skinColour}
                        armourColour={armourColour}
                        clothesColour={clothesColour}
                    />
                    <div className="flex-column character-customisation__options-container">
                        <div className="flex-row character-customisation__option">
                            <p className="character-customisation__label">
                                Hair
                            </p>
                            <ColourPicker onChange={setHairColour} />
                        </div>
                        <div className="flex-row character-customisation__option">
                            <p className="flex-column character-customisation__label">
                                Skin
                            </p>
                            <ColourPicker onChange={setSkinColour} />
                        </div>
                        <div className="flex-row character-customisation__option">
                            <p className="flex-column character-customisation__label">
                                Armour
                            </p>
                            <ColourPicker onChange={setArmourColour} />
                        </div>
                        <div className="flex-row character-customisation__option">
                            <p className="flex-column character-customisation__label">
                                Clothes
                            </p>
                            <ColourPicker onChange={setClothesColour} />
                        </div>
                    </div>
                    <Button
                        title="Continue"
                        onClick={finishCustomisation}
                        small={true}
                        icon="angle-double-right"
                    />
                </div>
            </Dialog>
        </>
    );
};

const mapStateToProps = ({ dialog }) => ({ dialog });

const actions = {
    finishCustomisation,
    setHairColour,
    setEyeColour,
    setSkinColour,
    setArmourColour,
    setClothesColour,
};

export default connect(mapStateToProps, actions)(CharacterCustomisation);
