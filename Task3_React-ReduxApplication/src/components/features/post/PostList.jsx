import React from "react";
import Post from "./Post";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, loadMore } from "../../../store/postsSlice";
import { useEffect } from "react";
import SecondaryButton from "../../common/SecondaryButton";

const PostList = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);
  const displayCount = useSelector((state) => state.posts.displayCount);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(loadMore());
  };

  if (loading) return <div>Loading....</div>;

  const displayedPosts = posts.slice(0, displayCount);
  const hasMore = displayCount < posts.length;

  return (
    <>
      <ul className="post-list">
        {displayedPosts.map((post) => (
          <Post key={post.id} data={post} />
        ))}
      </ul>
      {hasMore && <SecondaryButton title="More" onClick={handleLoadMore} />}
    </>
  );
};

export default PostList;
