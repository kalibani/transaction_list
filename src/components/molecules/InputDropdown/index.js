// InputDropdown Component
// --------------------------------------------------------
import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import handleClickOutside from 'customHooks';

const listOptions = [
  {
    name: 'Urutkan',
    value: '0'
  },
  {
    name: 'Nama A-Z',
    value: '1'
  },
  {
    name: 'Nama Z-A',
    value: '2'
  },
  {
    name: 'Tanggal terbaru',
    value: '3'
  },
  {
    name: 'Tanggal terlama',
    value: '4'
  }
];

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
}) => {
  const refComponentDropdown = useRef(null);
  const [isShowDrop, setIsShowDrop] = useState(false);
  const handleClickDropDown = () => {
    setIsShowDrop(!isShowDrop);
  };
  const handleClickOption = (prop) => {
    onSelected(prop);
    setIsShowDrop(false);
  };
  handleClickOutside(refComponentDropdown, () => {
    setIsShowDrop(false);
  }, isShowDrop);

  return (
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
      <div className="select-dropdown" ref={refComponentDropdown}>
        <div role="presentation" onClick={handleClickDropDown}>
          <p>{listOptions[selected || 0].name }</p>
        </div>
        {
          isShowDrop && (
            <ul>
              {
                listOptions.map((el) => <li role="presentation" onClick={() => handleClickOption(el.value)} key={el.name}>{el.name}</li>)
              }
            </ul>
          )
        }
      </div>
    </div>
  );
};

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
