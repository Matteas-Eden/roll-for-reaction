const tiles = [
    [0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 5],
    [0, 4, 0, 5, 5, 5, 5, 5, 0, 2, 0, 5, 5, 5, 5, 5, 0, 4, 0, 5],
    [0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 5],
    [5, 0, 5, 5, 0, 0, 0, 5, 5, 0, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5],
    [5, 0, 0, 0, 0, 6, 0, 5, 5, 0, 0, 0, 5, 5, 0, 0, 0, 5, 5, 5],
    [5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 6, 0, 0, 0, 5],
    [5, 5, 5, 5, 0, 5, 5, 5, 5, 0, 0, 0, 5, 5, 0, 0, 0, 5, 0, 5],
    [5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 0, 5],
    [5, 5, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 0, 0, 0],
    [5, 5, 0, 4, 0, 5, 5, 0, 0, 0, 5, 5, 0, 0, 0, 5, 5, 0, 4, 0],
    [5, 5, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 6, 0, 5, 5, 0, 0, 0],
    [5, 5, 0, 5, 5, 5, 5, 0, 0, 0, 5, 5, 0, 0, 0, 5, 5, 5, 5, 5],
    [0, 0, 0, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 0, 5, 5, 0, 0, 0, 5],
    [0, 3, 0, 5, 5, 5, 0, 0, 0, 5, 5, 5, 5, 0, 0, 0, 0, 4, 0, 5],
    [0, 0, 0, 5, 5, 5, 0, 4, 0, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 5],
]; //0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

const wallType = 'purple-brick';

const monsters = [
    {
        type: 'goblin',
        position: [5, 7],
    },
    {
        type: 'orc',
        position: [9, 11],
    },
    {
        type: 'orc',
        position: [15, 5],
    },
    {
        type: 'stone-golem',
        position: [6, 12],
    },
];

const stairs = {
    down: '3_3',
    up: '3_5',
};

const message = {
    title:
        'As <> looks around, they notice the rooms appear to be placed in a curious pattern.',
    body:
        'Up ahead, the shopkeeper tosses a coin and <> wonders how they can keep their business going unbothered by all the monsters',
};

export default {
    tiles,
    wallType,
    monsters,
    stairs,
    message,
};
