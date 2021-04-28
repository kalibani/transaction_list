// H2 Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const H2 = ({ children }) => (
  <h2 className="a-h2">
    {children}
  </h2>

);

H2.propTypes = {
  children: PropTypes.string
};

H2.defaultProps = {
  children: ''
};

export default H2;
