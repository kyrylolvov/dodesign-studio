import type { AppProps } from 'next/app';
import Head from 'next/head';
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
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
