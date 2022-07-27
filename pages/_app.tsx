import type { AppProps } from 'next/app';

import Navbar from '../components/Navbar/Navbar';

import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
