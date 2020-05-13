const tiles = [
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 3, 5],
    [5, 5, 5, 5, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 6, 5, 5, 5, 0, 5],
    [5, 5, 5, 5, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 6, 5, 5, 5, 0, 5],
    [5, 5, 5, 5, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 6, 5, 5, 5, 0, 5],
    [5, 5, 5, 5, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 6, 5, 5, 5, 0, 4],
    [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [5, 0, 5, 5, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 6, 5, 5, 5, 4, 4],
    [5, 0, 5, 5, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 6, 5, 5, 5, 5, 5],
    [5, 0, 5, 5, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 6, 5, 5, 5, 5, 5],
    [5, 0, 5, 5, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 6, 5, 5, 5, 5, 5],
    [5, 0, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5],
    [5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
]; //0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

const wallType = 'skull';

const monsters = [
    {
        type: 'stone-golem',
        position: [6, 10],
    },
    {
        type: 'lich',
        position: [8, 8],
    },
];

const stairs = {
    down: '3_4',
    up: '4_1',
};

const message = {
    title: 'The narrow corridor opens up suddenly to an expansive room.',
    body:
        'From accross the well-lit hall, <> can see the exit... but a monster stands in their way',
};

export default {
    tiles,
    wallType,
    monsters,
    stairs,
    message,
};