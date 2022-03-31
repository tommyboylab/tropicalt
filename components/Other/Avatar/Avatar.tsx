import React from 'react';
import { gql, DocumentType } from '@app/gql';
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

const Avatar = ({ avatar }: DocumentType<typeof AvatarFragment>): JSX.Element => {
  return (
    <div key={avatar?.img?.id} className={s.avatar}>
      <Img
        class={s.avatar}
        url={String(avatar?.img?.url)}
        placeholder={`/uploads/${String(avatar?.img?.hash)}-thumb.svg`}
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
