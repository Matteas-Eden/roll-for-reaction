const tiles = [
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 0, 0, 4, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5],
    [5, 5, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 5, 5, 5, 0, 3, 5, 5],
    [5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 4, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
    [5, 5, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 0, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 5, 5, 5, 0, 0, 0],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 9, 1, 5, 5, 5, 0, 2, 0],
];

const monsters = [
    {
        type: 'imp',
        position: [4, 5],
    },
    {
        type: 'orc',
        position: [5, 7],
    },
    {
        type: 'orc',
        position: [5, 11],
    },
    {
        type: 'imp',
        position: [3, 8],
    },
];

const stairs = {
    down: '1_5',
    up: '2_2',
};

const message = {
    title:
        '<> notices the walls are now a vibrant blue. But before they can do anything, a deep voice is heard from every direction.',
    body: `"AS LONG AS OUR SPIRITS RESIDE IN THESE WALLS, THE OLD SPIRIT REMAINS OUR PRISONER..."`,
};

export default {
    tiles,
    monsters,
    stairs,
    message,
};
