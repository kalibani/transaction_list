// Link Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

const Links = ({
  className,
  to,
  target,
  onClick,
  tabIndex,
  children
}) => (
  <>
    <Link
      to={to}
      className={className}
      target={target}
      onClick={onClick}
      tabIndex={tabIndex}
    >
      {children}
    </Link>
  </>
);

Links.propTypes = {
  className: PropTypes.string,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  target: PropTypes.string,
  tabIndex: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Links.defaultProps = {
  className: 'a-link',
  to: '',
  target: '_self',
  tabIndex: '0',
  onClick: () => {},
  children: ''
};

export default Links;
