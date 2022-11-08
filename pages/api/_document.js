// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
    render() {
        return (
            <Html lang='kr'>
                <Head>
                    <Script
                        type='text/javascript'
                        src='https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=97m0gvoo7x'
                    ></Script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
