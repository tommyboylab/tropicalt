import React from 'react';
import Contact from '../components/Contact/Contact';
import NewNav from '../components/Nav/NewNav';
import s from '../components/Other/Layout/Contact.module.scss';
import Meta from '../components/Other/Meta/Meta';
import { gql } from '@app/gql';
import { useQuery } from 'urql';
import Load from '../components/Other/Load/Load';
import Err from '../components/Other/Error/Error';
import { client, ssrCacheExchange } from '../gql/urqlClient';

const GetContactQuery = gql(`
  query GetContactPage {
    ...NavigationFragment
  }
`);

export default function ContactPage(): JSX.Element {
  const [result] = useQuery({ query: GetContactQuery });
  const { data, fetching, error } = result;

  if (fetching && !data) return <Load />;
  if (error) return <Err />;
  return (
    <main className={s.layout}>
      <Meta title={'T^T - Contact Me'} excerpt={'Send me a message and let me know what you think'} url={'/contact'} />
      <NewNav navLink={data?.navLink} />
      <Contact />
    </main>
  );
}

export function getStaticProps() {
  client.query(GetContactQuery, {});
  return { props: { urqlState: ssrCacheExchange.extractData() }, revalidate: 1200 };
}
