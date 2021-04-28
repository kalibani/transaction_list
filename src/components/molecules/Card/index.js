// Card Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Card = ({ propsName }) => (
  <div>
    Functional Component (Stateless Component)
  </div>

);

Card.propTypes = {
  propsName: PropTypes.string
};

Card.defaultProps = {
  propsName: ''
};

export default Card;
