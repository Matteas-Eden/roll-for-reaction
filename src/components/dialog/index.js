import React, { useEffect } from 'react';

import './styles.scss';

const Dialog = ({ children, goBack, onKeyPress, keys }) => {
    useEffect(() => {
        if (onKeyPress) window.addEventListener('keydown', handleKeyPress);
        return () => {
            if (onKeyPress)
                window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    function handleKeyPress(event) {
        // case for 'enter' and 'i' for closing inventory
        // check if a key is pressed and bound to an action
        // initially checks common key input 'enter'
        if (event.keyCode === 13 || (keys && keys.includes(event.keyCode))) {
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
