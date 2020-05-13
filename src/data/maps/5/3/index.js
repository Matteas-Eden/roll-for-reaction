const tiles = [
    [5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 0, 0, 0, 0, 0, 0],
    [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [5, 5, 0, 5, 5, 5, 5, 5, 6, 0, 6, 5, 5, 6, 0, 0, 0, 0, 0, 0],
    [5, 5, 0, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0],
    [5, 5, 0, 5, 5, 5, 5, 5, 6, 0, 6, 5, 5, 5, 0, 0, 0, 0, 0, 0],
    [5, 6, 0, 6, 5, 5, 5, 5, 4, 0, 4, 5, 5, 5, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 5, 5, 5, 4, 0, 4, 5, 5, 5, 5, 6, 0, 6, 5, 5],
    [0, 0, 0, 0, 0, 5, 5, 5, 4, 4, 4, 5, 5, 5, 5, 5, 0, 5, 5, 5],
    [0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5],
    [0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5],
    [0, 0, 0, 0, 0, 6, 5, 5, 5, 9, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5],
    [5, 5, 5, 5, 5, 6, 5, 5, 5, 0, 5, 5, 5, 5, 0, 3, 0, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 2, 5, 5, 5, 5, 0, 0, 0, 5, 5, 5],
]; //0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

const wallType = 'inca-light';

const monsters = [
    {
        type: 'medusa',
        position: [12, 4],
    },
    {
        type: 'medusa',
        position: [13, 2],
    },
    {
        type: 'warlock',
        position: [4, 7],
    },
    {
        type: 'warlock',
        position: [4, 11],
    },
];

const stairs = {
    down: '3_2',
    up: '3_4',
};

const message = {
    title: '<> is faced with a choice.  A short cut lies to their right.',
    body:
        'The sounds of many hungry foes echoes down the corridor, making the shortcut look more promising.  But what treasures might they miss if they took it?',
};

export default {
    tiles,
    wallType,
    monsters,
    stairs,
    message,
};
