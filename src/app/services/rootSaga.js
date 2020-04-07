import { all } from 'redux-saga/effects'

import home from '../pages/HomePage/services/sagas';

export default function* rootSaga() {
    yield all([
        home,
    ])
}