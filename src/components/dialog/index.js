import React, { useEffect } from 'react';

import './styles.scss';

const Dialog = ({ children, goBack, onKeyPress }) => {
    useEffect(() => {
        if (onKeyPress) window.addEventListener('keydown', handleKeyPress);
        return () => {
            if (onKeyPress)
                window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    function handleKeyPress(event) {
        // check if a key is pressed and bound to an action
        if (event.keyCode === 13 || event.keyCode === 73) {
            onKeyPress();
        }
    }

    return (
        <div className="dialog__container white-border">
            {goBack && (
                <button onClick={goBack} className="dialog__back-button">
                    <i className={`fa fa-arrow-left`} />
                </button>
            )}
            {children}
        </div>
    );
};

export default Dialog;
