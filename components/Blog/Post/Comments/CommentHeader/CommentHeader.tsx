import React from 'react';


type commentHeader = {

  totalComments:number
}
const CommentHeader = ({ totalComments }:commentHeader): JSX.Element => {


  return (
    <div>
      <h3>
        {totalComments} Comments
        <button>Sort By:</button>
      </h3>
    </div>
  )
}

export default CommentHeader