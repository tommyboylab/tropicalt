import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Img from '../Img/Img';
import Load from '../../Other/Load/Load';
import Err from '../../Other/Error/Error';
import s from './Avatar.module.scss';

const getAvatar = gql`
  query getAvatar {
    avatar(id: "1") {
      id
      avatar {
        img {
          id
          url
          hash
        }
      }
      alt
    }
  }
`;

const Avatar = (): JSX.Element => {
  const { data, error, loading } = useQuery(getAvatar);

  if (loading && !data) return <Load />;
  if (error) return <Err />;

  return (
    <div key={data.avatar.id} className={s.avatar}>
      <Img
        class={s.avatar}
        url={data.avatar.avatar.img.url}
        placeholder={`/uploads/${data.avatar.avatar.img.hash}-thumb.svg`}
        alt={`Image for ${data.avatar.alt}`}
      />
    </div>
  );
};

Avatar.displayName = 'Avatar';

export default Avatar;
