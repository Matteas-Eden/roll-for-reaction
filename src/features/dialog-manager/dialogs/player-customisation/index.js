import React from 'react';
import { connect } from 'react-redux';

import Button from '../../../../components/button';
import Dialog from '../../../../components/dialog';
import finishCustomisation from '../../actions/finish-customisation';

import './styles.scss';

const PlayerCustomisation = ({
    dialog,
    finishCustomisation,
    setHairColour,
    setEyeColour,
    setSkinColour,
    setArmourColour,
    setClothesColour,
}) => {
    return (
        <>
            <Dialog onKeyPress={finishCustomisation}>
                <div className="flex-column player-customisation__container">
                    <h1>Hello World</h1>
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

export default connect(mapStateToProps, actions)(PlayerCustomisation);
