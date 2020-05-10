import moveNormally from './normal-ai';
import frozen from './frozen-ai';

export default function takeMonstersTurn() {
    return (dispatch, getState) => {
        const { monsters, map, world } = getState();
        // get the current monsters
        const { components } = monsters;
        const { sightBox } = map;
        const { currentMap } = world;
        // find each monster

        Object.entries(components[currentMap]).forEach(([, monster]) => {
            switch (monster.ai) {
                case 'normal':
                    dispatch(moveNormally(sightBox, currentMap, monster));
                    break;
                case 'frozen':
                    dispatch(frozen(sightBox, currentMap, monster));
                    break;
                default:
                    break;
            }
        });
    };
}
