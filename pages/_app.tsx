import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import Head from 'next/head';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Fragment>
            <Head>
                <meta charSet='utf-8' />
                <title>With eat</title>
            </Head>
            <Script
                strategy='beforeInteractive'
                src='https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=97m0gvoo7x'
            />

            <Component {...pageProps} />
        </Fragment>
    );
}
