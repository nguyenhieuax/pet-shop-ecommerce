import { fetch } from '../../../services/api'


const getListProduct = () => {
    return fetch('get', '/movies.json')
}


export default {
    getListProduct
}