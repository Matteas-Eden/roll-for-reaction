import React from 'react';
import { connect } from 'react-redux';
import { isMobile } from 'react-device-detect';

import Button from '../../../../components/button';
import Dialog from '../../../../components/dialog';
import loadStartingItems from '../../../inventory/actions/load-starting-items';
import showFirstStoryMessage from '../../actions/show-first-story-message';
import showEndlessMessage from '../../actions/show-endless-message';

import ArrowKeys from './assets/arrow-keys.png';
import DoubleTap from './assets/double-tap.png';
import Enter from './assets/enter.png';
import Space from './assets/space.png';
import Swipe from './assets/swipe.png';
import WASDKeys from './assets/wasd-keys.png';

import './styles.scss';

const GameInstructions = ({
    dialog,
    loadStartingItems,
    showFirstStoryMessage,
    showEndlessMessage,
}) => {
    let mobileVersion = false;
    if (window.location.search === '?nativeApp=true' || isMobile) {
        mobileVersion = true;
    }

    function handleContinue() {
        if (dialog.gameType === 'endless') {
            showEndlessMessage();
        } else {
            loadStartingItems();
            showFirstStoryMessage();
        }
    }

    return (
        <Dialog onKeyPress={handleContinue}>
            <div className="game-instructions__title">{'Game Controls'}</div>

            <div className="game-instructions__text">
                {!mobileVersion && (
                    <span style={{ paddingBottom: 12 }}>{`MOVEMENT`}</span>
                )}

                <div className={`align-center space-evenly`}>
                    {mobileVersion ? (
                        <>
                            <img src={Swipe} alt="swipe" />
                            <div className="game-instructions__native-text">
                                {'SWIPE and HOLD to MOVE'}
                            </div>
                        </>
                    ) : (
                        <>
                            <img
                                src={ArrowKeys}
                                alt="arrow-keys"
                                style={{ paddingRight: '2em' }}
                            />
                            <img src={WASDKeys} alt="wasd-keys" />
                        </>
                    )}
                </div>

                {mobileVersion ? (
                    <>
                        <img src={DoubleTap} alt="double-tap" />
                        <div className="game-instructions__native-text">
                            {'DOUBLE TAP to ATTACK'}
                        </div>
                    </>
                ) : (
                    <>
                        <span style={{ paddingTop: 12 }}>{`ATTACK`}</span>
                        <div className={`align-center space-evenly`}>
                            <img src={Space} alt="space" height="35em" />
                        </div>

                        <span style={{ paddingTop: 12 }}>{`CONTINUE`}</span>
                        <div className={`align-center space-evenly`}>
                            <img src={Enter} alt="enter" height="45em" />
                        </div>
                    </>
                )}
            </div>

            <div className="flex-column game-instructions__button">
                <Button
                    onClick={() => handleContinue(dialog.character)}
                    title={'Continue'}
                />
            </div>
        </Dialog>
    );
};

const mapStateToProps = ({ dialog }) => ({ dialog });
const actions = {
    loadStartingItems,
    showFirstStoryMessage,
    showEndlessMessage,
};

export default connect(mapStateToProps, actions)(GameInstructions);
