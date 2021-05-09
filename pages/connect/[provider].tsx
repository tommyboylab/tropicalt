import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'redaxios';

const Callback = (): JSX.Element => {
  const [width, setWidth] = useState<number>(0);
  const router = useRouter();
  const provider = router.query.provider;
  const accessToken = router.query.access_token;
  const accessSecret = router.query.access_secret;
  const redirectURL =
    router.query.provider === 'twitter'
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
    if (window.opener) {
      console.log('provider', router.query)
      console.log('redirectURL', redirectURL)
      axios
        .get(redirectURL)
        .then((res: any) => {
            window.opener.postMessage(res.data.jwt);
            console.log(window.opener)
        })
        .catch((error: any) => {
          router.push('/login');
          console.log(error);
          console.log(window.opener)
        })
        .then(() => {
          if (isMobile) {
              router.push(window.opener.location.href)
          }
          window.opener.location.reload();
          window.close();
        });}

  }, []);
  return (
    <div>
      <h2>Doing some stuff...</h2>
    </div>
  );
};
export default Callback;
