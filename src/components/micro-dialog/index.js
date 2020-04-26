import React, { Component } from 'react';

import { ENTER_KEY, ESC_KEY } from '../../config/constants';

import './styles.scss';

class MicroDialog extends Component {
    componentDidMount() {
        if (this.props.onKeyPress) {
            window.addEventListener('keydown', this.handleKeyPress);
        }
    }

    componentWillUnmount() {
        if (this.props.onKeyPress) {
            window.removeEventListener('keydown', this.handleKeyPress);
        }
    }

    handleKeyPress = event => {
        if (event.keyCode === ENTER_KEY) {
            this.props.onKeyPress();
        } else if (event.keyCode === ESC_KEY) {
            this.props.onClose();
        }
    };

    render() {
        const { fullsize, className, noButton, onClose, children } = this.props;

        const noSpacing = { top: 0, bottom: 0, left: 0, right: 0 };

        return (
            <div
                style={fullsize ? noSpacing : {}}
                className={`micro-dialog__container white-border ${className ||
                    ''}`}
            >
                {!noButton && (
                    <button className="micro-dialog__close" onClick={onClose}>
                        <i className={`fa fa-times`} />
                    </button>
                )}

                {children}
            </div>
        );
    }
}

export default MicroDialog;
