import React from 'react';
import { connect } from 'react-redux';

import toggleJournal from '../actions/toggle-journal';

import './styles.scss';

const GameJournal = ({ toggleJournal }) => {
    return (
        <button
            onClick={toggleJournal}
            className="game-journal__button white-border"
        >
            <i className={`fa fa-book game-journal__icon`} />
        </button>
    );
};

const actions = { toggleJournal };

export default connect(null, actions)(GameJournal);
