import React from 'react';
import Img from '../../Other/Img/Img';
import s from '../Resume.module.scss';
import { gql } from 'urql';
// import { HighlightImgFragmentFragment } from '../../../apollo/gql/graphql';

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

const Highlight = (highlightImg): JSX.Element => {
  return (
    <div className={s.highlightImg}>
      {console.log('THis is Hightlight', highlightImg.highlight)}
      <Img
        class={s.highlightImg}
        url={String(highlightImg?.highlight.img.data.attributes.url)}
        placeholder={`/uploads/sqip_${String(highlightImg?.highlight.img.data.attributes.hash)}.svg`}
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
