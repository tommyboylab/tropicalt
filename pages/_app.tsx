import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { withApollo } from '../apollo/withApollo';

const TropicalT = ({ Component, pageProps, apollo, router }: any) => (
  <ApolloProvider client={apollo}>
    <Component {...pageProps} router={router} />
  </ApolloProvider>
);

export default withApollo({ ssr: true })(TropicalT);
