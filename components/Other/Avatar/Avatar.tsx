import React from 'react';
import gql from 'graphql-tag';
import Img from '../Img/Img';
import s from './Avatar.module.scss';

type Avatar = {
  id: number;
  avatar: { img: { id: string; url: string; hash: string } };
};

const AvatarFragment = gql`
  fragment AvatarFragment on Avatar {
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
`;

const Avatar = (avatar: any): JSX.Element => {
  avatar = avatar?.data?.avatar as Avatar;

  return (
    <div key={avatar.id} className={s.avatar}>
      <Img
        class={s.avatar}
        url={avatar.img.url}
        placeholder={`/uploads/${avatar.img.hash}-thumb.svg`}
        alt={`Image for ${avatar.alt}`}
      />
    </div>
  );
};

Avatar.displayName = 'Avatar';

Avatar.fragments = {
  AvatarFragment: AvatarFragment,
};

export default Avatar;
