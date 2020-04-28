import { all } from 'redux-saga/effects'

import home from '../pages/HomePage/services/sagas';
import productDetail from '../pages/ProductDetail/services/sagas'
export default function* rootSaga() {
    yield all([
        home,
        productDetail
    ])
}