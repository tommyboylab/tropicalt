import React from 'react';
import Videos from '../components/Video/List';
import Nav from '../components/Nav/Nav';

export default function VlogPage(): JSX.Element {
  return (
    <main>
      <Nav />
      <Videos />
    </main>
  );
}
