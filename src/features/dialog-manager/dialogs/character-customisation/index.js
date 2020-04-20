import React from 'react';
import { connect } from 'react-redux';

import Button from '../../../../components/button';
import Dialog from '../../../../components/dialog';
import Character from './character';
import finishCustomisation from './actions/finish-customisation';

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
                    {/*<div className="flex-column character-customisation__options-container">
                        {/*<p>Hair</p>
                      <p>Skin</p>
                      <p>Armour</p>
                      <p>Clothes</p>
                      <p>Eye</p>
                    </div>*/}
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

const actions = { finishCustomisation };

export default connect(mapStateToProps, actions)(CharacterCustomisation);
