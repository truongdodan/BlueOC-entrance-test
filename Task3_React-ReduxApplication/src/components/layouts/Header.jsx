import React from "react";
import Button from "../common/Button";
import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../../store/postsSlice";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header>
      <div className="logo">Postie</div>
      <Button
        title={"New"}
        onClick={() => {
          dispatch(toggleForm());
        }}
      />
    </header>
  );
};

export default Header;
