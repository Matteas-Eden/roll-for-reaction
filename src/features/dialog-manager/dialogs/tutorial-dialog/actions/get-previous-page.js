export default function getPreviousPage(page) {
    switch (page) {
        case 'movement':
            return null;
        case 'combat':
            return 'movement';
        case 'spell':
            return 'combat';
        case 'item':
            return 'spell';
        case 'shop':
            return 'item';
        case 'ability':
            return 'shop';
        case 'dice':
            return 'ability';
        case 'hotkey':
            return 'dice';
        default:
            return null;
    }
}
