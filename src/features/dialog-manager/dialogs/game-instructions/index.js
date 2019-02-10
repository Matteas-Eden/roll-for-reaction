import React, { useEffect } from 'react';
import { connect }          from 'react-redux';
import { isMobile }         from 'react-device-detect';

import Button        from '../../../../components/button';
import Dialog        from '../../../../components/dialog';
import items         from '../../../../data/items';
import store         from '../../../../config/store';
import { START_MAP } from '../../../../config/constants';

import ArrowKeys from './assets/arrow-keys.png';
import DoubleTap from './assets/double-tap.png';
import Enter     from './assets/enter.png';
import Space     from './assets/space.png';
import Swipe     from './assets/swipe.png';
import WASDKeys  from './assets/wasd-keys.png';

import './styles.scss';

const GameInstructions = ({ world }) => {

  let mobileVersion = false;
  if(window.location.search === '?nativeApp=true' || isMobile) {
    mobileVersion = true;
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    }
  }, []); // we pass empty array as the second param to make this only call on mount and not on any updates

  function handleKeyPress(event) {
    // case for 'enter' or 'space' key
    if(event.keyCode === 13 || event.keyCode === 32) {
      handleContinue();
    }
  }

  function handleContinue() {
    handleShowMapMessage();
    handleLoadStartingItems();
  }

  function handleShowMapMessage() {
    const { message } = world.storyMaps[START_MAP];

    store.dispatch({
      type: 'PAUSE',
      payload: {
        pause: true,
        gameText: {
          title: message.title,
          body: message.body
        }
      }
    });
  }

  function handleLoadStartingItems() {
    // give the player a rusty sword
    store.dispatch({
      type: 'GET_ITEM',
      payload: items.weapons.RustySword
    });
    // and equip it
    store.dispatch({
      type: 'EQUIP_ITEM',
      payload: store.getState().inventory.items[0]
    });
  }

  return(
    <Dialog>
      <div className='game-instructions__title'>
        {'Game Controls'}
      </div>

      <div className='game-instructions__text'>
        {
          mobileVersion ?
            null
            :
            <span style={{paddingBottom: 12}}>
              {`MOVEMENT`}
            </span>
        }

        <div className={`flex-row align-center space-evenly`}>
          {
            mobileVersion ?
              <>
                <img src={Swipe}
                  alt='swipe' />
                <div className='game-instructions__native-text'>
                  {'SWIPE and HOLD to MOVE'}
                </div>
              </>
              :
              <>
                <img src={ArrowKeys} alt='arrow-keys' />
                <img src={WASDKeys} alt='wasd-keys' />
              </>
          }
        </div>

        {
          mobileVersion ?
            null
            :
            <span style={{paddingTop: 12}}>
              {`ATTACK`}
            </span>
        }

        <div className={`flex-row align-center space-evenly`}>
          {
            mobileVersion ?
              <>
                <img src={DoubleTap}
                  alt='double-tap' />
                <div className='game-instructions__native-text'>
                  {'DOUBLE TAP to ATTACK'}
                </div>
              </>
              :
              <>
                <img src={Space} alt='space' />
                <img src={Enter} alt='enter' />
              </>
          }
        </div>

      </div>

      <div className='flex-column game-instructions__button'>
        <Button
          onClick={handleContinue}
          title={'Continue'} />
      </div>
    </Dialog>
  );
}

const mapStateToProps = ({ world }) => ({ world });

export default connect(mapStateToProps)(GameInstructions);