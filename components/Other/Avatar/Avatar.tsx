import React from 'react';
import Img from '../Img/Img';
import s from './Avatar.module.scss';
import {motion} from "framer-motion";

type Avatar = {
  img?:
    | {
        __typename?: 'UploadFileEntityResponse';
        data?: {
          __typename?: 'UploadFileEntity';
          id?: string | null;
          attributes?: { __typename?: 'UploadFile'; url: string; hash: string } | null;
        } | null;
      }
    | undefined;
};

const Avatar = ({ img }: Avatar): JSX.Element => {
  return (
    <motion.div key={img?.data?.id} className={s.avatar}>
      <Img
        class={s.avatar}
        url={String(img?.data?.attributes?.url)}
        placeholder={`/uploads/sqip_${String(img?.data?.attributes?.hash)}.svg`}
        alt={`Image for Avatar`}
      />
    </motion.div>
  );
};

Avatar.displayName = 'Avatar';

export default Avatar;
