// Text Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Text = ({ propsName }) => (
  <div>
    Functional Component (Stateless Component)
  </div>

);

Text.propTypes = {
  propsName: PropTypes.string
};

Text.defaultProps = {
  propsName: ''
};

export default Text;
