import styled from '@emotion/styled';

export const PageContainer = styled('div')(() => ({
  paddingTop: '60px',
}));

export const PageContent = styled('div')(() => ({
  width: '80vw',
  paddingTop: '70px',
  margin: '0 auto',
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

export const PageContentHalf = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: '10fr 9fr',
  gridGap: '96px',
  gap: '96px',
}));

export const PageExternalLink = styled('a')(() => ({
  textDecoration: 'underline',
  cursor: 'pointer',
  transition: 'all 0.4s',

  '&:hover': {
    color: '#bebebe',
  },
}));
