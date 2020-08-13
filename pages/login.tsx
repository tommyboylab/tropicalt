import React from 'react';
import { parseCookies } from 'nookies';
import Modal from '../components/Other/SocialAuth/Modal';

const SignUp = (authorization: any) => {
  return (
    <>
      {!authorization && <h1>Fuck Yeah Authenticated</h1>}
      <Modal />
    </>
  );
};

export default SignUp;

SignUp.getInitialProps = (ctx: any) => {
  const { authorization } = parseCookies(ctx);
  const { token } = ctx.query;
  return {
    authorization: authorization || token,
  };
};
