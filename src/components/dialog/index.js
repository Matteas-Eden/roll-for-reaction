import React, { Component } from 'react';

import { ENTER_KEY, ESC_KEY } from '../../config/constants';

import './styles.scss';

class Dialog extends Component {
    componentDidMount() {
        console.log(goBack);
        const { goBack, onKeyPress } = this.props;
        if (
            (onKeyPress && typeof onKeyPress === 'function') ||
            (goBack && typeof onKeyPress === 'function')
        ) {
            window.addEventListener('keydown', this.handleKeyPress);
        }
    }

    componentWillUnmount() {
        const { goBack, onKeyPress } = this.props;
        if (
            (onKeyPress && typeof onKeyPress === 'function') ||
            (goBack && typeof onKeyPress === 'function')
        ) {
            window.removeEventListener('keydown', this.handleKeyPress);
        }
    }

    handleKeyPress = event => {
        const { keys, goBack, onKeyPress } = this.props;

        if (onKeyPress && typeof onKeyPress === 'function') {
            if (
                keys
                    ? keys.includes(event.keyCode)
                    : event.keyCode === ENTER_KEY
            ) {
                this.props.onKeyPress(event.keyCode);
            }
        }

        if (goBack && typeof onKeyPress === 'function') {
            if (event.keyCode === ESC_KEY) {
                goBack();
            }
        }
    };

    render() {
        const { className, style, goBack, children } = this.props;

        return (
            <div
                className={className || 'dialog__container white-border'}
                style={style}
            >
                {goBack && (
                    <button onClick={goBack} className="dialog__back-button">
                        <i className={`fa fa-arrow-left`} />
                    </button>
                )}
                {children}
            </div>
        );
    }
}

export default Dialog;
