import React, { useLayoutEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'redaxios';

const Callback = (): JSX.Element => {
  const router = useRouter();
  const provider = router.query.provider;
  const accessToken = router.query.access_token;
  const accessSecret = router.query.access_secret;
  const redirectURL =
    router.query.provider === 'twitter'
      ? `https://api.tropicalt.ca/auth/${provider}/callback?access_token=${accessToken}&access_secret=${accessSecret}`
      : `https://api.tropicalt.ca/auth/${provider}/callback?access_token=${accessToken}`;

  useLayoutEffect(() => {
    if (window.opener) {
      axios
        .get(redirectURL)
        .then((res: any) => {
          window.opener.postMessage(res.data.jwt);
        })
        .catch((error: any) => {
          router.push('/login');
          console.log(error);
        })
        .then(() => {
          window.opener.location.reload();
          window.close();
        });
    }
  }, []);
  return (
    <div>
      <h2>Doing some stuff...</h2>
    </div>
  );
};
export default Callback;
