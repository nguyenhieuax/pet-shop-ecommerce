import { fetch } from '../../services/api'


const getListProduct = () => {
    return fetch('GET', '')
}

const getTopProduct = () => {
    return fetch('get', 'topProduct')
}

const getProductDetail = (params) => {
    return fetch('get', `productDetail?id=${params}`)
}

const addToCart = (params) => {
    console.log('paramse add to cart ========', params)
    return fetch('post', `cart/add?product=${params}`)
}

const showCart = () => {
    return fetch('get','cart/showCart')
}

const getProductByName = (params) => {
    return fetch('get',`product?category=${params}` )
}

const getProductByNameAndType = ({name, type}) => {
    console.log('name and type ------', name, type)
    return fetch('get', `product/${name}?type=${type}&page=1`)
}

export default {
    getListProduct,
    getTopProduct,
    getProductDetail,
    addToCart,
    showCart,
    getProductByName,
    getProductByNameAndType
}