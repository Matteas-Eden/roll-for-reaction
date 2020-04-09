import React from 'react';
import { connect } from 'react-redux';

import Button from '../../../../components/button';
import Dialog from '../../../../components/dialog';
import createCharacter from '../../actions/create-character';
import setClass from '../../actions/set-class';
import setRace from '../../actions/set-race';

import './styles.scss';

const CharacterCreation = ({ dialog, createCharacter, setClass, setRace }) => {
    function handleContinue() {
        createCharacter();
    }

    return (
        <Dialog onKeyPress={handleContinue}>
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
                    maxLength="512"
                    id="characterName"
                    className="white-border character-creation__input"
                />

                <span style={{ paddingTop: 12 }}>{`Your Race`}</span>
                <div className="container space-around">
                    <Button
                        title={'Human'}
                        extraClass={
                            'Human' === dialog.characterRace
                                ? 'character-creation__select-button selected'
                                : 'character-creation__select-button'
                        }
                        onClick={() => setRace('Human')}
                    />
                    <Button
                        title={'Elf'}
                        extraClass={
                            'Elf' === dialog.characterRace
                                ? 'character-creation__select-button selected'
                                : 'character-creation__select-button'
                        }
                        onClick={() => setRace('Elf')}
                    />
                    <Button
                        title={'Dwarf'}
                        extraClass={
                            'Dwarf' === dialog.characterRace
                                ? 'character-creation__select-button selected'
                                : 'character-creation__select-button'
                        }
                        onClick={() => setRace('Dwarf')}
                    />
                </div>

                <span style={{ paddingTop: 12 }}>{`Your Class`}</span>
                <div className="container space-around">
                    <Button
                        id="Fighter"
                        title={'Fighter'}
                        extraClass={
                            'Fighter' === dialog.characterClass
                                ? 'character-creation__select-button selected'
                                : 'character-creation__select-button'
                        }
                        // extraClass="character-creation__select-button"
                        onClick={() => setClass('Fighter')}
                    />
                    <Button
                        title={'Wizard'}
                        extraClass={
                            'Wizard' === dialog.characterClass
                                ? 'character-creation__select-button selected'
                                : 'character-creation__select-button'
                        }
                        onClick={() => setClass('Wizard')}
                    />
                    <Button
                        title={'Ranger'}
                        extraClass={
                            'Ranger' === dialog.characterClass
                                ? 'character-creation__select-button selected'
                                : 'character-creation__select-button'
                        }
                        onClick={() => setClass('Ranger')}
                    />
                </div>
            </div>

            {/* name = document.getElementById("searchTxt").value; */}

            <div className="flex-column character-creation__button">
                <Button onClick={handleContinue} title={'Continue'} />
            </div>
        </Dialog>
    );
};

const mapStateToProps = ({ dialog }) => ({ dialog });
const actions = { createCharacter, setClass, setRace };

export default connect(mapStateToProps, actions)(CharacterCreation);
