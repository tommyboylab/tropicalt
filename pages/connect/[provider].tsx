import React from 'react';
import { useRouter } from 'next/router';

const Callback = (): JSX.Element => {
  const router = useRouter();

  const authToken = router.query;

  if (authToken === null) {
    console.log(authToken);
    return (
      <div>
        <h2>Retreving your token and storing it in a cookie</h2>
      </div>
    );
  } else {
    router.push('/');
  }
  console.log(authToken);
  return (
    <div>
      <h2>Yo</h2>
    </div>
  );
};
export default Callback;
