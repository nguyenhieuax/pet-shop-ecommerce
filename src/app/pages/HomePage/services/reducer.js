import Immutable from 'immutable'
import { types } from './actions'

const initialState = Immutable.fromJS({
    listProduct: []
})

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case types.GET_LIST_PRODUCT_SUCCESS: {
            return state.merge({ listProduct: payload })
        }
        default:
            return state;
    }
}

const select = state => key => state.get('home').toJS()[key];

export const selectors = {
    getListProduct: state => select(state)('listProduct'),
}
