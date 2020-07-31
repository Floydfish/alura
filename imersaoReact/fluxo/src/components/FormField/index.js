import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 9.375rem;
  }

  input[type="color"] {
    padding-left: 3.5rem;
  }
`;

const Label = styled.label``
Label.Text = styled.span`
  color: #E5E5E5;
  height: 3.5625rem;
  position: absolute;
  top: 0;
  left: 1rem;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 300;

  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 3.5625rem;
  font-size: 1.125rem;

  outline: 0;
  border: 0;
  borter-top: 0.25rem solid transparent;
  border-bottom: 0.25rem solid #53585D;
  padding: 1rem 1rem;
  margin-bottom: 2.8125rem;

  resize: none;
  border-radius: 0.25rem;
  transition: border-color .3s;

  &:focus {
    border-bottom-color: var(--primary);
  }

  &:focus:not([type="color"]) + span {
    transform: scale(.6) translateY(-0.7rem);
  }

  ${function({ hasValue }) {
    return hasValue && css`
      &:not([type="color"]) + span {
      transform: scale(.6) translateY(-0.7rem);
      }
    `;
  }}
`;

function FormField({
  label, type, value, name, onChange,
}) {
  const fieldId = `id_${name}`;
  const tag = type === 'textarea' ? 'textarea' : 'input';

  const hasValue = Boolean(value.length);

  return (
    <FormFieldWrapper>
      <Label
        htmlFor={fieldId}
      >
        <Input
          as={tag}
          id={fieldId}
          type={type}
          value={value}
          name={name}
          hasValue={hasValue}
          onChange={onChange}
        />
        <Label.Text>
          {label}
        </Label.Text>
      </Label>
    </FormFieldWrapper>
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
