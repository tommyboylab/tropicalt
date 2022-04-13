import React from 'react';
import { gql } from '@app/gql';
import Img from '../Img/Img';
import s from './Avatar.module.scss';

const AvatarFragment = gql(`
  fragment AvatarFragment on Avatar {
    avatar {
      img {
        id
        url
        hash
      }
    }
  }
`);

const Avatar = ({ avatar }): JSX.Element => {
  console.log(avatar);
  return (
    <div key={avatar?.Img.img?.data.attributes.id} className={s.avatar}>
      <Img
        class={s.avatar}
        url={String(avatar?.Img.img?.data.attributes.url)}
        placeholder={`/uploads/sqip_${String(avatar.Img.img.data.attributes.hash)}.svg`}
        alt={`Image for Avatar`}
      />
    </div>
  );
};

Avatar.displayName = 'Avatar';

Avatar.fragments = {
  AvatarFragment: AvatarFragment,
};

export default Avatar;
