const tiles = [
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5],
    [5, 6, 9, 6, 5, 5, 5, 6, 0, 0, 0, 0, 0, 0, 6, 5, 5, 5, 5, 5],
    [5, 0, 0, 0, 5, 5, 5, 6, 0, 0, 0, 0, 0, 0, 6, 5, 4, 4, 0, 0],
    [5, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
    [5, 5, 5, 5, 5, 5, 5, 6, 0, 0, 0, 0, 0, 0, 6, 5, 4, 4, 0, 0],
    [5, 5, 5, 5, 5, 5, 5, 6, 0, 0, 0, 0, 0, 0, 6, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
]; //0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

const wallType = 'skull';

const monsters = [
    {
        type: 'lich king',
        position: [12, 7],
    },
    {
        type: 'cerberus',
        position: [12, 5],
    },
];

const stairs = {
    down: '4_4',
    up: '5_1',
};

const message = {
    title: '<> heard a booming voice rattle the skulls on the wall',
    body: `"YOU THOUGHT IT WAS OVER? I HAVE TWO LIVES LEFT MORTAL!"`,
};

export default {
    tiles,
    wallType,
    monsters,
    stairs,
    message,
};
