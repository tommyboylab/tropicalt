import React from 'react';
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
