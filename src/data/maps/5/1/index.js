const tiles = [
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 9, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
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
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
]; //0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

const wallType = 'purple-brick';

const monsters = [
    {
        type: 'goblin',
        position: [5, 6],
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
    down: '2_5',
    up: '3_2',
};

const message = {
    title:
        '<> has defeated the Lich, but more adventure lies ahead with more monsters to be slain.',
    body: `As <> delves deeper into the dungeon, the walls change tone yet again.It is almost as if magic itself is imbued into the very stones`,
};

export default {
    tiles,
    wallType,
    monsters,
    stairs,
    message,
};
