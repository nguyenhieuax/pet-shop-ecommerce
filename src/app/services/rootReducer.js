import { combineReducers } from 'redux-immutable'

import home from '../pages/HomePage/services/reducer';

const reducers = {
    home
}

const reducer = combineReducers(reducers)

export default (state, action) => {
    return reducer(state, action);
}