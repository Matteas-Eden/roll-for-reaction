const tiles = [
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 5, 5],
    [5, 0, 9, 0, 5, 5, 5, 6, 0, 0, 6, 0, 0, 0, 6, 0, 0, 6, 5, 5],
    [5, 0, 0, 0, 5, 5, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6],
    [5, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 6],
    [5, 5, 5, 5, 5, 5, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6],
    [5, 4, 2, 4, 5, 5, 5, 6, 0, 0, 6, 0, 0, 0, 6, 0, 0, 6, 5, 5],
    [5, 4, 0, 4, 5, 5, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 5, 5],
    [5, 4, 4, 4, 5, 5, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
]; //0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

const wallType = 'skull';

const monsters = [
    {
        type: 'stone-golem',
        position: [0, 12],
    },
    {
        type: 'stone-golem',
        position: [4, 12],
    },
    {
        type: 'orc',
        position: [0, 10],
    },
    {
        type: 'stone-golem',
        position: [4, 10],
    },
    {
        type: 'stone-golem',
        position: [18, 1],
    },
    {
        type: 'stone-golem',
        position: [14, 1],
    },
    {
        type: 'orc',
        position: [18, 8],
    },
    {
        type: 'stone-golem',
        position: [14, 8],
    },
];

const stairs = {
    down: '3_4',
    up: '4_1',
};

const message = {
    title:
        'The final batlle.  <> could see the sword resting just beyond the final monsters.',
    body: `<> hadn't long to go now, one more battle and they would be triumphant.`,
};

export default {
    tiles,
    wallType,
    monsters,
    stairs,
    message,
};
