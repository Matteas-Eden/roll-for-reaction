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
        type: 'stone-golem',
        position: [0, 12],
    },
    {
        type: 'stone-golem',
        position: [4, 12],
    },
    {
        type: 'orc',
        position: [0, 7],
    },
    {
        type: 'stone-golem',
        position: [4, 7],
    },
    {
        type: 'stone-golem',
        position: [18, 1],
    },
    {
        type: 'stone-golem',
        position: [14, 1],
    },
    {
        type: 'orc',
        position: [18, 6],
    },
    {
        type: 'stone-golem',
        position: [14, 6],
    },
];

const stairs = {
    down: '5_2',
    up: '5_4',
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
