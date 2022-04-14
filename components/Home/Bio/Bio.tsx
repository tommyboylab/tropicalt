import React from 'react';
import ReactMarkdown from 'react-markdown';
import { gql } from 'urql';
import Avatar from '../../Other/Avatar/Avatar';
import s from './Bio.module.scss';

export const BioFragment = gql(`
  fragment BiographyFragment on Query {
usersPermissionsUser(id:1){
  data{
    id
    attributes{
      Biography
      Img{
        img{
          data{
            attributes{
              url
              hash
            }
          }
        }
      }
    }
  }
}}`);

const Bio = ({ avatar }): JSX.Element => {
  return (
    <div key={avatar.id} className={s.bio}>
      <Avatar avatar={avatar} />
      <ReactMarkdown>{String(avatar?.attributes.Biography)}</ReactMarkdown>
    </div>
  );
};

Bio.fragments = {
  BiographyFragment: BioFragment,
};
export default Bio;
