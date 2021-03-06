import React from 'react';
import Contact from '../components/Contact/Contact';
import Nav from '../components/Nav/Nav';
import s from '../components/Other/Layout/Contact.module.scss';
import Meta from '../components/Other/Meta/Meta';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Load from '../components/Other/Load/Load';
import Err from '../components/Other/Error/Error';

const getContactQuery = gql`
  query getImageBanner {
    ...NavigationFragment
  }
  ${Nav.fragments.NavigationFragment}
`;

export default function ContactPage(): JSX.Element {
  const { data, error, loading } = useQuery(getContactQuery);
  if (loading && !data) return <Load />;
  if (error) return <Err />;
  return (
    <main className={s.layout}>
      <Meta title={'T^T - Contact Me'} excerpt={'Send me a message and let me know what you think'} url={'/contact'} />
      <Nav data={data} />
      <Contact />
    </main>
  );
}
