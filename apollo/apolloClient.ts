import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { parseCookies } from 'nookies';
import { setContext } from '@apollo/client/link/context';

export default function createApolloClient(initialState: any, ctx: any) {
  const { token } = parseCookies(ctx);

  const httpLink = new HttpLink({
    uri: process.env.API,
    credentials: 'include',
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState),
    defaultOptions: {
      mutate: { errorPolicy: 'ignore' },
    },
  });
}
