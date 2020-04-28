import { createAction } from '../../../utils/reduxHelper';

export const types = {
    GET_LIST_PRODUCT: 'GET_LIST_PRODUCT',
    GET_LIST_PRODUCT_SUCCESS: 'GET_LIST_PRODUCT_SUCCESS',
    GET_LIST_PRODUCT_FAIL: 'GET_LIST_PRODUCT_FAIL',

    GET_PRODUCT_DETAIL: 'GET_PRODUCT_DETAIL',
    GET_PRODUCT_DETAIL_SUCCESS: 'GET_PRODUCT_DETAIL_SUCCESS',
    GET_PRODUCT_DETAIL_FAIL: 'GET_PRODUCT_DETAIL_FAIL',
}

export const actions = {
    getListProduct: createAction(types.GET_LIST_PRODUCT),
    getListProductSuccess: createAction(types.GET_LIST_PRODUCT_SUCCESS),
    getListProductFail: createAction(types.GET_LIST_PRODUCT_FAIL),

    getProductDetail: createAction(types.GET_PRODUCT_DETAIL),
    getProductDetailSuccess: createAction(types.GET_PRODUCT_DETAIL_SUCCESS),
    getProductDetailFail: createAction(types.GET_PRODUCT_DETAIL_FAIL),


}