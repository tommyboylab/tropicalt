import React from 'react';

type Rating = {
  likes: [{ user: string }];
  dislikes: [{ user: string }];
};

const Rating = ({ likes, dislikes }: Rating): JSX.Element => {
  const likeNum = likes.length;
  const dislikeNum = dislikes.length;

  return (
    <div>
      <div>
        <h3> Likes: {likeNum}</h3>
        <p>Like Count:</p>
      </div>
      <div>
        <h3> Dislikes: {dislikeNum}</h3>
        <p>Dislike Count:</p>
      </div>
    </div>
  );
};

export default Rating;
