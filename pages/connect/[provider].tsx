import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'redaxios';

const Callback = (): JSX.Element => {
  const [width, setWidth] = useState<number>(0);
  const { query, push, isReady } = useRouter();
  const { provider, access_token, access_secret } = query;

  const redirectURL =
    provider === 'twitter'
      ? `https://api.tropicalt.ca/auth/${provider}/callback?access_token=${String(access_token)}&access_secret=${String(
          access_secret
        )}`
      : `https://api.tropicalt.ca/auth/${String(provider)}/callback?access_token=${String(access_token)}`;
  const isMobile = typeof window !== 'undefined' && width <= 768;

  useEffect(() => {
    const handleWindowSizeChange = () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
      setWidth(window.opener.innerWidth);
    };

    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  useLayoutEffect(() => {
    if (isReady) {
      console.log(query);
      void axios
        .get(redirectURL)
        .then(({ data }: { data: { jwt: string } }) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
          window.opener.postMessage(data?.jwt);
        })
        .catch(async (error) => {
          await push('/login');
          console.log(error);
        })
        .then(async () => {
          if (isMobile) {
            await push(location.href);
          }
          location.reload();
          window.close();
        });
    }
  }, [isReady, isMobile, push, query, redirectURL]);
  return (
    <div>
      <h2>Doing some stuff...</h2>
    </div>
  );
};
export default Callback;
