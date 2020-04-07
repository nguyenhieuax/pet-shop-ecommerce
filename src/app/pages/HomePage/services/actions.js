import { createAction, mapType, status } from '../../../utils/reduxHelper';

export const types = {
    GET_LIST_PRODUCT: mapType('GET_LIST_PRODUCT', status.start),
    GET_LIST_PRODUCT_SUCCESS: mapType('GET_LIST_PRODUCT_SUCCESS', status.success),
    GET_LIST_PRODUCT_FAIL: mapType('GET_LIST_PRODUCT_FAIL', status.failure)
}

export const actions = {
    getListProduct: createAction(types.GET_LIST_PRODUCT),
    getListProductSuccess: createAction(types.GET_LIST_PRODUCT_SUCCESS),
    getListProductFail: createAction(types.GET_LIST_PRODUCT_FAIL)
}