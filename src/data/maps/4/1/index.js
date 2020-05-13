const tiles = [
    [0, 0, 6, 5, 0, 0, 0, 5, 0, 5, 0, 5, 5, 5, 0, 5, 0, 9, 0, 5],
    [5, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 5, 5, 0, 0, 0, 2, 5],
    [5, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 6, 0, 0, 0, 0, 0, 0],
    [6, 5, 0, 0, 0, 0, 5, 5, 0, 0, 0, 6, 5, 0, 0, 0, 0, 5, 0, 5],
    [0, 0, 0, 5, 0, 5, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 5],
    [0, 0, 5, 6, 5, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0, 0, 0, 5, 5],
    [5, 0, 0, 5, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 5, 0, 0, 5],
    [0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 4, 5, 0, 0, 0, 5, 0, 0, 0, 5],
    [0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 5, 0, 0, 0, 5, 5, 0, 5],
    [0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 6, 5, 4, 5],
    [0, 0, 0, 5, 6, 5, 5, 0, 0, 0, 0, 5, 0, 0, 0, 0, 5, 5, 5, 5],
    [5, 0, 5, 0, 5, 0, 0, 5, 5, 0, 0, 4, 5, 0, 0, 0, 0, 0, 5, 5],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 4, 5, 0, 0, 5, 0, 0, 0, 5],
    [6, 5, 0, 0, 0, 0, 5, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 5, 5, 5],
    [5, 5, 0, 5, 5, 0, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0, 5, 5, 0, 5],
]; //0, 1, 2, 3, 4, 0, 6, 7, 8, 9, 0, 1, 2, 3, 4, 0, 6, 7, 8, 9

const wallType = 'green-cracks';

const monsters = [
    {
        type: 'imp',
        position: [14, 5],
    },
    {
        type: 'orc',
        position: [14, 13],
    },
    {
        type: 'orc',
        position: [4, 2],
    },
    {
        type: 'imp',
        position: [4, 7],
    },
    {
        type: 'imp',
        position: [6, 5],
    },
    {
        type: 'imp',
        position: [9, 12],
    },
];

const stairs = {
    down: '3_5',
    up: '4_2',
};

const message = {
    title:
        'The walls change colour again, this time becoming overgrown and mossy.',
    body: `<> looks around at the room looking more and more like a jungle.  'Let's just hope I don't get lost in here,' <> thinks.`,
};

export default {
    tiles,
    wallType,
    monsters,
    stairs,
    message,
};
