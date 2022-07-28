import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const NavbarContainer = styled('header')<{ scrollPosition: number; theme?: Theme }>(
  ({ scrollPosition, theme }) => ({
    position: 'fixed',
    fontSize: '0.875rem',
    zIndex: 1,
    top: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 36px',
    background: scrollPosition > 60 ? '#181818' : 'transparent',
    height: scrollPosition > 60 ? '60px' : '80px',
    transition: 'all 0.4s',

    [theme.breakpoints.down('sm')]: {
      padding: '0 24px',
    },
  }),
);

export const NavbarLogo = styled('h1')(() => ({
  color: '#ffffff',
  fontSize: '24px',
  lineHeight: '24px',
  fontWeight: 300,
  textTransform: 'uppercase',
}));

export const NavbarLinksContainer = styled('div')<{ theme?: Theme }>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',

  '& a:not(first-child)': {
    marginLeft: '32px',
  },

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const NavbarLink = styled('a')<{ active: boolean }>(({ active }) => ({
  color: active ? '#bebebe' : '#ffffff',
  textTransform: 'uppercase',
  cursor: active ? 'default' : 'pointer',
  transition: 'all 0.4s',

  '&:hover': {
    color: '#bebebe',
  },
}));
