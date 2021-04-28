// H1 Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const H1 = ({ propsName }) => (
  <div>
    Functional Component (Stateless Component)
  </div>

);

H1.propTypes = {
  propsName: PropTypes.string
};

H1.defaultProps = {
  propsName: ''
};

export default H1;
