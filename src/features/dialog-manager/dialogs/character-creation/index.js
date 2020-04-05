import React from 'react';
import { connect } from 'react-redux';

import Button from '../../../../components/button';
import Dialog from '../../../../components/dialog';
import createCharacter from '../../actions/create-character';

import './styles.scss';

const CharacterCreation = ({ createCharacter }) => {
    var characterClass = '';
    var characterRace = '';

    const handleClass = newClass => {
        characterClass = newClass;
        // changePath("/details", history);
        // onConfirmClick(selectedTime);
    };

    const handleRace = newRace => {
        console.log(characterRace);
        console.log(newRace);
        console.log(characterRace === newRace);

        characterRace = newRace;

        console.log(characterRace);
        console.log(newRace);
        console.log(characterRace === newRace);
        // changePath("/details", history);
        // onConfirmClick(selectedTime);
    };

    return (
        <Dialog onKeyPress={createCharacter}>
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
                        // extraClass="character-creation__select-button selected"
                        extraClass={
                            'Human' === characterRace
                                ? 'character-creation__select-button selected'
                                : 'character-creation__select-button unselected'
                        }
                        onClick={() => handleRace('Human')}
                        // style = {{backgroundColor: "green"}}
                        // style = {{backgroundColor: {'Human' === characterRace ? "yellow" : "green"}}}
                        // {'Human' === characterRace ? style={{backgroundColor: "green"}} : style={{backgroundColor: "yellow"}}}
                        // backgroundColor={'Human' === characterRace ? "yellow" : "green"}
                        // color={"green"}
                        // {...characterRace == }
                    />
                    <Button
                        title={'Elf'}
                        // extraClass="character-creation__select-button"
                        extraClass={
                            'Elf' === characterRace
                                ? 'character-creation__select-button selected'
                                : 'character-creation__select-button unselected'
                        }
                        onClick={() => handleRace('Elf')}
                        // onClick={() => handleRace(this.title)}
                    />
                    <Button
                        title={'Dwarf'}
                        // extraClass="character-creation__select-button"
                        extraClass={
                            'Dwarf' === characterRace
                                ? 'character-creation__select-button selected'
                                : 'character-creation__select-button unselected'
                        }
                        onClick={() => handleRace('Dwarf')}
                        // onClick={() => handleRace(this.title)}
                    />
                </div>

                <span style={{ paddingTop: 12 }}>{`Your Class`}</span>
                <div className="container space-around">
                    <Button
                        title={'Fighter'}
                        extraClass="character-creation__select-button"
                        // onClick={() => handleClass(this.title)}
                    />
                    <Button
                        title={'Wizard'}
                        extraClass="character-creation__select-button"
                        // onClick={() => handleClass(this.title)}
                    />
                    <Button
                        title={'Ranger'}
                        extraClass="character-creation__select-button"
                        // onClick={() => handleClass(this.title)}
                    />
                </div>
            </div>

            {/* name = document.getElementById("searchTxt").value; */}

            <div className="flex-column character-creation__button">
                <Button onClick={createCharacter} title={'Continue'} />
            </div>
        </Dialog>
    );
};

const actions = { createCharacter };

export default connect(null, actions)(CharacterCreation);
