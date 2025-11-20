import React from "react";
import Post from "./Post";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../../store/postsSlice";
import { useEffect } from "react";

const PostList = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <div>Loading....</div>;

  return (
    <ul>
      {posts.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </ul>
  );
};

export default PostList;
