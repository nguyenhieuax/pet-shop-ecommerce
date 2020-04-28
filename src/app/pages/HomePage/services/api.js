import { fetch } from '../../../services/api'


const getListProduct = () => {
    return fetch('get', '/getListProduct')
}


export default {
    getListProduct
}