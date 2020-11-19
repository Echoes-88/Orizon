// == Import React
import React from 'react';
import PropTypes from 'prop-types';
// import capitalize from '../../../utils/capitalizeFirstLetter';
// import typeChecker from '../../../utils/typeChecker';

const Field = ({ type, name, placeholder, value, onChange }) => {

  const handleOnChange = (event) => {
    // values modifications made by user inside form
    onChange(event.target.value);
  };

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
      className="inputstyle__textArea"
    />
  );
};

Field.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Field.defaultProps = {
  type: 'text',
};

export default Field;
