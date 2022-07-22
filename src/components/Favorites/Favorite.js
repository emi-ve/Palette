import { render } from "@testing-library/react";
import React, { useState } from "react";

import "./styles.css";

const Favorite = () => {
  const [getFavoriteId, setFavoriteId] = useState(0);
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
