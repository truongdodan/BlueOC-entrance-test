import React from "react";
import Header from "../components/layouts/header";
import PostList from "../components/features/post/PostList";
import PostForm from "../components/features/post/PostForm";
import { useSelector } from "react-redux";

const Home = () => {
  const showForm = useSelector((state) => state.posts.showForm);

  return (
    <>
      <Header />
      <main>
        {showForm && <PostForm />}
        <h3>Feature</h3>
        <PostList />
      </main>
    </>
  );
};

export default Home;
