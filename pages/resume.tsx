import React from 'react';
import s from '../components/Other/Layout/Resume.module.scss';
import Meta from '../components/Other/Meta/Meta';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
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

const getResumeQuery = gql`
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
  }
  ${Contact.fragments.ContactFragment}
  ${WorkExp.fragments.WorkExpFragment}
  ${Education.fragments.EducationFragment}
  ${Skills.fragments.SkillsFragment}
  ${Img.fragments.HighlightImgFragment}
  ${Hobbies.fragments.HobbiesFragment}
  ${Footer.fragments.ResumeEmailFragment}
`;

export default function ResumePage(): JSX.Element {
  const { data, error, loading } = useQuery(getResumeQuery);
  if (loading && !data) return <Load />;
  if (error) return <Err />;

  return (
    <main className={s.layout}>
      <Meta
        title={'T^T - Resume'}
        excerpt={`Thomas Fiala's Current Resume`}
        imgUrl={data.resume.highlight.img.url}
        url={'/resume'}
      />
      <Header />
      <Contact data={data} />
      <WorkExp data={data} />
      <Education data={data} />
      <Skills data={data} />
      <Img data={data} />
      <Hobbies data={data} />
      <Footer data={data} />
    </main>
  );
}

ResumePage.displayName = 'Resume';
