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
  fontSize: '36px',
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
