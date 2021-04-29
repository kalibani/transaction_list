// transactions Actions
// --------------------------------------------------------

import getTransactions from 'API';

export const SET_LOADING = 'transactions/SET_LOADING';
export const CLEAR_ERROR = 'transactions/CLEAR_ERROR';
export const SET_ERROR = 'transactions/SET_ERROR';
export const SET_DATA = 'transactions/SET_DATA';
export const SET_AMOUNT = 'transactions/SET_AMOUNT';

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
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error });
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};
