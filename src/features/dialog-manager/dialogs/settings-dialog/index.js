import React, { useState } from 'react';
import { connect } from 'react-redux';

import Button from '../../../../components/button';
import ConfirmDialog from '../../../../components/confirm-dialog';
import Dialog from '../../../../components/dialog';
import closeSettings from '../../actions/close-settings';
import resetGameState from '../../../world/actions/reset-game-state';

import './settings-dialog.scss';

const SettingsDialog = ({ state, resetGameState, closeSettings }) => {
    const [confirmQuit, setConfirmQuit] = useState(false);

    const saveGame = () => {
        const url = window.URL.createObjectURL(
            new Blob([JSON.stringify(state)]),
            { type: 'octet/stream' }
        );
        const save = document.getElementById('save-game-dialog');
        save.href = url;
        save.download = 'ror-save-game.json';
        save.click();
        window.URL.revokeObjectURL(url);
    };

    return (
        <Dialog>
            <div className="flex-column settings-dialog__container">
                <span className="settings-dialog__title">{'Settings'}</span>

                <Button
                    onClick={() => setConfirmQuit(true)}
                    icon="caret-square-left"
                    title="Return to Menu"
                />

                <Button onClick={saveGame} icon="save" title="Save Game" />
                <a href="" id="save-game-dialog" style={{ display: 'none' }} />

                <Button onClick={closeSettings} icon="times" title="Close" />
            </div>

            <ConfirmDialog
                open={confirmQuit}
                text="Are you sure you want to quit? You will lose all progress..."
                onClose={() => setConfirmQuit(false)}
                confirm={resetGameState}
            />
        </Dialog>
    );
};

const mapStateToProps = state => ({
    state,
});
const actions = { resetGameState, closeSettings };

export default connect(mapStateToProps, actions)(SettingsDialog);
