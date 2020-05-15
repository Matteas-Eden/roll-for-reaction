import React from 'react';

import ArrowKeys from './assets/arrow-keys.png';
import DoubleTap from './assets/double-tap.png';
import Enter from './assets/enter.png';
import Space from './assets/space.png';
import Swipe from './assets/swipe.png';
import WASDKeys from './assets/wasd-keys.png';

import './styles.scss';

const MovementTutorial = () => {
    return (
        <div className="flex-column tutorial-movement__container">
            <div className="tutorial-page__title centered">{'MOVEMENT'}</div>
        </div>
    );
};

export default MovementTutorial;
