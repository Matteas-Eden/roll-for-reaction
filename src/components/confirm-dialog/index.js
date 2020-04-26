import React, { Component } from 'react';

import Button from '../button';
import { ENTER_KEY, ESC_KEY } from '../../config/constants';

import './styles.scss';

class ConfirmDialog extends Component {
    componentDidMount() {
        if (this.props.open) {
            window.addEventListener('keydown', this.handleKeyPress);
        }
    }

    componentWillUnmount() {
        if (this.props.open) {
            window.removeEventListener('keydown', this.handleKeyPress);
        }
    }

    componentDidUpdate(prevProps, _prevState) {
        if (prevProps.open !== this.props.open) {
            if (this.props.open) {
                window.addEventListener('keydown', this.handleKeyPress);
            } else {
                window.removeEventListener('keydown', this.handleKeyPress);
            }
        }
    }

    handleKeyPress = event => {
        // check if a key is pressed and bound to an action
        if (event.keyCode === ENTER_KEY) {
            this.props.confirm();
        } else if (event.keyCode === ESC_KEY) {
            this.props.onClose();
        }
    };

    render() {
        const {
            open,
            text,
            className,
            onClose,
            cancelIcon,
            cancelText,
            confirm,
            acceptIcon,
            acceptText,
        } = this.props;

        if (!open) return null;

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
    }
}

export default ConfirmDialog;
