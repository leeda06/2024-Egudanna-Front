// CircleButton.js

import React from "react";
import "../css/style.css";

const CircleButton = ({ onClick }) => {
  return (
    <div className="button-container">
      <button className="circle-button" onClick={onClick}></button>
    </div>
  );
};

export default CircleButton;
