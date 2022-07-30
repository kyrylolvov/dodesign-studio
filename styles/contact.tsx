import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const FormContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const FormTitle = styled('p')(() => ({
  fontSize: '1.25rem',
  margin: '0',
  color: '#ffffff',
}));

export const FormSubTitle = styled('p')(() => ({
  fontSize: '0.75rem',
  margin: '0.5rem 0 0 0',
  color: '#ffffff',
}));

export const FormButtonContainer = styled('div')<{ theme?: Theme }>(({ theme }) => ({
  display: 'flex',

  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
  },
}));
