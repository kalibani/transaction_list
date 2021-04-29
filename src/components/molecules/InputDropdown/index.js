// InputDropdown Component
// --------------------------------------------------------

import PropTypes from 'prop-types';
import './styles.scss';

const InputDropdown = ({
  id,
  type,
  name,
  value,
  placeholder,
  onChange,
  input,
  className
}) => (
  <>
    <input
      className={className}
      id={id}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      {...input}
    />

  </>
);

InputDropdown.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf([
    'text',
    'password',
    'email',
    'tel',
    'number',
    'textarea',
    'masking',
    ''
  ]),
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  inputMode: PropTypes.string,
  input: PropTypes.object
};

InputDropdown.defaultProps = {
  id: '',
  type: 'text',
  name: '',
  value: '',
  placeholder: '',
  onChange: () => {},
  className: 'm-input-dropdown',
  inputMode: 'text',
  input: {}
};

export default InputDropdown;
