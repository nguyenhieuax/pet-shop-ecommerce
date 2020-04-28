import Immutable from 'immutable'
import { types } from './actions'

const initialState = Immutable.fromJS({
    listProduct: [],
    productDetail:[]
})

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case types.GET_LIST_PRODUCT_SUCCESS: {
            console.log(payload)
            return state.merge({ listProduct: payload })
        }
        case types.GET_PRODUCT_DETAIL_SUCCESS: {
            console.log('getProduct success',payload)
            return state.merge({ productDetail: payload })
        }
        default:
            return state;
    }
}

const select = state => key => state.get('productDetail').toJS()[key];

export const selectors = {
    getListProduct: state => select(state)('listProduct'),
    getProductDetail: state => select(state)('productDetail')
}
