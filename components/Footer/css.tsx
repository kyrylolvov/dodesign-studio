import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const FooterContainer = styled('footer')<{ theme?: Theme }>(({ theme }) => ({
  width: '1140px',
  fontSize: '0.875rem',
  padding: '36px 0',
  margin: '64px auto 0 auto',
  borderTop: '1px solid #ffffff',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',

  [theme.breakpoints.down('lg')]: {
    width: '960px',
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr 1fr 1fr',
    width: '720px',

    '& > :first-child': {
      gridColumn: 2,
      gridRow: 2,
    },
  },

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gridGap: '32px',
    width: '540px',
    justifyItems: 'center',
    textAlign: 'center',

    '& > :first-child': {
      gridColumn: 1,
      gridRow: 4,
    },
  },

  [theme.breakpoints.down('xs')]: {
    width: '100vw',
  },
}));

export const FooterLogo = styled('h1')<{ theme?: Theme }>(({ theme }) => ({
  color: '#ffffff',
  fontSize: '0.875rem',
  fontWeight: 300,
  textTransform: 'uppercase',

  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    marginTop: '32px',
  },

  [theme.breakpoints.down('sm')]: {
    marginTop: 0,
  },
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
