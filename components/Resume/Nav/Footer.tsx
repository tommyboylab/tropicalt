import React from 'react';
import s from '../Resume.module.scss';
import { gql } from '@app/gql';

export const ResumeEmailFragment = gql(`
  fragment ResumeEmailFragment on Resume {
    email
  }
`);

type EmailType = {
  email: string;
};

const Email = ({ email }: EmailType): JSX.Element => {
  return (
    <div className={s.contact}>
      <p>
        Contact Information:
        <a href={`mailto:${email}`}>Email</a>
      </p>
    </div>
  );
};

Email.displayName = 'Footer';

Email.fragments = {
  ResumeEmailFragment: ResumeEmailFragment,
};

export default Email;
