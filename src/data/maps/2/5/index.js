const tiles = [
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 5, 5, 5, 6, 9, 6, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 2, 0, 5, 5, 5, 0, 0, 0, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 5, 5, 5, 0, 0, 0, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 0, 0, 0, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 0, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 0, 6, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 0, 6, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 0, 6, 6, 6, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 6, 0, 0, 0, 0, 0, 0, 0, 6, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [5, 5, 5, 5, 5, 5, 6, 0, 0, 0, 0, 0, 0, 0, 6, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
];

const wallType = 'skull';

const monsters = [
    {
        type: 'lich',
        position: [12, 12],
    },
];

const stairs = {
    down: '2_4',
    up: '3_1',
};

const message = {
    title:
        '<> feels a strong force in this area as they notice the skull covered walls. The voice speaks once more...',
    body: `"THIS IS IT! COME BOW BEFORE ME MORTAL....."`,
};

export default {
    tiles,
    wallType,
    monsters,
    stairs,
    message,
};