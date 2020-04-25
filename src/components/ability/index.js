import React from 'react';

import Button from '../button';
import { MAX_ABILITY_SCORE } from '../../config/constants';

import './styles.scss';

const Ability = ({
    name,
    value,
    minValue,
    increment,
    decrement,
    points,
    userOpen,
}) => {
    return (
        <>
            <div className="ability-score__container">
                <span className="ability-score__text">{name}:</span>
                <div
                    className="ability-score__button"
                    style={{
                        visibility:
                            // userOpen && (value === MAX_ABILITY_SCORE || points === 0)
                            (points === 0 && !userOpen) ||
                            value === MAX_ABILITY_SCORE
                                ? 'hidden'
                                : 'visible',
                    }}
                >
                    <Button
                        title=" "
                        icon="caret-right"
                        onClick={increment}
                        tiny={true}
                        noBorder={true}
                    />
                </div>
                <span className="ability-score__score-text">{value}</span>
                <div
                    className="ability-score__button"
                    style={{
                        visibility:
                            // userOpen && (value === minValue || points === 0)
                            (points === 0 && !userOpen) || value === minValue
                                ? 'hidden'
                                : 'visible',
                    }}
                >
                    <Button
                        title=" "
                        icon="caret-left"
                        onClick={decrement}
                        tiny={true}
                        noBorder={true}
                    />
                </div>
            </div>
        </>
    );
};

export default Ability;
