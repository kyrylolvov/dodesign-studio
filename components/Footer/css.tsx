import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const FooterContainer = styled('footer')<{ theme?: Theme }>(({ theme }) => ({
  width: '70vw',
  fontSize: '0.875rem',
  paddingTop: '36px',
  margin: '64px auto 0 auto',
  borderTop: '1px solid #ffffff',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr 1fr 1fr',

    '& > :first-child': {
      order: 1,
    },
  },

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gridGap: '32px',
    justifyItems: 'center',
    textAlign: 'center',
  },
}));

export const FooterLogo = styled('h1')(() => ({
  color: '#ffffff',
  fontSize: '0.875rem',
  fontWeight: 300,
  textTransform: 'uppercase',
}));

export const FooterLinksContainer = styled('div')<{ theme?: Theme }>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  '& > :not(:first-child)': {
    marginTop: '16px',
  },

  [theme.breakpoints.down('sm')]: {
    '& > :not(:first-child)': {
      marginTop: '8px',
    },
  },
}));

export const FooterLink = styled('a')<{ active: boolean }>(({ active }) => ({
  color: active ? '#bebebe' : '#ffffff',
  textTransform: 'uppercase',
  cursor: active ? 'default' : 'pointer',
  transition: 'all 0.4s',

  '&:hover': {
    color: '#bebebe',
  },
}));

export const FooterSocialMediaContainer = styled('div')<{ theme?: Theme }>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: '#ffffff',
  transition: 'all 0.4s',

  '&:hover': {
    color: '#bebebe',
  },

  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
  },
}));

export const FooterSocialMediaIcon = styled('div')(() => ({
  marginRight: '6px',
  height: '12px',
  width: '12px',
}));

export const FooterSocialMediaLink = styled('a')(() => ({
  textTransform: 'uppercase',
  cursor: 'pointer',
}));
