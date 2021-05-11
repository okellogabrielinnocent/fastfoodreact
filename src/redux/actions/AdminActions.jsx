import { GET_ORDERS } from './types';
const getOrders = message => ({
    type: GET_ORDERS,
    message,
});
export default getOrders;