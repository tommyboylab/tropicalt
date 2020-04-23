import React from 'react';
import Img from '../../Other/Img/Img';
import s from '../Resume.module.scss';
import gql from 'graphql-tag';

type Img = {
  id: string;
  url: string;
  hash: string;
  alt: string;
};

const HighlightImgFragment = gql`
  fragment HighlightImgFragment on Resume {
    highlight {
      img {
        id
        url
        hash
      }
    }
  }
`;

const Highlight = (highlightImg: any): JSX.Element => {
  highlightImg = highlightImg.data?.resume as Img;
  return (
    <div className={s.highlightImg}>
      <Img
        class={s.highlightImg}
        url={highlightImg.highlight.img.url}
        placeholder={`/uploads/${highlightImg.highlight.img.hash}-thumb.svg`}
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
