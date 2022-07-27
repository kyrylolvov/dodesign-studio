import styled from '@emotion/styled';

export const NavbarContainer = styled('header')<{scrollPosition: number}>(({ scrollPosition }) => ({
  position: 'fixed',
  top: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 60px',
  background: scrollPosition > 60 ? '#181818' : 'transparent',
  height: scrollPosition > 60 ? '60px' : '80px',
  transition: 'all 0.4s',
}));

export const NavbarLogo = styled('h1')(() => ({
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: '300',
  lineHeight: '24px',
  textTransform: 'uppercase',
}));

export const NavbarLinksContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',

  '& a:not(first-child)': {
    marginLeft: '32px',
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
