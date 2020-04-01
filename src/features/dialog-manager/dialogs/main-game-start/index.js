import React from 'react';
import { connect } from 'react-redux';

import Button from '../../../../components/button';
import Dialog from '../../../../components/dialog';
import backToSelect from '../../actions/back-to-select';
import startMainGame from '../../../world/actions/start-main-game';
import characterCreation from '../character-creation';
//src\features\dialog-manager\dialogs\main-game-start\index.js
//src\features\dialog-manager\dialogs\character-creation\index.js

import './styles.scss';

const MainGameStart = ({ startMainGame, backToSelect }) => {
    // const MainGameStart = ({ characterCreation, backToSelect }) => {
    return (
        <Dialog goBack={backToSelect} onKeyPress={startMainGame}>
            {/* <Dialog goBack={backToSelect} onKeyPress={characterCreation}> */}
            <span className="flex-row game-start__title">{'Story Mode'}</span>

            <span className="flex-column game-start__text">
                {'Explore the dark dungeon, full of monsters and gear!'}
            </span>

            <div className="flex-column game-start__button">
                <Button
                    onClick={startMainGame}
                    // onClick={characterCreation}
                    icon="compass"
                    title={'Explore Dungeon'}
                />
            </div>
        </Dialog>
    );
};

const actions = { backToSelect, startMainGame };
// const actions = { backToSelect, characterCreation };

export default connect(null, actions)(MainGameStart);
