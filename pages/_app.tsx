import type { AppProps } from 'next/app';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 700,
        md: 1000,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
