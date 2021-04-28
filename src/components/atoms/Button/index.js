// Button Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = ({
  style,
  variant,
  tabIndex,
  onClick,
  disabled,
  children,
  id,
  onMouseOver,
  onFocus
}) => {
  const className = `a-button ${variant}`;
  return (
    <>
      <button
        type="button"
        className={className}
        onMouseOver={onMouseOver}
        onFocus={onFocus}
        onClick={onClick}
        tabIndex={tabIndex}
        style={style}
        disabled={disabled}
        id={id}
        va
      >
        {children}
      </button>
    </>
  );
};

Button.propTypes = {
  style: PropTypes.object,
  variant: PropTypes.string,
  tabIndex: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  id: PropTypes.string,
  onMouseOver: PropTypes.func,
  onFocus: PropTypes.func
};

Button.defaultProps = {
  style: {},
  variant: '',
  tabIndex: '0',
  disabled: false,
  children: '',
  id: '',
  onMouseOver: () => {},
  onClick: () => {},
  onFocus: () => {}
};

export default Button;
