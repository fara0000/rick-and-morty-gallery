import '../styles/globals.css';
import '../styles/variables.css';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <Component {...pageProps} />
);

export default MyApp;
