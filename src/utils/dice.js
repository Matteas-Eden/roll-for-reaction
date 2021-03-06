/**
 * An 'unbiased' dice roll
 *
 * @param {*} sides The number of sides the dice has
 */
const unbiased = sides => Math.floor(Math.random() * sides) + 1;

//
/**
 * Create a 'biased' dice roll, either to the maximum or the minimum value.
 * If not specified, or it's not biased to either max or min, return an unbiased roll
 *
 * @param {*} to The bias we want to represent (max or min)
 */
const biased = to => {
    if (to === 'max') {
        return sides => sides;
    } else if (to === 'min') {
        return _ => 1;
    }
    return unbiased();
};

const ops = {
    '+': {
        precedence: 1,
        op: (left, right) => {
            if (Array.isArray(left)) {
                left = left.reduce((sum, value) => sum + value);
            }
            if (Array.isArray(right)) {
                right = right.reduce((sum, value) => sum + value);
            }
            return parseInt(left) + parseInt(right);
        },
    },
    '-': {
        precedence: 1,
        op: (left, right) => {
            if (Array.isArray(left)) {
                left = left.reduce((sum, value) => sum + value);
            }
            if (Array.isArray(right)) {
                right = right.reduce((sum, value) => sum + value);
            }
            return parseInt(left) - parseInt(right);
        },
    },
    '*': {
        precedence: 2,
        op: (left, right) => {
            if (Array.isArray(left)) {
                left = left.reduce((sum, value) => sum + value);
            }
            if (Array.isArray(right)) {
                right = right.reduce((sum, value) => sum + value);
            }
            return parseInt(left) * parseInt(right);
        },
    },
    '/': {
        precedence: 2,
        op: (left, right) => {
            if (Array.isArray(left)) {
                left = left.reduce((sum, value) => sum + value);
            }
            if (Array.isArray(right)) {
                right = right.reduce((sum, value) => sum + value);
            }
            return parseInt(left) / parseInt(right);
        },
    },
    l: {
        precedence: 3,
        op: (left, right) => {
            // Remove the lowest `right` number of rolls
            return left.sort().splice(right);
        },
    },
    h: {
        precedence: 3,
        op: (left, right) => {
            // Select the highest `right` number of rolls
            return left.sort((l, r) => r - l).splice(right);
        },
    },
    d: {
        precedence: 4,
        op: (left, right, criticalHit, die) => {
            const mul = parseInt(left) * (criticalHit ? 2 : 1);
            const sides = parseInt(right);
            const rolls = [];
            for (let i = 0; i < mul; i++) {
                rolls.push(die(sides));
            }
            return rolls;
        },
    },
};

/**
 * Take a peek at the last element of an array
 *
 * @param {*} arr The array to peek into
 */
const peek = arr => arr[arr.length - 1];

/**
 * Reorder an array so that the precedence of operators is taken into account
 *
 * @param {*} stack The stack to reorder
 * @param {*} token The token (operator) we're trying to insert
 * @param {*} out Where to put the resulting ordered operators
 */
const reorder = (stack, token, out) => {
    while (
        peek(stack) in ops &&
        ops[token].precedence <= ops[peek(stack)].precedence
    ) {
        out.push(stack.pop());
    }
};

/**
 * Determine if a string is a base 10 number
 *
 * @param {*} str The string to check
 */
const isNumber = str => {
    for (let i = 0; i < str.length; i++) {
        const ch = str.charAt(i);
        if (ch < '0' || ch > '9') {
            return false;
        }
    }

    return true;
};

/**
 * Lex an expression (dice notation) into it's components
 *
 * @param {*} expression The expression (given as dice notation) to lex
 */
const lex = expression => {
    const operators = [...Object.keys(ops), '(', ')'];

    return expression
        .split('')
        .reduce((output, token) => {
            if (operators.includes(token)) {
                output.push(token);
            } else if (token.trim().length > 0) {
                if (output.length > 0 && isNumber(output[output.length - 1])) {
                    // If the last thing we parsed was also a number, then this is a part of that number
                    output.push(output.pop() + token);
                } else {
                    // Start a new number
                    output.push(token);
                }
            }

            return output;
        }, [])
        .join(' ');
};

