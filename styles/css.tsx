import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const PageContainer = styled('div')(() => ({
  paddingTop: '60px',
}));

export const PageContent = styled('div')<{ theme?: Theme }>(({ theme }) => ({
  width: '1140px',
  padding: '70px 15px 0 15px',
  margin: '0 auto',

  [theme.breakpoints.down('lg')]: {
    width: '960px',
  },

  [theme.breakpoints.down('md')]: {
    width: '720px',
  },

  [theme.breakpoints.down('sm')]: {
    width: '540px',
  },

  [theme.breakpoints.down('xs')]: {
    width: '100vw',
  },
}));

export const PageTitle = styled('h1')(() => ({
  position: 'relative',
  textTransform: 'uppercase',
  fontSize: '2.5rem',
  color: '#ffffff',
  textAlign: 'center',

  '&:after': {
    position: 'absolute',
    content: '""',
    bottom: '-1rem',
    left: 'calc(50% - 15px)',
    height: '1px',
    width: '30px',
    background: '#ffffff',
  },
}));

export const PageParagraph = styled('p')(() => ({
  fontWeight: 300,
  margin: '0',
  whiteSpace: 'pre-wrap',
  lineHeight: '1.5rem',
  color: '#ffffff',
}));

export const PageContentHalf = styled('div')<{ theme?: Theme }>(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '10fr 9fr',
  gridGap: '96px',
  gap: '96px',

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr 1fr',
    gridGap: '64px',
    gap: '64px',
  },

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

export const PageExternalLink = styled('a')(() => ({
  textDecoration: 'underline',
  cursor: 'pointer',
  transition: 'all 0.4s',

  '&:hover': {
    color: '#bebebe',
  },
}));
