import { GrFavorite } from "react-icons/gr";
import React from "react";
import ReactDOM from "react-dom";
import { Container } from "react-bootstrap";
import Favorite from "../Favorites/Favorite";
import "./styles.css";

const PhotoList = (props) => {
  const FavIcon = <GrFavorite />;

  const Img = (props) => (
    <li className="img-wrap">
      <img src={props.url} alt="" />
    </li>
  );

  const results = props.data;
  let imgs = results.map((img) => (
    <div>
      <div className="images">
        <div>
          <Img url={img.urls.small} key={img.id} className="img" />
          <div className="favs">
            <Favorite />
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <Container>
      <div className="img-list justify-content-center">{imgs}</div>
    </Container>
  );
};

export default PhotoList;
