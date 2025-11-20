import React from "react";
import Button from "../../common/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost, toggleForm } from "../../../store/postsSlice";

const PostForm = () => {
  const dispatch = useDispatch();

  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
    userId: 1,
  });

  const handleFormChange = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(newPost));

    setNewPost({
      title: "",
      body: "",
      userId: 1,
    });

    dispatch(toggleForm());
  };

  return (
    <div className="overlay">
      <form className="new-post" onSubmit={handleSubmit}>
        <div
          className="new-post__close"
          onClick={() => {
            dispatch(toggleForm());
          }}
        >
          ×
        </div>
        <h3>New post</h3>
        <input
          type="title"
          id="title"
          name="title"
          onChange={handleFormChange}
          placeholder="Title"
          required
        />
        <textarea
          type="body"
          id="body"
          name="body"
          onChange={handleFormChange}
          placeholder="Content"
          required
        />
        <Button title="Upload" />
      </form>
    </div>
  );
};

export default PostForm;
