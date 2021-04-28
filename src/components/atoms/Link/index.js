// Link Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Link = ({ propsName }) => (
  <div>
    Functional Component (Stateless Component)
  </div>

);

Link.propTypes = {
  propsName: PropTypes.string
};

Link.defaultProps = {
  propsName: ''
};

export default Link;
