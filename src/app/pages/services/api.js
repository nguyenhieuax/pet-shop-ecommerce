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

const getRelateProduct = (params) => {
    return fetch('get',`relateProduct?type=${params}` )
}

const getProductByNameAndType = ({name, type}) => {
    console.log('name and type ------', name, type)
    return fetch('get', `product/${name}?type=${type}&page=1`)
}

const confirmCheckOut = (params) => {
    return fetch('post', 'confirmCheckout', params)
}

const login =(params) => {
    console.log('login paramse-------', params)
    return fetch('post', 'login', params)
}
const updateInfo =(params) => {
    return fetch('post', 'user/editProfile', params)
}

const signUp = (params) => {
    return fetch('post','register', params)
}
const showOrderList = (params) => {
    return fetch('get',`user/showListOrder?email=${params}`)
}

const showProfile = () => {
    return fetch('get', 'user/showProfile')
}

export default {
    getListProduct,
    getTopProduct,
    getProductDetail,
    addToCart,
    showCart,
    getProductByName,
    getProductByNameAndType,
    confirmCheckOut,
    getRelateProduct,
    login,
    signUp,
    showProfile,
    updateInfo,
    showOrderList
}