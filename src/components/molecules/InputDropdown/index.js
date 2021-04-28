// InputDropdown Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const InputDropdown = ({ propsName }) => (
  <div>
    Functional Component (Stateless Component)
  </div>

);

InputDropdown.propTypes = {
  propsName: PropTypes.string
};

InputDropdown.defaultProps = {
  propsName: ''
};

export default InputDropdown;
