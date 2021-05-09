import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'redaxios';

const Callback = (): JSX.Element => {
  const [width, setWidth] = useState<number>(0);
  const {query, push, isReady} = useRouter();
  const {provider, accessToken, accessSecret} = query;

  const redirectURL =
    provider === 'twitter'
      ? `https://api.tropicalt.ca/auth/${provider}/callback?access_token=${accessToken}&access_secret=${accessSecret}`
      : `https://api.tropicalt.ca/auth/${provider}/callback?access_token=${accessToken}`;
   let isMobile = typeof window !== 'undefined' && width <= 268

  useEffect(() => {

    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }

  }, []);

  useLayoutEffect(() => {
    if (isReady) {
      console.log(query)
      axios
        .get(redirectURL)
        .then((res: any) => {
            window.opener.postMessage(res.data.jwt);
        })
        .catch((error: any) => {
          push('/login');
          console.log(error);
        })
        .then(() => {
          if (isMobile) {
              push(window.opener.location.href)
          }
          window.opener.location.reload();
          window.close();
        });}

  }, [isReady]);
  return (
    <div>
      <h2>Doing some stuff...</h2>
    </div>
  );
};
export default Callback;
