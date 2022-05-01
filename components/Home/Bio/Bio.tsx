import React from 'react';
import ReactMarkdown from 'react-markdown';
import { gql, DocumentType } from '@app/gql';
import Avatar from '../../Other/Avatar/Avatar';
import s from './Bio.module.scss';

export const BiographyFragment = gql(`
  fragment BiographyFragment on Query {
usersPermissionsUser(id:1){
  data{
    id
    attributes{
      Biography
      Img{
        img{
          data{
            id
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

const Bio = ({ usersPermissionsUser }: DocumentType<typeof BiographyFragment>): JSX.Element => {
  const bioData = usersPermissionsUser?.data;

  return (
    <div key={bioData?.id} className={s.bio}>
      <Avatar img={bioData?.attributes?.Img?.img} />
      <ReactMarkdown>{String(bioData?.attributes?.Biography)}</ReactMarkdown>
    </div>
  );
};

Bio.fragments = {
  BiographyFragment,
};

export default Bio;
