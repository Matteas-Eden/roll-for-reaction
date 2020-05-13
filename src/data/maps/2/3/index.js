const tiles = [
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 4, 0, 0, 0, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 0, 0, 0, 0, 0, 6, 5, 5, 5, 5],
    [5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 5, 5],
    [5, 5, 5, 5, 0, 5, 5, 5, 5, 6, 0, 0, 0, 0, 0, 6, 5, 5, 5, 5],
    [5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 0, 0, 0, 4, 0, 5, 5, 5, 5, 5],
    [5, 5, 5, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 6, 0, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 0, 5, 5, 5, 5, 0, 6, 0, 5, 5, 5, 4, 0, 0, 5, 5],
    [5, 5, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 6, 0, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
];

const wallType = 'blue-pattern';

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
    down: '2_2',
    up: '2_4',
};

const message = {
    title:
        'Entering this part of the dungeon, <> notices stray gold coins accompanied by large burn markings. The voice speaks.',
    body: `"EQUAL PARTS BEAUTIFUL AND DANGEROUS... THESE CREATURES ARE THE ESSENCE OF GREED."`,
};

export default {
    tiles,
    wallType,
    monsters,
    stairs,
    message,
};