// import { createAction } from '../../utils/reduxHelper';

// export const types = {
//     GET_LIST_PRODUCT: 'GET_LIST_PRODUCT',
//     GET_LIST_PRODUCT_SUCCESS: 'GET_LIST_PRODUCT_SUCCESS',
//     GET_LIST_PRODUCT_FAIL: 'GET_LIST_PRODUCT_FAIL',

//     GET_LIST_PRODUCT: 'GET_LIST_PRODUCT',
//     GET_LIST_PRODUCT_SUCCESS: 'GET_LIST_PRODUCT_SUCCESS',
//     GET_LIST_PRODUCT_FAIL: 'GET_LIST_PRODUCT_FAIL',
// }

// export const actions = {
//     getListProduct: createAction(types.GET_LIST_PRODUCT),
//     getListProductSuccess: createAction(types.GET_LIST_PRODUCT_SUCCESS),
//     getListProductFail: createAction(types.GET_LIST_PRODUCT_FAIL),

//     getTopProduct: createAction(types.GET_TOP_PRODUCT),
//     getListProductSuccess: createAction(types.GET_TOP_PRODUCT_SUCCESS),
//     getListProductFail: createAction(types.GET_TOP_FAIL),
// }


import { createAction, mapType, status } from '../../utils/reduxHelper';
import api from "./api";

const _TYPES = {};
const _ACTIONS = {};

for (let name in api) {

  _TYPES[`${name}`] = mapType(`${name}`, status.start);
  _TYPES[`${name}Success`] = mapType(`${name}Success`, status.success);
  _TYPES[`${name}Fail`] = mapType(`${name}Fail`, status.failure);

  _ACTIONS[`${name}`] = createAction(_TYPES[`${name}`]);
  _ACTIONS[`${name}Success`] = createAction(_TYPES[`${name}Success`]);
  _ACTIONS[`${name}Fail`] = createAction(_TYPES[`${name}Fail`]);

}

export const types = _TYPES;

export const actions = _ACTIONS;
