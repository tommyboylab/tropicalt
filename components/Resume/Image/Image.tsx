import React from 'react';
import Img from '../../Other/Img/Img';
import s from '../Resume.module.scss';
import { gql } from '@app/gql';
import { HighlightImgFragmentFragment } from '../../../apollo/gql/graphql';

const HighlightImgFragment = gql(`
  fragment HighlightImgFragment on Resume {
    highlight {
      img {
        id
        url
        hash
      }
    }
  }
`);

const Highlight = (highlightImg: HighlightImgFragmentFragment): JSX.Element => {
  return (
    <div className={s.highlightImg}>
      <Img
        class={s.highlightImg}
        url={String(highlightImg?.highlight?.img?.url)}
        placeholder={`/uploads/${String(highlightImg?.highlight?.img?.hash)}-thumb.svg`}
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
