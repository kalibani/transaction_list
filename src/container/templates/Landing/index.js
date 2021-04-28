// Landing Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Landing = ({ children }) => (
  <div className="t-landing">
    <div className="t-landing-container">
      {children}
    </div>
  </div>
);

Landing.propTypes = {
  children: PropTypes.node
};

Landing.defaultProps = {
  children: ''
};

export default Landing;
