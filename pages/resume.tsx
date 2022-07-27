import React from 'react';
import s from '../components/Other/Layout/Resume.module.scss';
import Meta from '../components/Other/Meta/Meta';
import { gql } from '@app/gql';
import { useQuery } from 'urql';
import Err from '../components/Other/Error/Error';
import Skills from '../components/Resume/Skills/Skills';
import WorkExp from '../components/Resume/WorkExp/WorkExp';
import Hobbies from '../components/Resume/Hobbies/Hobbies';
import Contact from '../components/Resume/Contact/Contact';
import Education from '../components/Resume/Education/Education';
import Img from '../components/Resume/Image/Image';
import Footer from '../components/Resume/Nav/Footer';
import Load from '../components/Other/Load/Load';
import Header from '../components/Resume/Nav/Header';
import { client, ssrCacheExchange } from '../gql/urqlClient';

const GetResumeQuery = gql(`
  query GetResumeQuery {
    resume {
      data {
        id
        attributes {
          ...ContactFragment
          ...WorkExpFragment
          ...EducationFragment
          ...SkillsFragment
          ...HighlightImgFragment
          ...HobbiesFragment
          ...ResumeEmailFragment
        }
      }
    }
  }
`);

export default function ResumePage(): JSX.Element {
  const [result] = useQuery({ query: GetResumeQuery });
  const { data, fetching, error } = result;

  if (fetching && !data) return <Load />;
  if (error) return <Err />;

  return (
    <main className={s.layout}>
      <Meta
        title={'T^T - Resume'}
        excerpt={`Thomas Fiala's Current Resume`}
        imgUrl={data?.resume?.data?.attributes?.Img?.img?.data?.attributes?.url}
        url={'/resume'}
      />
      <Header />
      <Contact
        address={String(data?.resume?.data?.attributes?.Address)}
        phoneNum={String(data?.resume?.data?.attributes?.Phone)}
      />
      <WorkExp workExp={String(data?.resume?.data?.attributes?.Experience)} />
      <Education edu={String(data?.resume?.data?.attributes?.Education)} />
      <Skills skills={String(data?.resume?.data?.attributes?.Skills)} />
      <Img highlight={data?.resume?.data?.attributes?.Img} />
      <Hobbies hobbies={String(data?.resume?.data?.attributes?.Hobbies)} />
      <Footer email={String(data?.resume?.data?.attributes?.email)} />
    </main>
  );
}

ResumePage.displayName = 'Resume';

export async function getStaticProps() {
  await client.query(GetResumeQuery).toPromise();
  return { props: { urqlState: ssrCacheExchange.extractData() }, revalidate: 1200 };
}
