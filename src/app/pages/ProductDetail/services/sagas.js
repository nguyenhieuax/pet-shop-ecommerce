import { call, put, takeLatest, all } from "redux-saga/effects";
import { types, actions } from "./actions";
import api from "./api";

const getListProduct = function* ({ payload }) {
  console.log("aaaa");
  const res = yield call(api.getListProduct);
  console.log(res);
  if (res) {
    yield put(actions.getListProductSuccess(res));
  } else {
    yield put(actions.getListProductFail());
  }
};

const getProductDetail = function* ({ payload, onSuccess, onError }) {
  const res = yield call(api.getProductDetail);
  if (res) {
    yield put(actions.getProductDetailSuccess(res));
  } else {
    yield put(actions.getProductDetailFail());
  }
};
const watcher = function* () {
  yield all([
    takeLatest(types.GET_LIST_PRODUCT, getListProduct),
    takeLatest(types.GET_PRODUCT_DETAIL, getProductDetail),
  ]);
};

export default watcher();
