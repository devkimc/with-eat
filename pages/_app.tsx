import '../styles/globals.css';
import '../styles/GpsWave.css';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Fragment>
            <Head>
                <meta charSet='utf-8' />
                <title>With eat</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Component {...pageProps} />
        </Fragment>
    );
}
