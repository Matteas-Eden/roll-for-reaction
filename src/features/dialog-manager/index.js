import React from 'react';
import { connect } from 'react-redux';

import ChestLoot from './dialogs/chest-loot';
import EndlessGameStart from './dialogs/endless-game-start';
import InventoryDialog from './dialogs/inventory-dialog';
import GameInstructions from './dialogs/game-instructions';
import CharacterCreation from './dialogs/character-creation';
import GameTextDialog from './dialogs/game-text-dialog';
import GameSelect from './dialogs/game-select';
import GameWin from './dialogs/game-win';
import GameOver from './dialogs/game-over';
import MainGameStart from './dialogs/main-game-start';
import SettingsDialog from './dialogs/settings-dialog';
import ShopDialog from './dialogs/shop-dialog';
import LevelUp from './dialogs/level-up';
import AbilityScores from './dialogs/ability-dialog';
import CharacterCustomisation from './dialogs/character-customisation';
import JournalDialog from './dialogs/journal-dialog';
import SpellbookDialog from './dialogs/spellbook-dialog';

const DialogManager = ({ dialog, journal }) => {
    const {
        chest,
        inventory,
        gameText,
        gameOver,
        gameStart,
        gameSelect,
        gameWin,
        gameInstructions,
        characterCreation,
        character,
        paused,
        settings,
        shop,
        levelUp,
        abilityDialog,
        characterCustomisation,
        journalDialog,
        spellbookDialog,
    } = dialog;

    let PauseComp = null;
    let SettingsComp = null;
    let LevelUpComp = null;

    if (paused) {
        if (chest) PauseComp = <ChestLoot />;
        if (shop) PauseComp = <ShopDialog />;
        if (inventory) PauseComp = <InventoryDialog />;
        if (journalDialog)
            PauseComp = <JournalDialog entries={journal.entries} />;
        if (spellbookDialog) PauseComp = <SpellbookDialog />;
        if (gameText)
            PauseComp = (
                <GameTextDialog
                    text1={gameText.title.replace(
                        /<>/g,
                        character.characterName
                    )}
                    text2={gameText.body.replace(
                        /<>/g,
                        character.characterName
                    )}
                />
            );
        if (abilityDialog) PauseComp = <AbilityScores />;
        if (characterCreation) PauseComp = <CharacterCreation />;
        if (characterCustomisation) PauseComp = <CharacterCustomisation />;
        if (gameInstructions) PauseComp = <GameInstructions />;
        if (gameOver) PauseComp = <GameOver />;
        if (gameStart) PauseComp = <GameSelect />;
        if (gameSelect) {
            if (gameSelect === 'story') PauseComp = <MainGameStart />;
            if (gameSelect === 'endless') PauseComp = <EndlessGameStart />;
        }
        if (gameWin) PauseComp = <GameWin />;
    }
    if (settings) SettingsComp = <SettingsDialog />;
    if (levelUp) LevelUpComp = <LevelUp />;

    return (
        <>
            {/* Show the 'paused' component here - this is the game start screen,
        game over screen, as well as other dialogs throughout the game */}
            {PauseComp}

            {LevelUpComp}

            {/* Show the 'settings' component over the 'paused' components */}
            {SettingsComp}
        </>
    );
};

const mapStateToProps = ({ dialog, journal }) => ({ dialog, journal });

export default connect(mapStateToProps)(DialogManager);
