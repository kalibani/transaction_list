// Login Component
// --------------------------------------------------------

import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Landing from 'container/templates';
import {
  H1, H2, Text, Card, Link
} from 'components';
import { fetchTransactions } from 'stores/actions/Transactions';
import { formatAmount } from 'utils/helper';
import './styles.scss';

const Transactions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  // Safe to add dispatch to the dependencies array
  }, [dispatch]);

  const { transactions, totalAmount } = useSelector(({ Transactions }) => ({
    transactions: Transactions.transactions,
    totalAmount: Transactions.totalAmount
  }), shallowEqual);

  return (
    <Landing>
      <div className="p-transactions">
        <div className="p-transactions-header">
          <H1>Daftar Transaksi</H1>
        </div>
        <div className="p-transactions-greetings">
          <H2>Halo Kak!</H2>
          <Text>Kamu telah melakukan transaksi sebesar <span className="p-transactions-amount">{formatAmount(totalAmount)}</span> sejak menggunakan Flip.</Text>
        </div>
        <div className="p-transactions-content">
          <>
            {
              transactions && transactions.map((element, index) => (
                <Link
                  to={`${element.id}`}
                  key={index}
                >
                  <Card data={element} />
                </Link>
              ))
            }
          </>
        </div>

      </div>
    </Landing>

  );
};

export default Transactions;
