// transactions Actions
// --------------------------------------------------------

import getTransactions from 'API';
import { sortAsc, sortDesc } from 'utils/helper';

export const SET_LOADING = 'transactions/SET_LOADING';
export const CLEAR_ERROR = 'transactions/CLEAR_ERROR';
export const SET_ERROR = 'transactions/SET_ERROR';
export const SET_DATA = 'transactions/SET_DATA';
export const SET_AMOUNT = 'transactions/SET_AMOUNT';
export const SET_DATA_MASTER = 'transactions/SET_DATA_MASTER';

export const fetchTransactions = () => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING, payload: true });
    const response = await getTransactions();
    if (!response) {
      throw new Error(`HTTP status ${response}`);
    }
    const body = await response.json();
    const data = [];
    let totalAmount = 0;
    Object.values(body).map((el) => {
      totalAmount += Number(el.amount);
      data.push(el);
      return data;
    });
    dispatch({ type: SET_AMOUNT, payload: totalAmount });
    dispatch({ type: SET_DATA, payload: data });
    dispatch({ type: SET_DATA_MASTER, payload: data });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error });
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const onFilterTransactions = (transactions, query) => async (dispatch, getState) => {
  if (!query) {
    const data = getState().Transactions.dataMaster;
    dispatch({ type: SET_DATA, payload: data });
  } else {
    const filteredTransactions = transactions.filter((item) => query.toLowerCase().split(' ').every((v) => item.beneficiary_name.toLowerCase().includes(v) || item.sender_bank.toLowerCase().includes(v) || item.beneficiary_bank.toLowerCase().includes(v)));
    dispatch({ type: SET_DATA, payload: filteredTransactions });
  }
};

export const onSort = (transactions, type) => async (dispatch, getState) => {
  let sorted = '';
  switch (type) {
    case '0':
      sorted = getState().Transactions.dataMaster;
      dispatch({ type: SET_DATA, payload: sorted });
      break;
    case '1':
      sorted = sortAsc(transactions, 'beneficiary_name');
      dispatch({ type: SET_DATA, payload: sorted });
      break;
    case '2':
      sorted = sortDesc(transactions, 'beneficiary_name');
      dispatch({ type: SET_DATA, payload: sorted });
      break;
    case '3':
      sorted = sortAsc(transactions, 'created_at');
      dispatch({ type: SET_DATA, payload: sorted });
      break;
    case '4':
      sorted = sortDesc(transactions, 'created_at');
      dispatch({ type: SET_DATA, payload: sorted });
      break;
    default:
      break;
  }
};
