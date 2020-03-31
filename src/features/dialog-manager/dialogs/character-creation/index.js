import React from 'react';
import { connect } from 'react-redux';

import Button from '../../../../components/button';
import Dialog from '../../../../components/dialog';
// import loadStartingItems from '../../../inventory/actions/load-starting-items';
// import showFirstStoryMessage from '../../actions/show-first-story-message';
import startMainGame from '../../../world/actions/start-main-game';

import './styles.scss';

// const CharacterCreation = ({ loadStartingItems, showFirstStoryMessage }) => {
const CharacterCreation = ({ startMainGame }) => {
    function handleContinue() {
        // loadStartingItems();
        // showFirstStoryMessage();
        startMainGame();
    }

    return (
        <Dialog onKeyPress={handleContinue}>
            {/* <Dialog onKeyPress={startMainGame}> */}
            <div className="character-creation__title">
                {'Character Creation'}
            </div>

            <div className="character-creation__text">
                <span style={{ paddingBottom: '0.5em' }}>
                    {`Your Character's Name`}
                </span>

                <input
                    name="Character name"
                    type="text"
                    maxlength="512"
                    id="character-name"
                    // className="character-creation__input"
                    style={{
                        height: '2.5em',
                        backgroundColor: 'black',
                        paddingLeft: '0.5em',
                        paddingRight: '0.5em',
                        marginLeft: '0.5em',
                        marginRight: '0.5em',
                    }}
                    className="white-border"
                />

                <span style={{ paddingTop: 12 }}>{`Your Race`}</span>
                <div className="container space-around">
                    <Button
                        title={'Human'}
                        extraClass="character-creation__select-button"
                    />
                    <Button
                        title={'Elf'}
                        extraClass="character-creation__select-button"
                    />
                    <Button
                        title={'Dwarf'}
                        extraClass="character-creation__select-button"
                    />
                </div>

                <span style={{ paddingTop: 12 }}>{`Your Class`}</span>
                <div className="container space-around">
                    <Button
                        title={'Fighter'}
                        extraClass="character-creation__select-button"
                    />
                    <Button
                        title={'Wizard'}
                        extraClass="character-creation__select-button"
                    />
                    <Button
                        title={'Ranger'}
                        extraClass="character-creation__select-button"
                    />
                </div>
            </div>

            {/* name = document.getElementById("searchTxt").value; */}

            <div className="flex-column character-creation__button">
                <Button onClick={handleContinue} title={'Continue'} />
                {/* <Button onClick={startMainGame} title={'Continue'} /> */}
            </div>
        </Dialog>
    );
};

// const actions = { loadStartingItems, showFirstStoryMessage };
const actions = { startMainGame };

// export default connect(null, actions)(CharacterCreation);
export default connect(null, actions)(CharacterCreation);
