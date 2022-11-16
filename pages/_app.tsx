import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyle from '../styles/global';
import store from '../store/store';
import '../styles/GpsWave.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Head>
                <meta charSet='utf-8' />
                <title>With eat</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <GlobalStyle />
            <Component {...pageProps} />
        </Provider>
    );
}
