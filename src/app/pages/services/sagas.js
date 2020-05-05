import { call, put, takeLatest } from 'redux-saga/effects';
import { types, actions } from './actions';
import api from './api'

const getListProduct = function* ({ payload }) {
    console.log('aaaa')
    const res = yield call(api.getListProduct);
    console.log(res)
    if (res) {
        yield put(actions.getListProductSuccess(res))
    } else {
        yield put(actions.getListProductFail())
    }
}

const watcher = function* () {
    yield takeLatest(types.GET_LIST_PRODUCT, getListProduct)
}

export default watcher()