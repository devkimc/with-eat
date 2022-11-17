import React from 'react';
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
} from 'next/document';
import Script from 'next/script';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext,
    ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props =>
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html lang="kr">
                <Head>
                    <Script
                        strategy="beforeInteractive"
                        src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=97m0gvoo7x"
                    />

                    {/* vercel */}
                    <Script
                        strategy="beforeInteractive"
                        src="https://www.googletagmanager.com/gtag/js?id=G-WP1SHHPQ6X"
                    />

                    <Script
                        id="gtag"
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
                    <div id="overlays" />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
