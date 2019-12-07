import React from 'react';
import ReactMarkdown from 'react-markdown';
import gql from 'graphql-tag';
import Avatar from '../../Other/Avatar/Avatar';
import s from './Bio.module.scss';

type Bio = {
  id: number;
  bio: string;
};

const BioFragment = gql`
  fragment BiographyFragment on Query {
    avatar(id: "1") {
      bio
      ...AvatarFragment
    }
  }
  ${Avatar.fragments.AvatarFragment}
`;

const Bio = (bio: any): JSX.Element => {
  bio = bio?.data?.avatar as Bio;

  return (
    <div key={bio.id} className={s.bio}>
      <Avatar data={bio} />
      <ReactMarkdown source={bio.bio} />
    </div>
  );
};

Bio.fragments = {
  BiographyFragment: BioFragment,
};
export default Bio;
