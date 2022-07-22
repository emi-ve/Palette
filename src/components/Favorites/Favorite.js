import { render } from "@testing-library/react";
import React, { Component } from "react";

import "./styles.css";

const Favorite = () => {
  return (
    <button
      className="fav"
      onClick={() => {
        console.log("clicked");
      }}
    >
      This is my favorite
    </button>
  );
};
export default Favorite;
