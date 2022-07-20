import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNav from "./components/Navbar/MainNav";
import Favorite from "./components/Favorites/Favorite";
import PhotoList from "./components/Photos/PhotoList";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      counter: 1,
    };
  }

  /*pull api*/

  componentDidMount() {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=34b1a6b2a6c2a9b3f6af5e39a76c9943bdbbaf10bd455336f70e98ca31250475&per_page=9"
      )
      .then((response) => {
        this.setState({
          photos: response.data,
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  getMorePhotos = () => {
    console.log(this.state.counter);
    this.setState({ counter: this.state.counter + 1 });

    fetch(
      `https://api.unsplash.com/photos/?client_id=34b1a6b2a6c2a9b3f6af5e39a76c9943bdbbaf10bd455336f70e98ca31250475&per_page=9&page=${this.state.counter}`
    )
      .then((e) => e.json())
      .then((photos) => this.setState({ photos: photos }));
  };

  render() {
    return (
      <React.Fragment>
        <MainNav />
        <div className="">
          <PhotoList data={this.state.photos} />
        </div>
        <button onClick={this.getMorePhotos} className="morePhotos">
          More Images
        </button>
      </React.Fragment>
    );
  }
}

export default App;
