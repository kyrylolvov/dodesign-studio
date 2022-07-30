/* eslint-disable no-unused-vars */
import React from 'react';
import styled from '@emotion/styled';
import InputMask from 'react-input-mask';
import { Theme } from '@mui/material';

interface InputProps {
  label: string;
  placeholder: string;
  name: string;
  touched: boolean | undefined;
  error: string | undefined;
  value: string | number;
  type?: string | undefined;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
}

const InputWrapper = styled('div')(() => ({
  marginTop: '32px',
}));

const InputLabel = styled('div')(() => ({
  color: '#ffffff',
}));

const InputField = styled('input')<{ error: boolean, theme?: Theme }>(({ error, theme }) => ({
  height: '40px',
  width: '350px',
  lineHeight: '40px',
  color: '#ffffff',
  background: '#181818',
  border: 'none',
  fontWeight: 300,
  fontSize: '16px',
  borderBottom: error ? '1px solid #f00' : '1px solid #fff',
  overflow: 'visible',
  outline: 'none',

  '&::placeholder': {
    color: '#51545A',
    fontWeight: 400,
  },

  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

const TextareaField = styled('textarea')<{ error: boolean, theme?: Theme }>(({ error, theme }) => ({
  width: '350px',
  color: '#ffffff',
  background: '#181818',
  border: 'none',
  fontWeight: 300,
  fontSize: '16px',
  borderBottom: error ? '1px solid #f00' : '1px solid #fff',
  overflow: 'auto',
  fontFamily: 'Avenir Next Cyr, sans-serif',
  marginTop: '6px',
  outline: 'none',
  resize: 'none',

  '&::placeholder': {
    color: '#51545A',
    fontWeight: 400,
  },

  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

const InputError = styled('label')(() => ({
  display: 'block',
  fontSize: '0.75rem',
  marginTop: '0.5rem',
  color: '#f00',
}));

const Input: React.FC<InputProps> = ({
  label, placeholder, name, value, touched, error, type, handleChange,
}) => (
  <InputWrapper>
    <InputLabel>{label}</InputLabel>
    {type === 'textarea' && (
      <TextareaField
        error={!!touched && !!error}
        onChange={handleChange}
        name={name}
        value={value}
        rows={2}
        placeholder={placeholder}
      />
    )}
    {type === 'text' && (
      <InputField
        error={!!touched && !!error}
        onChange={handleChange}
        name={name}
        value={value}
        placeholder={placeholder}
      />
    )}
    {type === 'number' && (
      <InputMask value={value} onChange={handleChange} mask="+1 \(999) 999 9999">
        <InputField
          error={!!touched && !!error}
          onChange={handleChange}
          name={name}
          value={value}
          placeholder={placeholder}
        />
      </InputMask>
    )}
    {/* {type === 'text' && (
          <InputField
            error={!!touched && !!error}
            onChange={handleChange}
            name={name}
            value={value}
            placeholder={placeholder}
          />,
      )} */}
    {touched && error && <InputError>{error}</InputError>}
  </InputWrapper>
);

export default Input;
