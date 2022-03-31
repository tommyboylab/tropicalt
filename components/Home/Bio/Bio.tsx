import React from 'react';
import ReactMarkdown from 'react-markdown';
import { gql, DocumentType } from '@app/gql';
import Avatar from '../../Other/Avatar/Avatar';
import s from './Bio.module.scss';

const BioFragment = gql(`
  fragment BiographyFragment on Query {
    avatar(id: "1") {
      id
      bio
      ...AvatarFragment
    }
  }`);

const Bio = ({ avatar }: DocumentType<typeof BioFragment>): JSX.Element => {
  return (
    <div key={avatar?.id} className={s.bio}>
      <Avatar avatar={avatar?.avatar} />
      <ReactMarkdown>{String(avatar?.bio)}</ReactMarkdown>
    </div>
  );
};

Bio.fragments = {
  BiographyFragment: BioFragment,
};
export default Bio;
