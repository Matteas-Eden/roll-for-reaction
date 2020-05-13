const tiles = [
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 4, 0, 5, 5, 5, 5, 5, 6, 0, 6, 5, 5, 5, 5, 5, 5, 0, 4, 5],
    [5, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 5],
    [5, 6, 6, 5, 0, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 0, 5, 6, 6, 5],
    [5, 0, 5, 5, 0, 5, 5, 0, 6, 0, 6, 0, 5, 5, 5, 0, 5, 5, 0, 5],
    [5, 6, 5, 5, 0, 5, 5, 0, 0, 0, 0, 0, 5, 5, 5, 0, 5, 5, 6, 5],
    [5, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [5, 6, 0, 0, 0, 5, 5, 0, 6, 0, 6, 0, 5, 5, 5, 0, 0, 0, 6, 5],
    [5, 0, 5, 5, 0, 5, 5, 0, 0, 6, 0, 0, 5, 5, 5, 0, 5, 5, 0, 5],
    [5, 0, 5, 5, 0, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 0, 5, 5, 0, 5],
    [5, 4, 0, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 0, 4, 5],
    [5, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 5],
    [5, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 5],
    [5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
]; //0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

const wallType = 'inca-dark';

const monsters = [
    {
        type: 'black-orc',
        position: [12, 8],
    },
    {
        type: 'black-orc',
        position: [9, 11],
    },
    {
        type: 'dragon',
        position: [15, 5],
    },
    {
        type: 'stone-golem',
        position: [6, 12],
    },
];

const stairs = {
    down: '4_5',
    up: '5_2',
};

const message = {
    title:
        '<> stumbles out the forest and looks around in awe at their new surroundings.',
    body: `It seems as if <> has stumbled accross a lost world, with inca designs etched into the stonework. Faces seem to pop out at <> from all around.`,
};

export default {
    tiles,
    wallType,
    monsters,
    stairs,
    message,
};
