import React from "react";

const Post = ({ data }) => {
  return (
    <li className="post">
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </li>
  );
};

export default Post;
