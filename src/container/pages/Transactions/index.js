// Login Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Login = ({ propsName }) => (
  <div>
    Functional Component (Stateless Component)
  </div>

);

Login.propTypes = {
  propsName: PropTypes.string
};

Login.defaultProps = {
  propsName: ''
};

export default Login;
