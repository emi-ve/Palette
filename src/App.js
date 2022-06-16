import logo from './assets/PaletteLogo.jpg';
import './App.css';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,  Navbar, NavDropdown } from 'react-bootstrap';
import PhotoList from './components/Photos/PhotoList';
import axios from 'axios'


class App extends Component{
    constructor() {
        super();
        this.state = {
          photos: [],
          counter: 1
    
        };
      }

    /*pull api*/

    componentDidMount() {
        axios.get('https://api.unsplash.com/photos/?client_id=34b1a6b2a6c2a9b3f6af5e39a76c9943bdbbaf10bd455336f70e98ca31250475&per_page=9')
          .then(response => {
            this.setState({
              photos: response.data
            });
          })
          .catch(error => {
            console.log("error", error)
          });
      }

      
      getMorePhotos = () => {
        console.log(this.state.counter)
        this.setState({ counter: this.state.counter + 1 })
        
        fetch(`https://api.unsplash.com/photos/?client_id=34b1a6b2a6c2a9b3f6af5e39a76c9943bdbbaf10bd455336f70e98ca31250475&per_page=9&page=${this.state.counter}`)
          .then(e => e.json())
          .then(photos => this.setState({ photos: photos }))
          
      }



    render() {
        return (
         <React.Fragment>
          
        
                    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Navbar.Brand href="#home">
                        <img src={logo} className="App-logo" alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#photos">Photos</Nav.Link>
                            <Nav.Link href="#favorites">Favorites</Nav.Link>
                            <Nav.Link href="#notes">Notes</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="main-content">
                <PhotoList 
                data={this.state.photos} 
                />
                
                </div>
                <button onClick={this.getMorePhotos} className="morePhotos">More Images</button>
           </React.Fragment>

                

        );
    }
}

export default App;