/**
 * An implementation of Djikstra's shunting yard algorithm (https://en.wikipedia.org/wiki/Shunting-yard_algorithm)
 * modified to account for the peculiarities around dice notation
 *
 * @param {*} infix The expression to convert to postfix notation for evaluating
 */
const yard = infix => {
    let stack = [];

    return infix
        .split(' ')
        .reduce((output, token) => {
            if (token in ops) {
                reorder(stack, token, output);
                stack.push(token);
            } else if (token === '(') {
                stack.push(token);
            } else if (token === ')') {
                while (peek(stack) !== '(') output.push(stack.pop());
                stack.pop();
            } else if (isNumber(token)) {
                // It's just a number, so put it to the output
                output.push(token);
            } else if (token.includes('d')) {
                // We have a dice throw
                let tokens = token.split('d');

                // This is the multiplier, so push it to the output
                output.push(tokens[0]);
                reorder(stack, 'd', output);
                stack.push('d');

                const selector = tokens[1].includes('l')
                    ? 'l' // Remove the lowest n throws
                    : tokens[1].includes('h')
                    ? 'h' // Take the highest n throws
                    : null;

                if (selector !== null) {
                    let selected = tokens[1].split(selector);
                    // Push the sides of the dice regardless
                    output.push(selected[0]);

                    reorder(stack, selector, output);
                    stack.push(selector);
                    output.push(selected[1]);
                } else {
                    // No selector, just the sides left
                    output.push(tokens[1]);
                }
            }

            return output;
        }, [])
        .concat(stack.reverse())
        .join(' ');
};

/**
 * Evaluate a dice notation given in postfix notation
 *
 * @param {*} postfix The notation to parse
 * @param {*} criticalHit Whether or not the roll was a critical hit
 * @param {*} die The dice function to use to 'roll' a dice
 */
const rpn = (postfix, criticalHit, die) => {
    const evaluated = postfix
        .split(' ')
        .reduce((stack, token) => {
            if (token in ops) {
                let right = stack.pop();
                let left = stack.pop();
                stack.push(ops[token].op(left, right, criticalHit, die));
            } else {
                stack.push(token);
            }

            return stack;
        }, [])
        .pop();

    // We can either get a value here, or an array (indicating the last item was a dice roll)
    return Array.isArray(evaluated)
        ? evaluated.reduce((sum, value) => sum + value, 0)
        : parseInt(evaluated || '0', 10); // In case of evaluated being an empty string
};

/**
 * Parse a dice's notation. Based on the notation given at https://en.wikipedia.org/wiki/Dice_notation
 *
 * @param {*} notation The notation to parse
 * @param {*} criticalHit Whether or not the dice was a critical hit
 * @param {*} dice The dice function to use (useful for determining range)
 */
const parse = (notation, criticalHit, dice) =>
    rpn(yard(lex(notation)), criticalHit, dice);

/**
 * Calculate the damage range of some given notation
 *
 * This is mostly used for testing purposes, however it previously
 * offered a damage range for weapons
 *
 * @param {*} notation The notation to determine the range for
 * @param {*} criticalHit Whether or not that roll was a critical hit
 */
export const calculateDamageRange = (notation, criticalHit) => {
    const min = parse(notation, criticalHit, biased('min'));
    const max = parse(notation, criticalHit, biased('max'));
    return [min, max];
};

/**
 * Determine the damage done given the notation and whether or not the roll is a critical hit
 *
 * @param {*} notation The dice notation we want to calculate
 * @param {*} criticalHit Whether the roll was a critical hit
 */
export const calculateDamage = (notation, criticalHit) =>
    parse(notation, criticalHit, unbiased);

/**
 * A standard 20 sided dice roll
 */
export const d20 = () => Math.floor(Math.random() * 20) + 1;
