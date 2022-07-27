import styled from '@emotion/styled';
import Link from 'next/link';

export const NavbarContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 60px',
  backgroundColor: '#181818',
  height: '60px',
}));

export const NavbarLogo = styled('div')(() => ({
  color: '#ffffff',
  fontSize: '24px',
  lineHeight: '24px',
  textTransform: 'uppercase',
}));

export const NavbarLinksContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

export const NavbarLink = styled(Link)(() => ({
  color: '#ffffff',
}));
