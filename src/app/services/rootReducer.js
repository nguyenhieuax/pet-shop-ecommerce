import { combineReducers } from 'redux-immutable'

import home from '../pages/HomePage/services/reducer';
import productDetail from '../pages/ProductDetail/services/reducer'
const reducers = {
    home,
    productDetail
}

const reducer = combineReducers(reducers)

export default (state, action) => {
    return reducer(state, action);
}