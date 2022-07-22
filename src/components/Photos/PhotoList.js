import React from "react";
import { Container } from "react-bootstrap";
import Favorite from "../Favorites/Favorite";
import "./styles.css";

const PhotoList = (props) => {
  const Img = (props) => (
    <li className="img-wrap">
      <img src={props.url} alt="" />
    </li>
  );
  console.log("test2");
  const results = props.data;
  let imgs = results.map((img) => (
    <div key={Math.random()}>
      <div className="images" key={Math.random()}>
        <div key={Math.random()}>
          <Img url={img.urls.small} key={img.id} className="img" />
          <div className="favs" key={Math.random()}>
            <Favorite key={Math.random()} />
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
