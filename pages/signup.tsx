import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'redaxios';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import Router from 'next/router';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [identifier, setIdentifier] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const res = await axios.post('https://api.tropicalt.ca/auth/local/register', {
      username,
      email,
      password,
    });

    setCookie(undefined, 'token', res.data.jwt, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
  };

  const handleSignOut = () => {
    destroyCookie(undefined, 'token');
    Router.push('/signup');
  };
  const Nav = () => (
    <nav>
      <ul>
        <li>
          <button onClick={handleSignOut}>Log out</button>
        </li>
      </ul>
    </nav>
  );

  return (
    <div>
      <Nav />
      <Head>
        <title>Sign Up</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <div>
          <form>
            <div>
              <label htmlFor='username'>Username</label>
              <input
                id='identifier'
                type='text'
                placeholder='John Doe'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='email'>Email Address</label>
              <input
                id='email'
                type='email'
                placeholder='john@doe.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input
                id='password'
                type='password'
                placeholder='********'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button type='button' onClick={handleSubmit}>
                Sign Up
              </button>
              <a href='#'>Forgot Password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

SignUp.getInitialProps = (ctx: any) => {
  const isAuthenticated = !!parseCookies(ctx).token;

  // When the user is authenticated, don't let the user visit the
  // sign-in and sign-up routes
  if (isAuthenticated && ['/signup', '/signin'].indexOf(ctx.asPath) > -1) {
    if (typeof window !== 'undefined') {
      Router.push('/');
    } else {
      if (ctx.res) {
        ctx.res.writeHead(301, {
          Location: '/',
        });
        ctx.res.end();
      }
    }
  }

  return {};
};
