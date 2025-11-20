import React from "react";

const SecondaryButton = ({ title, onClick }) => {
  return (
    <button className="secondary-button" onClick={onClick}>
      {title}
    </button>
  );
};

export default SecondaryButton;
