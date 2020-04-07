import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { types, actions } from './actions';
import api from './api'

const getListProduct = function* ({ payload }) {
    const res = yield call(api.getListProduct);
    if (res) {
        yield put(actions.getListProductSuccess())
    } else {
        yield put(actions.getListProductFail())
    }
}

const watcher = function* () {
    yield takeLatest(types.GET_LIST_PRODUCT, getListProduct)
}

export default watcher()