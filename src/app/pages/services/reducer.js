import Immutable from 'immutable';
import api from './api';
import { createLoadingSelector, createErrorSelector } from '../../utils/reduxHelper';
import { types } from './actions'


const initialState = Immutable.fromJS({
});

export default (state = initialState, { type, payload }) => {
    console.log('data ===', payload, type)
    const len = type.length;
      if (type.startsWith('@@FETCH_SUCCESS/') && type.substring(len - 7, len) === 'Success') {
        const name = type.substring(16, len - 7)
        console.log('name action===', name);
        const newState = state.merge({ [name]: payload });
        return newState;
      }

      console.log('state ========',state)

  return state;
};

const select = state => key => state.get('_reducer').toJS()[key];
const SELECTORS = {
  getError: (state, actionName: String) =>
    createErrorSelector(state)('internationalTransfer', actionName),
  getLoading: (state, actionName: String) =>
    createLoadingSelector(state)('internationalTransfer', actionName)
};
for (let name in api) {
  SELECTORS[name] = state => select(state)(name);
}

export const selectors = SELECTORS;

// import Immutable from 'immutable'
// import { types } from './actions'

// const initialState = Immutable.fromJS({
//     listProduct: [],
//     listTopProduct: []
// })

// export default (state = initialState, { type, payload }) => {
//     switch (type) {
//         case types.GET_LIST_PRODUCT_SUCCESS: {
//             console.log('payload data ========',payload)
//             return state.merge({ listProduct: payload })
//         }
//         case types.GET_TOP_PRODUCT_SUCCESS: {
//             console.log('payload data ========',payload)
//             return state.merge({ listTopProduct: payload })
//         }
//         default:
//             return state;
//     }
// }

// const select = state => key => state.get('_reducer').toJS()[key];

// export const selectors = {
//     getListProduct: state => select(state)('listProduct'),
//     getTopProduct: state => select(state)('listTopProduct'),

// }
