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
  selected,
  onSelected
}) => (
  <div className="m-input-dropdown">
    <input
      className="m-input"
      id={id}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      {...input}
    />
    <div className="select-dropdown">
      <select name="slct" id="slct" onChange={onSelected} value={selected}>
        <option value="0">Urutkan</option>
        <option value="1">Nama A-Z</option>
        <option value="2">Nama Z-A</option>
        <option value="3">Tanggal terbaru</option>
        <option value="4">Tanggal terlama</option>
      </select>
    </div>

  </div>
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
  selected: PropTypes.string,
  inputMode: PropTypes.string,
  input: PropTypes.object,
  onSelected: PropTypes.func
};

InputDropdown.defaultProps = {
  id: '',
  type: 'text',
  name: '',
  value: '',
  placeholder: '',
  onChange: () => {},
  onSelected: () => {},
  selected: '',
  inputMode: 'text',
  input: {}
};

export default InputDropdown;
