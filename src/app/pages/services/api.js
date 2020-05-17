import { fetch } from '../../services/api'


const getListProduct = () => {
    return fetch('GET', '')
}

const getTopProduct = () => {
    return fetch('get', '/topProduct')
}


export default {
    getListProduct,
    getTopProduct
}