import React from 'react';
import s from '../Resume.module.scss';
import gql from 'graphql-tag';

type Email = {
  email: string;
};

const ResumeEmailFragment = gql`
  fragment ResumeEmailFragment on Resume {
    email
  }
`;

const Email = (email: any): JSX.Element => {
  email = email.data?.resume as Email;
  return (
    <div className={s.contact}>
      <p>
        Contact Information:
        <a href={`mailto:${email.email}`}>Email</a>
      </p>
    </div>
  );
};

Email.displayName = 'Footer';

Email.fragments = {
  ResumeEmailFragment: ResumeEmailFragment,
};

export default Email;
