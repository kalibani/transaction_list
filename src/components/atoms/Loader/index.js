// Loader Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Loader = ({ propsName }) => (
  <div>
    Functional Component (Stateless Component)
  </div>

);

Loader.propTypes = {
  propsName: PropTypes.string
};

Loader.defaultProps = {
  propsName: ''
};

export default Loader;
