import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
    render() {
        return (
            <Html lang='kr'>
                <Head>
                    <Script
                        strategy='beforeInteractive'
                        src='https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=97m0gvoo7x'
                    />
                    <Script
                        strategy='beforeInteractive'
                        src='https://www.googletagmanager.com/gtag/js?id=G-WP1SHHPQ6X'
                    />
                    <Script
                        id='gtag'
                        dangerouslySetInnerHTML={{
                            __html: `
                            {window.dataLayer = window.dataLayer || []
                            function gtag(){dataLayer.push(arguments)}
                            gtag('js', new Date());
                          
                            gtag('config', 'G-WP1SHHPQ6X')}
                        `,
                        }}
                    />
                </Head>
                <body>
                    <div id='overlays' />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
