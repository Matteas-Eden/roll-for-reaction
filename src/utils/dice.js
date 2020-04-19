const Die = {
    roll: sides => {
        return Math.floor(Math.random() * sides) + 1;
    },
};
export const d4 = {
    roll: () => {
        return Die.roll(4);
    },
    type: 'd4',
};
export const d6 = {
    roll: () => {
        return Die.roll(6);
    },
    type: 'd6',
};
export const d8 = {
    roll: () => {
        return Die.roll(8);
    },
    type: 'd8',
};
export const d10 = {
    roll: () => {
        return Die.roll(10);
    },
    type: 'd10',
};
export const d12 = {
    roll: () => {
        return Die.roll(12);
    },
    type: 'd12',
};
export const d20 = {
    roll: () => {
        return Die.roll(20);
    },
    type: 'd20',
};
