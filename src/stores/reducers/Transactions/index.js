// Transactions Reducers
// --------------------------------------------------------

import {
  SET_LOADING,
  CLEAR_ERROR,
  SET_ERROR,
  SET_DATA,
  SET_AMOUNT,
  SET_DATA_MASTER
} from 'stores/actions/Transactions';

const initialState = {
  isLoading: false,
  error: {},
  transactions: [],
  dataMaster: [],
  totalAmount: 0
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
    case SET_DATA_MASTER:
      return {
        ...state,
        dataMaster: payload
      };
    case SET_DATA:
      return {
        ...state,
        transactions: [...payload]
      };
    case SET_AMOUNT:
      return {
        ...state,
        totalAmount: payload
      };
    default:
      return state;
  }
};
