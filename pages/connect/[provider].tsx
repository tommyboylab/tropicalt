import React, { useLayoutEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'redaxios';

const Callback = (): JSX.Element => {
  const router = useRouter();
  const provider = router.query.provider;
  const accessToken = router.query.access_token;
  const redirectURL = `https://api.tropicalt.ca/auth/${provider}/callback?access_token=${accessToken}`;

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
