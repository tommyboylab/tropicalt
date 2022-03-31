import React from 'react';
import s from '../components/Other/Layout/Resume.module.scss';
import Meta from '../components/Other/Meta/Meta';
import { gql } from '@app/gql';
import { useQuery } from '@apollo/client';
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

const getResumeQuery = gql(`
  query getResumeQuery {
    resume(id: 1) {
      id
      ...ContactFragment
      ...WorkExpFragment
      ...EducationFragment
      ...SkillsFragment
      ...HighlightImgFragment
      ...HobbiesFragment
      ...ResumeEmailFragment
    }
  }`);

export default function ResumePage(): JSX.Element {
  const { data, error, loading } = useQuery(getResumeQuery);
  if (loading && !data) return <Load />;
  if (error) return <Err />;

  return (
    <main className={s.layout}>
      <Meta
        title={'T^T - Resume'}
        excerpt={`Thomas Fiala's Current Resume`}
        imgUrl={data?.resume?.highlight?.img?.url}
        url={'/resume'}
      />
      <Header />
      <Contact address={String(data?.resume?.address)} phoneNum={String(data?.resume?.phoneNum)} />
      <WorkExp workExp={String(data?.resume?.workExp)} />
      <Education edu={String(data?.resume?.edu)} />
      <Skills skills={String(data?.resume?.skills)} />
      <Img highlight={data?.resume?.highlight} />
      <Hobbies hobbies={String(data?.resume?.hobbies)} />
      <Footer email={String(data?.resume?.email)} />
    </main>
  );
}

ResumePage.displayName = 'Resume';
