import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

const globalStyle = {
    __html: `
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    font-family: Didact Gothic;
    font-size: 1.25rem;
    line-height: 2rem;
    box-sizing: border-box;
  }

  @font-face {
    font-family: Didact Gothic;
    src: url("/static/fonts/DidactGothic-Regular.woff2") format("woff2"),
      url("/static/fonts/DidactGothic-Regular.woff") format("woff"),
      url("/static/fonts/DidactGothic-Regular.ttf") format("truetype");
  }

  ::-webkit-tap-highlight-color: {
    color:Jade;
    background: Violet;
  }

  ::selection {
    color:Jade;
    background: Violet; /* WebKit/Blink Browsers */
  }
  ::-moz-selection {
    color:Jade;
    background: Violet; /* Gecko Browsers */
  }

  html {
    background-color: rgb(30,30,40);
    width:100%;
    height:100%;
  }
`,
};

export default class TropicalTStyle extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta charSet="utf-8" />
                    <style dangerouslySetInnerHTML={globalStyle} />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
                    />
                </Head>
                <Main />
                <NextScript />
            </html>
        );
    }
}
