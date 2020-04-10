import { createStore, applyMiddleware } from 'redux';
import createMiddleWare from 'redux-saga';
import rootReducer from './services/rootReducer';
import rootSaga from './services/rootSaga';

const sagaMiddleware = createMiddleWare();

const middlewares = [sagaMiddleware];

const enhancers = applyMiddleware(...middlewares)


const store = createStore(rootReducer, enhancers);

sagaMiddleware.run(rootSaga);

export default store;
