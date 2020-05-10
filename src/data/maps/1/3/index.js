const tiles = [
    [6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6],
    [0, 0, 5, 5, 5, 0, 0, 0, 0, 9, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6],
    [0, 0, 5, 5, 5, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6],
    [0, 0, 5, 5, 5, 4, 0, 0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 6],
    [0, 0, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5, 0, 0, 3, 0, 6],
    [2, 0, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 6],
    [0, 0, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5, 4, 0, 0, 0, 6],
    [6, 5, 5, 5, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 6],
    [6, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 6],
    [6, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 6],
    [6, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 6],
    [6, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
    [6, 5, 0, 4, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6],
    [6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6],
];

const wallType = 'ornate';

const monsters = [
    {
        type: 'goblin',
        position: [17, 11],
    },
    {
        type: 'wolf',
        position: [16, 10],
    },
    {
        type: 'goblin',
        position: [16, 8],
    },
    {
        type: 'wolf',
        position: [6, 3],
    },
    {
        type: 'bat',
        position: [5, 12],
    },
];

const stairs = {
    down: '1_2',
    up: '1_4',
};

const message = {
    title:
        'As <> inspects the walls, they notice a faint purple glow. Something definitely seemed off about those rats...',
    body: 'Up ahead, <> notices a group of small humanoid creatures...',
};

export default {
    tiles,
    wallType,
    monsters,
    stairs,
    message,
};
