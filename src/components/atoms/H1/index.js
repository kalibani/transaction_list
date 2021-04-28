// H1 Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const H1 = ({ children }) => (
  <h1 className="a-h1">
    {children}
  </h1>

);

H1.propTypes = {
  children: PropTypes.string
};

H1.defaultProps = {
  children: ''
};

export default H1;
