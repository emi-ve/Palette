import { GrFavorite } from "react-icons/gr";
import React from "react";
import ReactDOM from "react-dom";
import { Container } from "react-bootstrap";

const PhotoList = (props) => {
  const FavIcon = <GrFavorite />;

  const Img = (props) => (
    <li className="img-wrap">
      <img src={props.url} alt="" />
    </li>
  );

  const results = props.data;
  let imgs = results.map((img) => <Img url={img.urls.small} key={img.id} />);

  return (
	  
    <Container>
      <ul className="img-list justify-content-center">{imgs}</ul>
    </Container>
  );
};

export default PhotoList;
