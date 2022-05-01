import React from 'react';
import Img from '../../Other/Img/Img';
import s from '../Resume.module.scss';
import { gql } from 'urql';

export const HighlightImgFragment = gql`
  fragment HighlightImgFragment on Resume {
    Img {
      img {
        data {
          id
          attributes {
            url
            hash
          }
        }
      }
    }
  }
`;

type HighlightType = {
  highlight:
    | {
        img: {
          data?: {
            id?: string | null;
            attributes?: { url: string; hash: string } | null;
          } | null;
        };
      }
    | null
    | undefined
    | undefined;
};

const Highlight = ({ highlight }: HighlightType): JSX.Element => {
  return (
    <div className={s.highlightImg}>
      <Img
        class={s.highlightImg}
        url={String(highlight?.img?.data?.attributes?.url)}
        placeholder={`/uploads/sqip_${String(highlight?.img?.data?.attributes?.hash)}.svg`}
        alt={`Image for Resume`}
      />
    </div>
  );
};

Highlight.displayName = 'Contact Info';

Highlight.fragments = {
  HighlightImgFragment: HighlightImgFragment,
};

export default Highlight;
