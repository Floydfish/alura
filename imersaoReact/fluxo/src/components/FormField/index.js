import React from 'react';
import PropTypes from 'prop-types';

function FormField({
  label, type, value, name, onChange,
}) {
  const fieldId = `id_${name}`;

  return (
    <div>
      <label
        htmlFor={fieldId}
      >
        {label}
        {type !== 'textarea'
          && (
          <input
            id={fieldId}
            type={type}
            value={value}
            name={name}
            onChange={onChange}
          />
          )}
        {type === 'textarea'
          && (
          <textarea
            value={value}
            name={name}
            onChange={onChange}
          />
          )}
      </label>
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default FormField;
