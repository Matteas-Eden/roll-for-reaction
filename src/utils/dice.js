const roll = sides => {
    return Math.floor(Math.random() * sides) + 1;
};

const ops = {
    '+': {
        precedence: 1,
        op: (left, right) => {
            return parseInt(left) + parseInt(right);
        },
    },
    '-': {
        precedence: 1,
        op: (left, right) => {
            return parseInt(left) - parseInt(right);
        },
    },
    '*': {
        precedence: 2,
        op: (left, right) => {
            return parseInt(left) * parseInt(right);
        },
    },
    '/': {
        precedence: 2,
        op: (left, right) => {
            return parseInt(left) / parseInt(right);
        },
    },
    d: {
        precedence: 3,
        op: (left, right) => {
            let mul = parseInt(left);
            let sides = parseInt(right);
            let dice = 0;
            for (let i = 0; i < mul; i++) {
                dice += roll(sides);
            }
            return dice;
        },
    },
};

let yard = infix => {
    let peek = a => a[a.length - 1];
    let stack = [];

    return infix
        .split('')
        .reduce((output, token) => {
            if (token in ops) {
                while (
                    peek(stack) in ops &&
                    ops[token].precedence <= ops[peek(stack)].precedence
                )
                    output.push(stack.pop());
                stack.push(token);
            } else if (parseInt(token)) {
                output.push(token);
            } else if (token === '(') {
                stack.push(token);
            } else if (token === ')') {
                while (peek(stack) !== '(') output.push(stack.pop());
                stack.pop();
            }

            return output;
        }, [])
        .concat(stack.reverse())
        .join(' ');
};

const rpn = postfix => {
    let stack = [];

    postfix.split(' ').forEach(token => {
        if (token in ops) {
            let right = stack.pop();
            let left = stack.pop();
            stack.push(ops[token].op(left, right));
        } else {
            stack.push(token);
        }
    });

    return stack[0];
};

// calculates damage to deal based on attacker's damage and enemy's defence
export default function calculateDamage(notation) {
    let damage = rpn(yard(notation));
    return damage;
}
