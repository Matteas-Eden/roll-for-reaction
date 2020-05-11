const tiles = [
    [0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 0, 5, 5, 5, 5, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5, 4, 0, 0, 0, 5],
    [5, 5, 0, 5, 5, 5, 0, 5, 5, 5, 5, 0, 5, 5, 5, 0, 0, 0, 0, 5],
    [5, 6, 0, 6, 5, 5, 0, 5, 5, 5, 5, 0, 5, 5, 5, 0, 0, 0, 0, 5],
    [5, 4, 0, 4, 5, 5, 0, 4, 5, 5, 5, 0, 5, 5, 5, 5, 5, 0, 5, 5],
    [5, 6, 0, 6, 5, 5, 5, 5, 5, 5, 6, 0, 6, 5, 5, 5, 5, 0, 5, 5],
    [5, 5, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 5, 5],
    [5, 5, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 5, 1],
    [5, 5, 0, 5, 5, 5, 5, 5, 0, 5, 5, 5, 0, 5, 5, 5, 0, 0, 0, 2],
    [5, 5, 3, 5, 5, 5, 5, 5, 0, 5, 5, 4, 0, 0, 0, 0, 0, 5, 5, 1],
    [5, 5, 5, 5, 5, 4, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 4, 5, 5],
]; //0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

const wallType = 'purple';

const monsters = [
    {
        type: 'rat',
        position: [17, 6],
    },
    {
        type: 'rat',
        position: [16, 14],
    },
    {
        type: 'bat',
        position: [11, 9],
    },
    {
        type: 'rat',
        position: [7, 3],
    },
];

const stairs = {
    down: '2_5',
    up: '3_2',
};

const message = {
    title:
        '<> prevailed over the Lich, but more adventure lies ahead with many monsters to be slain.',
    body: `As <> delves deeper into the dungeon, the walls change tone yet again. It is almost as if magic itself is imbued into the very stones`,
};

export default {
    tiles,
    wallType,
    monsters,
    stairs,
    message,
};
