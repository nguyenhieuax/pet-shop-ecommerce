import { combineReducers } from 'redux-immutable'

import _reducer from '../pages/services/reducer';
const reducers = {
   _reducer
}

const reducer = combineReducers(reducers)

export default (state, action) => {
    return reducer(state, action);
}