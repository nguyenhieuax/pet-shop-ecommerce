import { fetch } from '../../../services/api'


const getListProduct = () => {
    return fetch('get', '/getListProduct')
}

const getProductDetail = () => {
    return fetch('get', '/getProductDetail')

}


export default {
    getListProduct,
    getProductDetail
}