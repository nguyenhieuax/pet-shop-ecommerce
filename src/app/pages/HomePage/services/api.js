import { fetch } from '../../../services/api'

const getListProduct = () => {
    return fetch('get', '/test');
}

export default {
    getListProduct
}