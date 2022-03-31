import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { setCookie } from 'nookies';

export default class TropicalTStyle extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    if (ctx.query.token) {
      setCookie(ctx, 'authorization', ctx.query.token[0], {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
    }

    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang='en'>
        <Head>
          <title />
        </Head>
        <Main />
        <NextScript />
      </Html>
    );
  }
}
