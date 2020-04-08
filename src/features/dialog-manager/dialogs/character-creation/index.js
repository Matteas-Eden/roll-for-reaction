import React from 'react';
import { connect } from 'react-redux';

import Button from '../../../../components/button';
import Dialog from '../../../../components/dialog';
import createCharacter from '../../actions/create-character';

import './styles.scss';

const CharacterCreation = ({ dialog, createCharacter }) => {
    const handleClass = newClass => {
        // document.getElementById("Fighter").className="button-selected";
        dialog.characterClass = newClass;
        // changePath("/details", history);
        // onConfirmClick(selectedTime);
    };

    // const handleRace = newRace => {
    function handleRace(button) {
        // console.log(dialog.characterRace);
        console.log(button.title);
        // console.log(dialog.characterRace === newRace);

        document.getElementsByClassName('button-selected')[0].className = '';
        button.className = 'button-selected';
        // dialog.characterRace = newRace;

        // console.log(dialog.characterRace);
        // console.log(newRace);
        // console.log(dialog.characterRace === newRace);
        // changePath("/details", history);
        // onConfirmClick(selectedTime);
    }

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
                            'Human' === dialog.characterRace
                                ? 'character-creation__select-button selected'
                                : 'character-creation__select-button unselected'
                        }
                        // onClick={() => handleRace('Human')}
                        onClick="handleRace(this);"

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
                            'Elf' === dialog.characterRace
                                ? 'character-creation__select-button selected'
                                : 'character-creation__select-button unselected'
                        }
                        // onClick={() => handleRace('Elf')}
                        onClick="handleRace(this);"
                        // onClick={() => handleRace(this.title)}
                    />
                    <Button
                        title={'Dwarf'}
                        // extraClass="character-creation__select-button"
                        extraClass={
                            'Dwarf' === dialog.characterRace
                                ? 'character-creation__select-button selected'
                                : 'character-creation__select-button unselected'
                        }
                        // onClick={() => handleRace('Dwarf')}
                        onClick="handleRace(this);"
                        // onClick={() => handleRace(this.title)}
                    />
                </div>

                <span style={{ paddingTop: 12 }}>{`Your Class`}</span>
                <div className="container space-around">
                    <Button
                        id={'Fighter'}
                        title={'Fighter'}
                        extraClass="character-creation__select-button"
                        onClick={() => handleClass('Fighter')}
                        // onClick={() => handleClass(this.title)}
                    />
                    <Button
                        title={'Wizard'}
                        extraClass="character-creation__select-button"
                        onClick={() => handleClass('Wizard')}
                        // onClick={() => handleClass(this.title)}
                    />
                    <Button
                        title={'Ranger'}
                        extraClass="character-creation__select-button"
                        onClick={() => handleClass('Ranger')}
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

const mapStateToProps = ({ dialog }) => ({ dialog });
const actions = { createCharacter };

export default connect(mapStateToProps, actions)(CharacterCreation);
