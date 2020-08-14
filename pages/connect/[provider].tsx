import React, { useLayoutEffect } from 'react';
import { useRouter } from 'next/router';
import { setCookie, parseCookies } from 'nookies';
import axios from 'redaxios';

const Callback = (): JSX.Element => {
  const router = useRouter();
  const provider = router.query.provider;
  const accessToken = router.query.access_token;
  const redirectURL = `https://api.tropicalt.ca/auth/${provider}/callback?access_token=${accessToken}`;
  const authToken = parseCookies();

  if (authToken === null) {
    useLayoutEffect(() => {
      axios
        .get(redirectURL)
        .then((res: any) => {
          console.log(res);
          setCookie(undefined, 'token', res.data.jwt, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
          });
        })
        .catch((error: any) => {
          console.log(error);
        })
        .then(() => {
          return <h3>Done.</h3>;
        });
    }, []);
    return (
      <div>
        <h2>Retreving your token and storing it in a cookie</h2>
      </div>
    );
  } else {
    router.push('/');
  }
  return (
    <div>
      <h2>Yo</h2>
    </div>
  );
};
export default Callback;
