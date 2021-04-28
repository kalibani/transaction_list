// Landing Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Landing = ({ propsName }) => (
  <div>
    Functional Component (Stateless Component)
  </div>

);

Landing.propTypes = {
  propsName: PropTypes.string
};

Landing.defaultProps = {
  propsName: ''
};

export default Landing;
