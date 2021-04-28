// login Reducers
// --------------------------------------------------------

import {
  SET_LOADING,
  CLEAR_ERROR,
  SET_ERROR,
  SET_DATA
} from 'stores/actions/Transactions';

const initialState = {
  isLoading: false,
  error: {},
  transactions: []
};

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: {}
      };
    case SET_DATA:
      return {
        ...state,
        transactions: payload
      };
    default:
      return state;
  }
};
