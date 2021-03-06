const tiles = [
    [5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 0, 2, 0, 9, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 6, 0, 0, 0, 6, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5],
    [5, 5, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 5, 5, 5],
    [5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5],
    [5, 5, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 4, 5, 0, 5, 5, 5, 5],
    [5, 5, 5, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5],
    [5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5],
    [5, 5, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 5, 5, 5],
    [5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 5, 5, 5, 5],
    [5, 5, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 5, 5, 5],
    [5, 5, 5, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 6, 0, 3, 0, 6, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5],
]; //0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

const wallType = 'inca-dark';

const monsters = [
    {
        type: 'black orc',
        position: [5, 6],
    },
    {
        type: 'dragon',
        position: [9, 11],
    },
    {
        type: 'pumpkin ghost',
        position: [15, 5],
    },
    {
        type: 'plantera',
        position: [6, 12],
    },
];

const stairs = {
    up: '5_3',
    down: '5_1',
};

const message = {
    title:
        '<> walked into a temple so far and wide, the sides could not be seen.',
    body: `Strange noises echoed from the dark.  What monsters lay beyond?`,
};

export default {
    tiles,
    wallType,
    monsters,
    stairs,
    message,
};
