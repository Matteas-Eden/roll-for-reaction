import React, { useEffect } from 'react';

import Button from '../button';
import { ENTER_KEY, ESC_KEY } from '../../config/constants';

import './styles.scss';

const ConfirmDialog = ({
    open,
    text,
    className,
    onClose,
    cancelIcon,
    cancelText,
    confirm,
    acceptIcon,
    acceptText,
}) => {
    if (!open) return null;

    const handleKeyPress = event => {
        // check if a key is pressed and bound to an action
        if (event.keyCode === ENTER_KEY) {
            confirm();
        } else if (event.keyCode === ESC_KEY) {
            onClose();
        }
        // This needs to be here for some reason...
        window.removeEventListener('keydown', handleKeyPress);
    };

    useEffect(() => {
        if (open) {
            window.addEventListener('keydown', handleKeyPress);
        } else {
            window.removeEventListener('keydown', handleKeyPress);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <div
            className={`confirm-dialog__container white-border ${className ||
                ''}`}
        >
            <span className="confirm-dialog__text">{text}</span>

            <div className="flex-row confirm-dialog__buttons">
                <Button
                    onClick={onClose}
                    icon={cancelIcon || 'times'}
                    title={cancelText || 'No'}
                />

                <Button
                    onClick={confirm}
                    icon={acceptIcon || 'check'}
                    title={acceptText || 'Yes'}
                />
            </div>
        </div>
    );
};

export default ConfirmDialog;
