import { createClient, dedupExchange, cacheExchange, ssrExchange, fetchExchange } from 'urql';
// import { createClient as createWSClient } from 'graphql-ws';
import { parseCookies } from 'nookies';


const { token } = parseCookies();
export const isSignedIn = () => !!token;

const serverSide = typeof window === 'undefined';
const ssrCacheExchange = ssrExchange({ isClient: !serverSide });


// Strapi doesn't yet support WS so this is disabled until such a time it's possible
// const subscriptionClient = createWSClient({
//   url: 'wss://api.tropicalt.ca/graphql'
// }
// );

// const subscriptions = subscriptionExchange({
//   forwardSubscription: (operation) => ({
//     subscribe: (sink) => ({
//       unsubscribe: subscriptionClient.subscribe(operation, sink)
//     })

//   })
// })

const client = createClient({
  url: String(process.env.API),
  exchanges: [dedupExchange, cacheExchange, ssrCacheExchange, fetchExchange],
  fetchOptions: () => {
    return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
  },
});

export { client, ssrCacheExchange };
