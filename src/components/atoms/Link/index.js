// Link Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { handlePreload } from 'utils/helper';
import AppRoutes from 'container/config';
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
      // trigger preload function
      onMouseOver={() => handlePreload(to, AppRoutes)}
      onFocus={() => handlePreload(to, AppRoutes)}
      tabIndex={tabIndex}
    >
      {children}
    </Link>
  </>
);

Links.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
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
