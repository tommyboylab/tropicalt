import React, { useLayoutEffect } from 'react';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import axios from 'redaxios';

const Callback = (): JSX.Element => {
  const router = useRouter();
  const provider = router.query.provider;
  const accessToken = router.query.access_token;
  const redirectURL = `https://api.tropicalt.ca/auth/${provider}/callback?access_token=${accessToken}`;
  useLayoutEffect(() => {
    axios
      .get(redirectURL)
      .then((res: any) => {
        setCookie(undefined, 'id', res.data.user.id, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        });
        setCookie(undefined, 'name', res.data.user.username, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        });
        setCookie(undefined, 'avatar', res.data.user.avatar, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        });
      })
      .catch((error: any) => {
        console.log(error);
        router.push('/login');
      })
      .then(() => {
        router.push('/');
      });
  }, []);
  return (
    <div>
      <h2>Doing some stuff...</h2>
    </div>
  );
};
export default Callback;
