// Login Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import Landing from 'container/templates';
import {
  H1, H2, Text, Card
} from 'components';
import './styles.scss';

const Transactions = ({ propsName }) => (
  <Landing>
    <div className="p-transactions">
      <div className="p-transactions-header">
        <H1>Daftar Transaksi</H1>
      </div>
      <div className="p-transactions-greetings">
        <H2>Halo Kak!</H2>
        <Text>Kamu telah melakukan transaksi sebesar Rp5.000.000 sejak menggunakan Flip.</Text>
      </div>
      <div className="p-transactions-content">
        <Card />
      </div>

    </div>
  </Landing>

);

Transactions.propTypes = {
  propsName: PropTypes.string
};

Transactions.defaultProps = {
  propsName: ''
};

export default Transactions;
