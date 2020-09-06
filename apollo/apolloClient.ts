import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import fetch from 'isomorphic-unfetch';
import { parseCookies } from 'nookies';

export default function createApolloClient(initialState: any, ctx: any) {
  const { token } = parseCookies(ctx);
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: new HttpLink({
      uri: process.env.API, // Server URL (must be absolute)
      credentials: 'include', // Additional fetch() options like `credentials` or `headers`
      fetch,
      fetchOptions: {
        mode: 'no-cors',
      },
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    }),
    cache: new InMemoryCache().restore(initialState),
  });
}
