// Text Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Text = ({ children }) => (
  <div className="a-text">
    {children}
  </div>

);

Text.propTypes = {
  children: PropTypes.node
};

Text.defaultProps = {
  children: ''
};

export default Text;
