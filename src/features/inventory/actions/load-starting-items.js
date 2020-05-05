import items from '../../../data/items';

export default function loadStartingItems() {
    return (dispatch, getState) => {
        let weapon = null;
        switch (getState().dialog.character.characterClass) {
            case 'Fighter':
                weapon = items.weapons.swords.RustySword;
                break;
            case 'Wizard':
                weapon = items.weapons.staffs.BlackStaff;
                break;
            case 'Ranger':
                // TODO: When ranged attack #188 is implemented, starting item should be changed to Boomerang
                weapon = items.weapons.swords.RustySword;
                // weapon = items.weapons.ranged.Boomerang;
                break;
            default:
                weapon = items.weapons.swords.RustySword;
                break;
        }

        let startingItem = null;
        let dispatchType = null;
        switch (getState().dialog.character.characterRace) {
            case 'Human':
                dispatchType = 'STARTING_ITEM';
                startingItem = items.clothes.armor.LeatherBoots;
                break;
            case 'Elf':
                dispatchType = 'STARTING_ITEM';
                startingItem = items.clothes.armor.LeatherGloves;
                break;
            case 'Dwarf':
            default:
                dispatchType = 'GET_GOLD';
                startingItem = 30;
                break;
        }

        // TODO: give starting items based on race and class
        dispatch({
            type: 'STARTING_ITEM',
            payload: weapon,
        });

        dispatch({
            type: dispatchType,
            payload: startingItem,
        });

        dispatch({
            type: 'EQUIP_ITEM',
            payload: getState().inventory.items[0],
        });

        dispatchType === 'STARTING_ITEM' &&
            dispatch({
                type: 'EQUIP_ITEM',
                payload: getState().inventory.items[1],
            });
    };
}
