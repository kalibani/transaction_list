import React from 'react';
import Loadable from 'react-loadable';

import { Loader } from 'components';

const LoadingBackground = () => <Loader />;

const Transactions = Loadable({
  loader: () => import('./Transactions'),
  loading: LoadingBackground
});

const TransactionDetail = Loadable({
  loader: () => import('./TransactionDetail'),
  loading: LoadingBackground
});

export {
  Transactions,
  TransactionDetail
};
