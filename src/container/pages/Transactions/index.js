// Login Component
// --------------------------------------------------------

import { useEffect, useState, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Landing from 'container/templates';
import {
  H1, H2, Text, Card, Link, InputDropdown
} from 'components';
import { fetchTransactions, onFilterTransactions, onSort } from 'stores/actions/Transactions';
import { formatAmount } from 'utils/helper';
import './styles.scss';

const Transactions = () => {
  const [value, setValue] = useState('');
  const [selected, setSelected] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const { transactions, totalAmount } = useSelector(({ Transactions }) => ({
    transactions: Transactions.transactions,
    totalAmount: Transactions.totalAmount
  }), shallowEqual);

  const handleFilter = useCallback(
    (transactions, value) => dispatch(onFilterTransactions(transactions, value)),
    [dispatch]
  );

  const handleChange = (e) => {
    setValue(e.target.value);

    handleFilter(transactions, e.target.value);
  };

  const handleSort = useCallback(
    (transactions, selected) => dispatch(onSort(transactions, selected)),
    [dispatch]
  );

  const handleSelect = (e) => {
    setSelected(e.target.value);

    handleSort(transactions, e.target.value);
  };

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
        <InputDropdown onChange={handleChange} value={value} onSelected={handleSelect} selected={selected} />
        <div className="p-transactions-content">
          <>
            {
              transactions.map((element, index) => (
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
