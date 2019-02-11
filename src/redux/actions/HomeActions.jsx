import { GET_MENU } from './types';

const getMenu = menu => ({
    type: GET_MENU,
    menu,
});

export { addMenuItem, getMenu };
