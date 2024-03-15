import React, { useState } from "react";

const Add = ({ addRow }) => {
  const handleClick = () => {
    addRow();
  };

  return (
    <button className="btn btn-primary" onClick={handleClick}>
      Add
    </button>
  );
};

export default Add;
