import React from 'react';
import { connect } from 'react-redux';
import { isMobile } from 'react-device-detect';

import Button from '../../../../components/button';
import Dialog from '../../../../components/dialog';
import loadStartingItems from '../../../inventory/actions/load-starting-items';
import showFirstStoryMessage from '../../actions/show-first-story-message';

import ArrowKeys from './assets/arrow-keys.png';
import DoubleTap from './assets/double-tap.png';
import Enter from './assets/enter.png';
import Space from './assets/space.png';
import Swipe from './assets/swipe.png';
import WASDKeys from './assets/wasd-keys.png';

import './styles.scss';

const GameInstructions = ({ loadStartingItems, showFirstStoryMessage }) => {
    let mobileVersion = false;
    if (window.location.search === '?nativeApp=true' || isMobile) {
        mobileVersion = true;
    }

    function handleContinue() {
        loadStartingItems();
        showFirstStoryMessage();
    }

    return (
        <Dialog onKeyPress={handleContinue}>
            <div className="character-creation__title">
                {'Character Creation'}
            </div>

            <div className="character-creation__text">
                <input
                    name="Character name"
                    type="text"
                    maxlength="512"
                    id="character-name"
                />
            </div>

            <div className="flex-column character-creation__button">
                <Button onClick={handleContinue} title={'Continue'} />
            </div>
        </Dialog>
    );
};

const actions = { loadStartingItems, showFirstStoryMessage };

export default connect(null, actions)(GameInstructions);
