// Button Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = ({ propsName }) => (
  <div>
    Functional Component (Stateless Component)
  </div>

);

Button.propTypes = {
  propsName: PropTypes.string
};

Button.defaultProps = {
  propsName: ''
};

export default Button;
