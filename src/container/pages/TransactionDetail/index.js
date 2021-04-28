// TransactionDetail Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const TransactionDetail = ({ propsName }) => (
  <div>
    Functional Component (Stateless Component)
  </div>

);

TransactionDetail.propTypes = {
  propsName: PropTypes.string
};

TransactionDetail.defaultProps = {
  propsName: ''
};

export default TransactionDetail;
