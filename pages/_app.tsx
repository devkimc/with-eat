import React from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyle from '../styles/global';
import store from '../store/store';
import '../styles/GpsWave.css';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider store={store}>
            <Head>
                <meta charSet="utf-8" />
                <title>With eat</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <GlobalStyle />
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
        </Provider>
    );
};

export default App;
