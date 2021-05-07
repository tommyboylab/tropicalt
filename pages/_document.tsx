import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { setCookie } from 'nookies';

export default class TropicalTStyle extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    if (ctx.query.token) {
      setCookie(ctx, 'authorization', ctx.query.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
    }

    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang='en'>
        <Head />
        <Main />
        <NextScript />
      </Html>
    );
  }
}
