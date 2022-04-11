import { createClient, dedupExchange, cacheExchange, ssrExchange, fetchExchange } from 'urql';

const serverSide = typeof window === 'undefined';
const ssrCacheExchange = ssrExchange({ isClient: !serverSide });

const client = createClient({
  url: String(process.env.API),
  exchanges: [dedupExchange, cacheExchange, ssrCacheExchange, fetchExchange],
  fetchOptions: () => {
    return { headers: {} };
  },
});

export { client, ssrCacheExchange };
