import React from 'react';

import EmptySlot from '../../../../../components/empty-slot';

import './styles.scss';

const SpellButton = ({
    title,
    onClick,
    image,
    active,
    unlocked,
    unlockLevel,
}) => {
    return (
        <button
            className={`spellbook-button__container white-border ${
                active ? 'active' : ''
            }`}
            onClick={onClick}
        >
            {image && (
                <EmptySlot className="white-border button__image">
                    <div
                        style={{
                            backgroundImage: `url('${image}')`,
                            width: '40px',
                            height: '40px',
                        }}
                    />
                </EmptySlot>
            )}

            <span>{title}</span>

            {active && (
                <div className="active-spell">
                    <span>Active</span>
                </div>
            )}
            {!unlocked && (
                <div className="unlockable">
                    <span>Unlocked at level {unlockLevel}</span>
                </div>
            )}
        </button>
    );
};

export default SpellButton;
