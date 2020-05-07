export default function getNextPage(page) {
    switch (page) {
        case 'movement':
            return 'combat';
        case 'combat':
            return 'spell';
        case 'spell':
            return 'item';
        case 'item':
            return 'ability';
        case 'ability':
            return null;
    }
}
