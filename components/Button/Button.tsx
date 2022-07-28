import React from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
  text: string;
  style?: React.CSSProperties | undefined;
}

export const BrandButton = styled('button')(() => ({
  color: '#ffffff',
  border: '1px solid #ffffff',
  textTransform: 'uppercase',
  background: 'transparent',
  width: '220px',
  height: '50px',
  transition: 'all 0.4s',
  cursor: 'pointer',
  fontSize: '0.75rem',

  '&:hover': {
    background: '#ffffff',
    color: '#181818',
  },
}));

const Button: React.FC<ButtonProps> = ({
  text,
  style,
}) => <BrandButton style={style}>{text}</BrandButton>;

export default Button;
