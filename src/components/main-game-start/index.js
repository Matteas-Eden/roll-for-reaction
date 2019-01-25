import React, { useEffect } from 'react';

import Button         from '../button';
import Dialog         from '../dialog';
import GameSelect     from '../game-select';
import GameTextDialog from '../game-text-dialog';
import items          from '../../data/items';
import maps           from '../../data/maps';
import store          from '../../config/store';
import exploreTiles   from '../../features/player/explore-tiles';
import { START_MAP }  from '../../config/constants';

import './styles.scss';

const MainGameStart = (props) => {

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    }
  }, []);  // we pass empty array as the second param to make this only call on mount and not on any updates

  function handleKeyPress(event) {
    // case for 'enter' and 'space' key
    if(event.keyCode === 13 || event.keyCode === 32) {
      handleGameStart();
    }
  }

  function handleGameStart() {
    handleLoadStartMap();
    handleShowStartMessage();
    handleLoadMap();
    handleLoadMonsters();
    handleLoadPlayerSight();
    handleLoadStartingItems();
  }

  function handleLoadStartMap() {
    store.dispatch({
      type: 'SET_START_MAP',
      payload: {
        startMap: START_MAP,
        gameMode: 'story'
      }
    });
  }

  function handleShowStartMessage() {
    const { message } = maps[START_MAP];

    store.dispatch({
      type: 'PAUSE',
      payload: {
        component: (
          <GameTextDialog
            text1={message.title}
            text2={message.body} />
        )
      }
    });
  }

  function handleLoadPlayerSight() {
    exploreTiles(store.getState().player.position);
  }

  function handleLoadStartingItems() {
    // give the player a rusty sword
    store.dispatch({
      type: 'GET_ITEM',
      payload: items.weapons.RustySword
    });
  }

  function handleLoadMap() {
    // set map tiles for start map
    store.dispatch({
      type: 'ADD_TILES',
      payload: { tiles: maps[START_MAP].tiles }
    });
  }

  function handleLoadMonsters() {
    // load initial monsters
    store.dispatch({
      type: 'ADD_MONSTERS',
      payload: { monsters: maps[START_MAP].monsters, map: START_MAP }
    });
  }

  function goBack() {
    store.dispatch({
      type: 'PAUSE',
      payload: {
        component: <GameSelect />,
        gameStart: true
      }
    });
  }

  return(
    <Dialog>
      <i onClick={goBack}
        className={`fa fa-arrow-left game-start-back`} />

      <div className='flex-row game-start-title'>
        {'Story Mode'}
      </div>

      <div className='flex-column game-start-text'>
        <div>
          {'Welcome Adventurer... A world of monsters and gear awaits!'}
        </div>

        <div>
          <div className='game-start-instruction-text'>
            {'MOVE: \'WASD\' / Arrows'}
          </div>
          <div className='game-start-instruction-text'>
            {'ATTACK: \'Enter\' / \'SPACE\''}
          </div>
        </div>
      </div>

      <div className='flex-column game-start-button'>
        <Button
          onClick={handleGameStart}
          icon='compass'
          title={'Explore Dungeon'} />
      </div>
    </Dialog>
  );
}

export default MainGameStart;
