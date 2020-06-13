// import { call, put, takeLatest } from 'redux-saga/effects';
// import { types, actions } from './actions';
// import api from './api'

// const getListProduct = function* ({ payload }) {
//     console.log('aaaa')
//     const res = yield call(api.getListProduct);
//     console.log(res)
//     if (res) {
//         yield put(actions.getListProductSuccess(res))
//     } else {
//         yield put(actions.getListProductFail())
//     }
// }

// const getTopProduct = function* ({ payload }) {
//     console.log('aaaa')
//     const res = yield call(api.getTopProduct);
//     console.log(res)
//     if (res) {
//         yield put(actions.getTopProductSuccess(res))
//     } else {
//         yield put(actions.getTopProductFail(res))
//     }
// }



// const watcher = function* () {
//     yield takeLatest(types.GET_LIST_PRODUCT, getListProduct)
//     yield takeLatest(types.GET_TOP_PRODUCT, getTopProduct)

// }

// export default watcher()

import { call, put, takeLatest } from 'redux-saga/effects';
import api from './api';
import { types, actions } from './actions';

const watcher = function* () {

    for (let name in api) {
        yield takeLatest(types[name], function* ({ payload, onSuccess, onError }) {
            const res = yield call(api[name], payload || {});
            console.log('res =======saga --------', res)
            if (res) {
                yield put(actions[`${name}Success`](res));
                onSuccess(res);
                console.log('success saga')
            } else {
                yield put(actions[`${name}Fail`]());
                    onError(res);
            }
        });
    }
};

export default watcher();
