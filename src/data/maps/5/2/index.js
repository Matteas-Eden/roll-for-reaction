const tiles = [
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 0, 0, 0, 0, 0, 0],
    [5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [5, 5, 0, 5, 5, 5, 5, 5, 1, 0, 1, 5, 5, 1, 0, 0, 0, 0, 0, 0],
    [5, 5, 0, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0],
    [5, 5, 0, 5, 5, 5, 5, 5, 1, 0, 1, 5, 5, 5, 0, 0, 0, 0, 0, 0],
    [5, 1, 0, 1, 5, 5, 5, 5, 4, 0, 4, 5, 5, 5, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 5, 5, 5, 4, 0, 4, 5, 5, 5, 5, 1, 0, 1, 5, 5],
    [0, 0, 0, 0, 0, 5, 5, 5, 4, 4, 4, 5, 5, 5, 5, 5, 0, 5, 5, 5],
    [0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5],
    [0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5],
    [0, 0, 0, 0, 0, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5],
    [5, 5, 5, 5, 5, 1, 5, 5, 5, 0, 5, 5, 5, 5, 0, 3, 0, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 2, 5, 5, 5, 5, 0, 0, 0, 5, 5, 5],
]; //0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

const wallType = 'purple';

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
        position: [0, 10],
    },
    {
        type: 'stone-golem',
        position: [4, 10],
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
        position: [18, 8],
    },
    {
        type: 'stone-golem',
        position: [14, 8],
    },
];

const stairs = {
    up: '3_3',
    down: '3_1',
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
