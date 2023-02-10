export {};
// import { useMemo } from 'react';
// import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
// import { relayStylePagination } from '@apollo/client/utilities';
// import merge from 'deepmerge';
// import { isEqual } from 'lodash';
// import fetch from 'isomorphic-unfetch';
// import { parseCookies } from 'nookies';
//
// export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';
//
// let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;
//
// const { token } = parseCookies();
//
// export const isSignedIn = () => !!token;
//
// const authHeaders = (init: RequestInit) => {
//   if (!token) return { ...init.headers };
//
//   return {
//     ...init.headers,
//     authorization: `Bearer ${token}`,
//   };
// };
//
// // isomorphic fetch for passing the cookies along with each GraphQL request
// const enhancedFetch = (url: RequestInfo, init: RequestInit) => {
//   return fetch(url, {
//     ...init,
//     headers: authHeaders(init),
//   }).then((response) => {
//     return response;
//   });
// };
//
// function createApolloClient() {
//   return new ApolloClient({
//     ssrMode: typeof window === 'undefined',
//     link: new HttpLink({
//       uri: process.env.API, // Server URL (must be absolute)
//       credentials: 'same-origin',
//       fetch: enhancedFetch, // Additional fetch() options like `credentials` or `headers`
//     }),
//     cache: new InMemoryCache({
//       // typePolicies is not required to use Apollo with Next.js - only for doing pagination.
//       typePolicies: {
//         Query: {
//           fields: {
//             posts: relayStylePagination(),
//           },
//         },
//       },
//     }),
//   });
// }
//
// export function initializeApollo(initialState: NormalizedCacheObject | null = null) {
//   const _apolloClient = apolloClient ?? createApolloClient();
//
//   // If your page has Next.js data fetching methods that use Apollo Client, the initial state
//   // gets hydrated here
//   if (initialState) {
//     // Get existing cache, loaded during client side data fetching
//     const existingCache = _apolloClient.extract();
//
//     // Merge the existing cache into data passed from getStaticProps/getServerSideProps
//     const data = merge(initialState, existingCache, {
//       // combine arrays using object equality (like in sets)
//       arrayMerge: (sourceArray: [], destinationArray: []) => [
//         ...sourceArray,
//         ...destinationArray.filter((d) => sourceArray.every((s) => !isEqual(d, s))),
//       ],
//     });
//
//     // Restore the cache with the merged data
//     _apolloClient.cache.restore(data);
//   }
//
//   // For SSG and SSR always create a new Apollo Client
//   if (typeof window === 'undefined') return _apolloClient;
//
//   // Create the Apollo Client once in the client
//   if (!apolloClient) apolloClient = _apolloClient;
//
//   return _apolloClient;
// }
//
// export function addApolloState(
//   client: ApolloClient<NormalizedCacheObject>,
//   pageProps: { props: Record<never, never> }
// ) {
//   if (pageProps?.props) {
//     pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
//   }
//
//   return pageProps;
// }
//
// export function useApollo(pageProps: { [x: string]: NormalizedCacheObject | undefined }) {
//   let state: NormalizedCacheObject | undefined = undefined;
//   if (pageProps) {
//     state = pageProps[APOLLO_STATE_PROP_NAME];
//   }
//   return useMemo(() => initializeApollo(state), [state]);
// }
