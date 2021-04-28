// transactions Actions
// --------------------------------------------------------

import getTransactions from 'API';

export const SET_LOADING = 'transactions/SET_LOADING';
export const CLEAR_ERROR = 'transactions/CLEAR_ERROR';
export const SET_ERROR = 'transactions/SET_ERROR';
export const SET_DATA = 'transactions/SET_DATA';

export const getData = () => (dispatch) => {
  try {
    dispatch({ type: SET_LOADING, payload: true });
    const { data } = getTransactions();
    dispatch({ type: SET_DATA, data });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.response.data.message });
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};
